export interface login_function_params {
    email: string
    password: string
}

export interface login_function_return {
    code: number,
    message: string,
    data?: any,
}

export interface login_tests_interface {
    name: string,
    input: login_function_params,
    check_output?: (input: login_function_params, output: login_function_return) => void
}