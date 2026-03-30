export interface get_user_activity_function_params {
    user?: any | undefined
    page?: number
    limit?: number
}

export interface PaginatedResponse {
    page: number
    limit: number
    total: number
    totalPages: number
}

// ─── Video item (Today / Last Week मध्ये दाखवायला) ────────────
export interface VideoHistoryItem {
    id: number
    title: string
    description: string
    thumbnail_url: string
    duration: number
    tags: string[]
    category: string
    difficulty_level?: string
    body_parts?: string[]
    is_essential: boolean
    // session context
    session_id: number | null        // कोणत्या session चा भाग होता
    session_title: string | null     // session चं नाव
    status: string                   // completed | skipped | in_progress
    watched_at: string               // createdAt timestamp
}

// ─── Today ─────────────────────────────────────────────────────
export interface TodayVideos {
    date: string
    total_minutes: number
    videos: VideoHistoryItem[]
    pagination: PaginatedResponse
}

// ─── Tomorrow (AI recommendations) ────────────────────────────
export interface SessionItem {
    id: number
    title: string
    description: string
    thumbnail_url: string
    total_duration: number
    tags: string[]
    category: string
    is_essential: boolean
    video_ids: number[]
}

export interface TomorrowRecommendations {
    date: string
    recommended_sessions: SessionItem[]
    ai_reason: string[]
    pagination: PaginatedResponse
}

// ─── Last Week (day-wise grouped) ─────────────────────────────
export interface DayGroup {
    day_name: string            // "Monday", "Tuesday"
    date: string                // "2026-03-24"
    total_minutes: number
    videos: VideoHistoryItem[]
}

export interface LastWeekVideos {
    days: DayGroup[]
    pagination: PaginatedResponse
}

// ─── Daily Essentials (category-wise grouped sessions) ─────────
export interface EssentialCategory {
    category_name: string       // "Sitting Exercises", "Mobilising Routine"
    sessions: SessionItem[]
    total_sessions: number
}

export interface DailyEssentials {
    categories: EssentialCategory[]
    ai_reason: string
    pagination: PaginatedResponse
}

// ─── Full return type ──────────────────────────────────────────
export interface get_user_activity_function_return {
    code: number
    message: string
    data: {
        today_videos: TodayVideos
        tomorrow_recommendations: TomorrowRecommendations
        last_week_videos: LastWeekVideos
        daily_essentials: DailyEssentials
    }
}

export interface get_user_activity_tests_interface {
    name: string
    input: get_user_activity_function_params
    check_output?: (input: get_user_activity_function_params, output: get_user_activity_function_return) => void
}