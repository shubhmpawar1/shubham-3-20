export interface add_country_function_params {
    name: string
    code?: any
    user?: any
    is_active?: any
    bulk_upload?: any[]
}

export interface add_country_function_return {
    code: number,
    message: string,
    data?: any
}

export interface add_country_tests_interface {
    name: string,
    input: add_country_function_params,
    check_output?: (input: add_country_function_params, output: add_country_function_return) => void
}