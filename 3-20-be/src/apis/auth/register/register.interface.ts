export interface register_function_params {
    name: string
    email: string
    password: string
}

export interface register_function_return {
    code: number,
    message: string,
    data?: any,
}

export interface register_tests_interface {
    name: string,
    input: register_function_params,
    check_output?: (input: register_function_params, output: register_function_return) => void
}