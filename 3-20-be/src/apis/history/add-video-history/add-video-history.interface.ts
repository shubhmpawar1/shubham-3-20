export interface add_video_history_function_params {
    user_id: number
    video_id: number
    session_id?: number
    status?: string
}

export interface add_video_history_function_return {
    code: number,
    message: string,
    data?: any,
}

export interface add_video_history_tests_interface {
    name: string,
    input: add_video_history_function_params,
    check_output?: (input: add_video_history_function_params, output: add_video_history_function_return) => void
}