export interface add_favourite_video_function_params {
    video_id: number
    user?: any
}

export interface add_favourite_video_function_return {
    code: number,
    message: string,
}

export interface add_favourite_video_tests_interface {
    name: string,
    input: add_favourite_video_function_params,
    check_output?: (input: add_favourite_video_function_params, output: add_favourite_video_function_return) => void
}
