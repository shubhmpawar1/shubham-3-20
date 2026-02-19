export interface get_onboarding_questions_function_params {
    name?: string
}

export interface get_onboarding_questions_function_return {
    code: number,
    message: string,
    data?: any[],
}

export interface get_onboarding_questions_tests_interface {
    name: string,
    input: get_onboarding_questions_function_params,
    check_output?: (input: get_onboarding_questions_function_params, output: get_onboarding_questions_function_return) => void
}