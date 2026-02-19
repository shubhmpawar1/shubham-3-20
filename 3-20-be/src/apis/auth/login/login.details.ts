import { login_body_schema } from "./login.body.schema";
import login_function from "./login.function";
import { login_query_schema } from "./login.query.schema";
import { login_tests } from "./login.test";
import { z } from "zod";

export let login_details = {
    module: 'User',
    api_name: 'Login',
    api_description: 'Login with email and password',
    method: 'post',
    path: '/auth/login',
    query_schema: z.object(login_query_schema).strict(),
    body_schema: z.object(login_body_schema).strict(),
    execution_function: login_function,
    tests: login_tests,
    roles: ['Public']
}