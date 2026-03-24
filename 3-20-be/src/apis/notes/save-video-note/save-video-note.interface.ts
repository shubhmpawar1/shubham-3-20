export interface save_video_note_function_params {
    user?: any
    video_id: number
    note: string
}

export interface save_video_note_function_return {
    code: number,
    message: string,
    data?: any
}

export interface save_video_note_tests_interface {
    name: string,
    input: save_video_note_function_params,
    check_output?: (input: save_video_note_function_params, output: save_video_note_function_return) => void
}