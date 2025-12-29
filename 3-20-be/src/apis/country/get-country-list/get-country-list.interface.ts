export interface get_country_list_function_params {
    page?: number
    page_size?: number
    sort_by?: string
    sort_order?: string
    search?: string
    filter?: any;
    is_active?: boolean
    user?: any
}

export interface get_country_list_function_return {
    code: number,
    message: string,
    count: number,
    data: any
}

export interface get_country_list_tests_interface {
    name: string,
    input: get_country_list_function_params,
    check_output?: (input: get_country_list_function_params, output: get_country_list_function_return) => void
}