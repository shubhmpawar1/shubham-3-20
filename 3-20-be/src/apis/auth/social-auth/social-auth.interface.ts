export interface social_auth_function_params {
    provider: 'google' | 'apple' | 'facebook' | 'microsoft'
    provider_id: string
    email?: string   // optional
    name?: string    // optional
    profile_picture?: string
}

export interface social_auth_function_return {
    code: number,
    message: string,
    data?: any,
}

export interface social_auth_tests_interface {
    name: string,
    input: social_auth_function_params,
    check_output?: (input: social_auth_function_params, output: social_auth_function_return) => void
}