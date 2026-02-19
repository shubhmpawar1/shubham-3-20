import { social_auth_body_schema } from "./social-auth.body.schema";
import social_auth_function from "./social-auth.function";
import { social_auth_query_schema } from "./social-auth.query.schema";
import { social_auth_tests } from "./social-auth.test";
import { z } from "zod";

export let social_auth_details = {
    module: 'User',
    api_name: 'Social Auth',
    api_description: 'Login or Register with Google, Apple, Facebook or Microsoft',
    method: 'post',
    path: '/auth/social-auth',
    query_schema: z.object(social_auth_query_schema).strict(),
    body_schema: z.object(social_auth_body_schema).strict(),
    execution_function: social_auth_function,
    tests: social_auth_tests,
    roles: ['Public']
}