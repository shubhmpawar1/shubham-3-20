export interface delete_video_note_function_params {
    user?: any
    note_id: number
}

export interface delete_video_note_function_return {
    code: number,
    message: string,
}

export interface delete_video_note_tests_interface {
    name: string,
    input: delete_video_note_function_params,
    check_output?: (input: delete_video_note_function_params, output: delete_video_note_function_return) => void
}