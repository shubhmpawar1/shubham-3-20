import { save_onboarding_answers_body_schema } from "./save-onboarding-answers.body.schema";
import save_onboarding_answers_function from "./save-onboarding-answers.function";
import { save_onboarding_answers_query_schema } from "./save-onboarding-answers.query.schema";
import { save_onboarding_answers_tests } from "./save-onboarding-answers.test";
import { z } from "zod";

export let save_onboarding_answers_details = {
    module: 'Onboarding',
    api_name: 'Save Onboarding Answers',
    api_description: 'Save user onboarding answers',
    method: 'post',
    path: '/onboarding/save-onboarding-answers',
    query_schema: z.object(save_onboarding_answers_query_schema).strict(),
    body_schema: z.object(save_onboarding_answers_body_schema).strict(),
    execution_function: save_onboarding_answers_function,
    tests: save_onboarding_answers_tests,
    roles: ['Public']
}