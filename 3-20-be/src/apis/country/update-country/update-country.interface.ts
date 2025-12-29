export interface update_country_function_params {
    id: number
    name?: string
    // nationality?: string
    code?: string
    number_code?: any
    user?: any
    is_active?: boolean;
}

export interface update_country_function_return {
    code: number,
    message: string,
    data?: any
}

export interface update_country_tests_interface {
    name: string,
    input: update_country_function_params,
    check_output?: (input: update_country_function_params, output: update_country_function_return) => void
}