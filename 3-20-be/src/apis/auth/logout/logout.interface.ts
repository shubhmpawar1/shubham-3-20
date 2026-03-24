export interface logout_function_params {
    _placeholder?: string
}

export interface logout_function_return {
    code: number,
    message: string,
}

export interface logout_tests_interface {
    name: string,
    input: logout_function_params,
    check_output?: (input: logout_function_params, output: logout_function_return) => void
}