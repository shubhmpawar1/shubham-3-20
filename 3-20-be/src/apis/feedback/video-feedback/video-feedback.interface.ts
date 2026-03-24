export interface video_feedback_function_params {
    video_id?: number
    session_id?: string
    rating: number
    adjustments: string[]
    user?: any
}

export interface video_feedback_function_return {
    code: number,
    message: string,
}

export interface video_feedback_tests_interface {
    name: string,
    input: video_feedback_function_params,
    check_output?: (input: video_feedback_function_params, output: video_feedback_function_return) => void
}
