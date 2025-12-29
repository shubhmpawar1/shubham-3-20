export interface delete_country_function_params {
    id: number
}

export interface delete_country_function_return {
    code: number,
    message: string
}

export interface delete_country_tests_interface {
    name: string,
    input: delete_country_function_params,
    check_output?: (input: delete_country_function_params, output: delete_country_function_return) => void
}