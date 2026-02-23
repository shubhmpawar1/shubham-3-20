export interface save_onboarding_answers_function_params {
    user_id: number
    answers: Record<string, number[]>  // { "question_id": [answer_id, ...] }
}

export interface save_onboarding_answers_function_return {
    code: number,
    message: string,
    data?: any,
}

export interface save_onboarding_answers_tests_interface {
    name: string,
    input: save_onboarding_answers_function_params,
    check_output?: (input: save_onboarding_answers_function_params, output: save_onboarding_answers_function_return) => void
}