export interface get_country_function_params {
    id: number
}

export interface get_country_function_return {
    code: number,
    message: string,
    data?:any
}

export interface get_country_tests_interface {
    name: string,
    input: get_country_function_params,
    check_output?: (input: get_country_function_params, output: get_country_function_return) => void
}