export interface get_favourite_videos_function_params {
    user?: any      // auth se aayega
    page: number
    page_size: number
    sort_by: string
    sort_order: string
}

export interface get_favourite_videos_function_return {
    code: number,
    message: string,
    data?: {
        videos: any[],
        total: number,
        page: number,
        page_size: number,
        total_pages: number
    }
}

export interface get_favourite_videos_tests_interface {
    name: string,
    input: get_favourite_videos_function_params,
    check_output?: (input: get_favourite_videos_function_params, output: get_favourite_videos_function_return) => void
}