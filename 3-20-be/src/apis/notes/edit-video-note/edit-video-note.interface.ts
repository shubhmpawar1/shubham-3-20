export interface edit_video_note_function_params {
    user?: any
    note_id: number
    note: string
}

export interface edit_video_note_function_return {
    code: number,
    message: string,
    data?: any
}

export interface edit_video_note_tests_interface {
    name: string,
    input: edit_video_note_function_params,
    check_output?: (input: edit_video_note_function_params, output: edit_video_note_function_return) => void
}