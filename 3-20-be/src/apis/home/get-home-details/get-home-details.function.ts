import { Error_Interface } from "@config/interfaces/error.interface"
import { get_home_details_function_params, get_home_details_function_return } from "./get-home-details.interface"
import { Transaction, literal, Op } from "sequelize"
import { Video } from "@src/models/video.model"
import { QuickFact } from "@src/models/quick-fact.model"
import { sequelize } from "@src/setup/sequelize"

let get_home_details_function = async (data: get_home_details_function_params, transaction: Transaction): Promise<get_home_details_function_return | Error_Interface> => {
    try {
        // 1. Auth check
        if (!data.user?.id) {
            return { code: 401, message: 'Unauthorized' }
        }

        const user_id = data.user.id
        const filter = data.filter || 'Week'

        // ─── Minutes Moved ───────────────────────────────────────────
        const now = new Date()

        let date_from: Date
        let group_format: string
        let day_label: string

        if (filter === 'Month') {
            // Last 30 days, grouped by week
            date_from = new Date(now)
            date_from.setDate(now.getDate() - 29)
            date_from.setHours(0, 0, 0, 0)
            group_format = 'W'   // week number
            day_label = 'Week'
        } else {
            // Current week (Mon–Sun)
            const day_of_week = now.getDay() === 0 ? 6 : now.getDay() - 1
            date_from = new Date(now)
            date_from.setDate(now.getDate() - day_of_week)
            date_from.setHours(0, 0, 0, 0)
            group_format = 'Dy'  // Mon, Tue...
            day_label = 'Day'
        }

        const daily_minutes: any[] = await sequelize.query(`
            SELECT 
                TO_CHAR(vf."createdAt", '${group_format}') AS day,
                COALESCE(SUM(v.duration), 0) AS minutes
            FROM video_feedbacks vf
            JOIN videos v ON v.id = vf.video_id
            WHERE vf.user_id = :user_id
              AND vf."createdAt" >= :date_from
            GROUP BY TO_CHAR(vf."createdAt", '${group_format}'), DATE(vf."createdAt")
            ORDER BY DATE(vf."createdAt") ASC
        `, {
            replacements: { user_id, date_from },
            type: 'SELECT',
            transaction
        })

        const total_minutes = daily_minutes.reduce((sum: number, row: any) => sum + Number(row.minutes), 0)
        const movement_moments_completed = daily_minutes.length

        // ─── Continue Daily Plan (1 random video) ───────────────────
        const continue_daily_plan = await Video.findOne({
            order: literal('RANDOM()'),
            attributes: ['id', 'title', 'description', 'thumbnail_url', 'duration', 'tags'],
            transaction, raw: true
        })

        // ─── Daily Essentials (videos tagged 'essential') ───────────
        const daily_essentials = await Video.findAll({
            where: {
                tags: { [Op.overlap]: ['essential'] }
            },
            attributes: ['id', 'title', 'description', 'thumbnail_url', 'duration', 'tags'],
            limit: 3,
            order: literal('RANDOM()'),
            transaction, raw: true
        })

        // ─── Quick Fact (random) ─────────────────────────────────────
        const quick_fact = await QuickFact.findOne({
            order: literal('RANDOM()'),
            attributes: ['id', 'fact', 'source', 'createdAt', 'updatedAt'],
            transaction, raw: true
        })

        return {
            code: 200,
            message: 'Get Home Details Successful',
            data: {
                minutes_moved: {
                    this_week: total_minutes,
                    movement_moments_completed,
                    graph: daily_minutes.map((row: any) => ({
                        day: row.day,
                        minutes: Number(row.minutes)
                    }))
                },
                continue_daily_plan: continue_daily_plan || null,
                daily_essentials: daily_essentials || [],
                quick_fact: quick_fact || null
            }
        }

    } catch (error: any) {
        throw error
    }
}

export default get_home_details_function