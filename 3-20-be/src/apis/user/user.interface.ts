export interface user_function_params {
    name: string
}

export interface user_function_return {
    code: number,
    message: string,
}

export interface user_tests_interface {
    name: string,
    input: user_function_params,
    check_output?: (input: user_function_params, output: user_function_return) => void
}