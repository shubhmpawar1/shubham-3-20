import { Error_Interface } from "@config/interfaces/error.interface"
import { get_user_activity_function_params, get_user_activity_function_return } from "./get-user-activity.interface"
import { Transaction } from "sequelize"
import { sequelize } from "@src/setup/sequelize"

let get_user_activity_function = async (
    data: get_user_activity_function_params,
    transaction: Transaction
): Promise<get_user_activity_function_return | Error_Interface> => {
    try {
        // Auth check
        if (!data.user?.id) {
            return { code: 401, message: 'Unauthorized' }
        }

        const user_id = data.user.id
        const page = Math.max(1, data.page || 1)
        const limit = Math.min(50, Math.max(1, data.limit || 10))
        const offset = (page - 1) * limit

        const now = new Date()

        // Date boundaries
        const today_start = new Date(now)
        today_start.setHours(0, 0, 0, 0)

        const today_end = new Date(now)
        today_end.setHours(23, 59, 59, 999)

        const last_week_start = new Date(now)
        last_week_start.setDate(last_week_start.getDate() - 7)
        last_week_start.setHours(0, 0, 0, 0)

        const tomorrow = new Date(now)
        tomorrow.setDate(tomorrow.getDate() + 1)

        // Format a history row into a VideoHistoryItem
        const formatVideoHistory = (row: any) => ({
            id: row.id,
            title: row.title,
            description: row.description,
            thumbnail_url: row.thumbnail_url,
            duration: row.duration,
            tags: row.tags || [],
            category: row.category || row.tags?.[0] || 'General',
            difficulty_level: row.difficulty_level || null,
            body_parts: row.body_parts || [],
            is_essential: row.is_essential || false,
            session_id: row.session_id || null,
            session_title: row.session_title || null,
            status: row.status || 'completed',
            watched_at: row.watched_at,
        })

        // 1. TODAY'S VIDEOS
        const today_raw: any[] = await sequelize.query(`
            SELECT
                COUNT(*) OVER()     AS total_count,
                v.id, v.title, v.description,
                v.thumbnail_url, v.duration,
                v.tags,
                uvh.session_id,
                s.title             AS session_title,
                uvh.status,
                uvh."createdAt"     AS watched_at
            FROM user_video_history uvh
            JOIN videos v ON v.id = uvh.video_id
            LEFT JOIN sessions s ON s.id = uvh.session_id
            WHERE uvh.user_id    = :user_id
              AND uvh."createdAt" >= :today_start
              AND uvh."createdAt" <= :today_end
            ORDER BY uvh."createdAt" DESC
            LIMIT :limit OFFSET :offset
        `, {
            replacements: { user_id, today_start, today_end, limit, offset },
            type: 'SELECT',
            transaction
        })

        const today_total = Number(today_raw[0]?.total_count || 0)

        const today_minutes_raw: any[] = await sequelize.query(`
            SELECT COALESCE(SUM(v.duration), 0) AS total_minutes
            FROM user_video_history uvh
            JOIN videos v ON v.id = uvh.video_id
            WHERE uvh.user_id    = :user_id
              AND uvh."createdAt" >= :today_start
              AND uvh."createdAt" <= :today_end
        `, {
            replacements: { user_id, today_start, today_end },
            type: 'SELECT',
            transaction
        })

        const today_minutes = Number(today_minutes_raw[0]?.total_minutes || 0)

        // 2. TOMORROW RECOMMENDATIONS (AI)
        const tomorrow_recommendations = await getAIRecommendations(
            user_id, tomorrow, page, limit, transaction
        )

        // 3. LAST WEEK — Day-wise grouped
        const last_week_raw: any[] = await sequelize.query(`
            SELECT
                COUNT(*) OVER()                                          AS total_count,
                DATE(uvh."createdAt")                                    AS activity_date,
                TRIM(TO_CHAR(uvh."createdAt", 'Day'))                    AS day_name,
                SUM(v.duration) OVER(PARTITION BY DATE(uvh."createdAt")) AS day_minutes,
                v.id, v.title, v.description,
                v.thumbnail_url, v.duration,
                v.tags,
                uvh.session_id,
                s.title     AS session_title,
                uvh.status,
                uvh."createdAt" AS watched_at
            FROM user_video_history uvh
            JOIN videos v ON v.id = uvh.video_id
            LEFT JOIN sessions s ON s.id = uvh.session_id
            WHERE uvh.user_id    = :user_id
              AND uvh."createdAt" >= :last_week_start
              AND uvh."createdAt" <  :today_start
            ORDER BY DATE(uvh."createdAt") DESC, uvh."createdAt" DESC
            LIMIT :limit OFFSET :offset
        `, {
            replacements: { user_id, last_week_start, today_start, limit, offset },
            type: 'SELECT',
            transaction
        })

        const last_week_total = Number(last_week_raw[0]?.total_count || 0)

        // Group by day
        const day_map: Record<string, any> = {}
        for (const row of last_week_raw) {
            const key = String(row.activity_date)
            if (!day_map[key]) {
                day_map[key] = {
                    day_name: row.day_name,
                    date: key,
                    total_minutes: Number(row.day_minutes || 0),
                    videos: []
                }
            }
            day_map[key].videos.push(formatVideoHistory(row))
        }

        // 4. DAILY ESSENTIALS
        const daily_essentials = await getDailyEssentials(user_id, page, limit, transaction)

        return {
            code: 200,
            message: 'Get User Activity Successful',
            data: {
                today_videos: {
                    date: today_start.toISOString().split('T')[0],
                    total_minutes: today_minutes,
                    videos: today_raw.map(formatVideoHistory),
                    pagination: {
                        page, limit,
                        total: today_total,
                        totalPages: Math.ceil(today_total / limit)
                    }
                },
                tomorrow_recommendations,
                last_week_videos: {
                    days: Object.values(day_map),
                    pagination: {
                        page, limit,
                        total: last_week_total,
                        totalPages: Math.ceil(last_week_total / limit)
                    }
                },
                daily_essentials
            }
        }

    } catch (error: any) {
        console.error('Error in get_user_activity_function:', error)
        throw error
    }
}

// Daily Essentials — is_essential sessions, AI-sorted by user preference, grouped by category
async function getDailyEssentials(
    user_id: number,
    page: number,
    limit: number,
    transaction: Transaction
): Promise<any> {
    const offset = (page - 1) * limit

    // Get user's most-used session categories
    const user_prefs: any[] = await sequelize.query(`
        SELECT s.category, COUNT(*) AS cnt
        FROM user_video_history uvh
        JOIN sessions s ON s.id = uvh.session_id
        WHERE uvh.user_id = :user_id
          AND uvh.session_id IS NOT NULL
        GROUP BY s.category
        ORDER BY cnt DESC
        LIMIT 10
    `, { replacements: { user_id }, type: 'SELECT', transaction })

    const preferred_categories: string[] = user_prefs.map((r: any) => r.category).filter(Boolean)

    // Build CASE expression safely
    const pref_case = preferred_categories.length > 0
        ? `CASE WHEN s.category = ANY(ARRAY[:preferred_categories]) THEN 0 ELSE 1 END`
        : `1`

    const essentials_raw: any[] = await sequelize.query(`
        SELECT
            COUNT(*) OVER() AS total_count,
            s.id, s.title, s.description, s.thumbnail_url,
            s.total_duration, s.tags, s.category, s.is_essential, s.video_ids,
            ${pref_case} AS pref_rank
        FROM sessions s
        WHERE s.is_essential = true
        ORDER BY pref_rank ASC, s.category ASC, s.id ASC
        LIMIT :limit OFFSET :offset
    `, {
        replacements: {
            ...(preferred_categories.length > 0 ? { preferred_categories } : {}),
            limit,
            offset
        },
        type: 'SELECT',
        transaction
    })

    const total = Number(essentials_raw[0]?.total_count || 0)

    // Group by category
    const cat_map: Record<string, any> = {}
    for (const row of essentials_raw) {
        const cat = row.category || 'General'
        if (!cat_map[cat]) {
            cat_map[cat] = { category_name: cat, sessions: [], total_sessions: 0 }
        }
        cat_map[cat].sessions.push({
            id: row.id,
            title: row.title,
            description: row.description,
            thumbnail_url: row.thumbnail_url,
            total_duration: row.total_duration,
            tags: row.tags || [],
            category: cat,
            is_essential: row.is_essential || false,
            video_ids: row.video_ids || []
        })
        cat_map[cat].total_sessions++
    }

    return {
        categories: Object.values(cat_map),
        ai_reason: preferred_categories.length > 0
            ? `Suggested based on your interest in ${preferred_categories.slice(0, 2).join(' and ')}`
            : 'Curated essential sessions for you',
        pagination: { page, limit, total, totalPages: Math.ceil(total / limit) }
    }
}

// Tomorrow AI Recommendations — sessions user hasn't done, sorted by preference
async function getAIRecommendations(
    user_id: number,
    tomorrow: Date,
    page: number,
    limit: number,
    transaction: Transaction
): Promise<any> {
    const offset = (page - 1) * limit

    // Sessions already completed by this user
    const done_raw: any[] = await sequelize.query(`
        SELECT DISTINCT session_id
        FROM user_video_history
        WHERE user_id = :user_id AND session_id IS NOT NULL
    `, { replacements: { user_id }, type: 'SELECT', transaction })

    const done_ids: number[] = done_raw.map((r: any) => r.session_id).filter(Boolean)

    // User's preferred categories
    const prefs: any[] = await sequelize.query(`
        SELECT s.category, COUNT(*) AS cnt
        FROM user_video_history uvh
        JOIN sessions s ON s.id = uvh.session_id
        WHERE uvh.user_id = :user_id AND uvh.session_id IS NOT NULL
        GROUP BY s.category
        ORDER BY cnt DESC LIMIT 5
    `, { replacements: { user_id }, type: 'SELECT', transaction })

    const preferred_categories: string[] = prefs.map((r: any) => r.category).filter(Boolean)

    let recommendations: any[] = []

    // First try: preferred category sessions not yet done
    if (preferred_categories.length > 0) {
        recommendations = await sequelize.query(`
            SELECT
                s.id, s.title, s.description, s.thumbnail_url,
                s.total_duration, s.tags, s.category, s.is_essential, s.video_ids,
                COUNT(*) OVER() AS total_count
            FROM sessions s
            WHERE s.category = ANY(ARRAY[:preferred_categories])
              ${done_ids.length > 0 ? 'AND s.id NOT IN (:done_ids)' : ''}
            ORDER BY RANDOM()
            LIMIT :limit OFFSET :offset
        `, {
            replacements: {
                preferred_categories,
                done_ids: done_ids.length > 0 ? done_ids : [0],
                limit, offset
            },
            type: 'SELECT',
            transaction
        })
    }

    // Fallback: any sessions not yet done
    if (recommendations.length === 0) {
        recommendations = await sequelize.query(`
            SELECT
                s.id, s.title, s.description, s.thumbnail_url,
                s.total_duration, s.tags, s.category, s.is_essential, s.video_ids,
                COUNT(*) OVER() AS total_count
            FROM sessions s
            ${done_ids.length > 0 ? 'WHERE s.id NOT IN (:done_ids)' : ''}
            ORDER BY RANDOM()
            LIMIT :limit OFFSET :offset
        `, {
            replacements: {
                done_ids: done_ids.length > 0 ? done_ids : [0],
                limit, offset
            },
            type: 'SELECT',
            transaction
        })
    }

    const total = Number(recommendations[0]?.total_count || 0)

    return {
        date: tomorrow.toISOString().split('T')[0],
        recommended_sessions: recommendations.map((s: any) => ({
            id: s.id,
            title: s.title,
            description: s.description,
            thumbnail_url: s.thumbnail_url,
            total_duration: s.total_duration,
            tags: s.tags || [],
            category: s.category || 'General',
            is_essential: s.is_essential || false,
            video_ids: s.video_ids || []
        })),
        ai_reason: preferred_categories.length > 0
            ? [`Based on your interest in ${preferred_categories.slice(0, 2).join(', ')}`,
                `Sessions you haven't tried yet`]
            : ['New sessions curated for you'],
        pagination: { page, limit, total, totalPages: Math.ceil(total / limit) }
    }
}

export default get_user_activity_function