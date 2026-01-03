export interface add_user_function_params {
    name: string
}

export interface add_user_function_return {
    code: number,
    message: string,
    data?: any,
}

export interface add_user_tests_interface {
    name: string,
    input: add_user_function_params,
    check_output?: (input: add_user_function_params, output: add_user_function_return) => void
}