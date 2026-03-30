export interface get_home_details_function_params {
    user?: any
    filter?: string   // 'Week' | 'Month'
}

export interface get_home_details_function_return {
    code: number,
    message: string,
    data?: {
        minutes_moved: {
            this_week: number,
            movement_moments_completed: number,
            graph: { day: string, minutes: number }[]
        },
        continue_daily_plan: any | null,
        daily_essentials: any[],
        quick_facts: any[]
    }
}

export interface get_home_details_tests_interface {
    name: string,
    input: get_home_details_function_params,
    check_output?: (input: get_home_details_function_params, output: get_home_details_function_return) => void
}