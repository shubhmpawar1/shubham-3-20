export interface remove_favourite_video_function_params {
    video_id: number
    user?: any
}

export interface remove_favourite_video_function_return {
    code: number,
    message: string,
}

export interface remove_favourite_video_tests_interface {
    name: string,
    input: remove_favourite_video_function_params,
    check_output?: (input: remove_favourite_video_function_params, output: remove_favourite_video_function_return) => void
}
