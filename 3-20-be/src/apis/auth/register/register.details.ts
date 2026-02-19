import { register_body_schema } from "./register.body.schema";
import register_function from "./register.function";
import { register_query_schema } from "./register.query.schema";
import { register_tests } from "./register.test";
import { z } from "zod";

export let register_details = {
    module: 'User',
    api_name: 'Register',
    api_description: 'Register new user with name, email and password',
    method: 'post',
    path: '/auth/register',
    query_schema: z.object(register_query_schema).strict(),
    body_schema: z.object(register_body_schema).strict(),
    execution_function: register_function,
    tests: register_tests,
    roles: ['Public']
}