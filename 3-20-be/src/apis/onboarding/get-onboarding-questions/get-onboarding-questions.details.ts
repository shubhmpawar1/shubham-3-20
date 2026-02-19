import { get_onboarding_questions_body_schema } from "./get-onboarding-questions.body.schema";
import get_onboarding_questions_function from "./get-onboarding-questions.function";
import { get_onboarding_questions_query_schema } from "./get-onboarding-questions.query.schema";
import { get_onboarding_questions_tests } from "./get-onboarding-questions.test";
import { z } from "zod";

export let get_onboarding_questions_details = {
    module: 'OnboardingQuestion',
    api_name: 'Get Onboarding Questions',
    api_description: 'Get Onboarding Questions Description',
    method: 'get',
    path: '/onboarding/get-onboarding-questions',
    query_schema: z.object(get_onboarding_questions_query_schema).strict(),
    body_schema: z.object(get_onboarding_questions_body_schema).strict(),
    execution_function: get_onboarding_questions_function,
    tests: get_onboarding_questions_tests,
    roles: ['Public']
}