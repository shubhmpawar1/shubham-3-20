import { user_body_schema } from "./user.body.schema";
import user_function from "./user.function";
import { user_query_schema } from "./user.query.schema";
import { user_tests } from "./user.test";
import { z } from "zod";

export let user_details = {
    module: 'User',
    api_name: 'User',
    api_description: 'User Description',
    method: 'get',
    path: '/user',
    query_schema: z.object(user_query_schema).strict(),
    body_schema: z.object(user_body_schema).strict(),
    execution_function: user_function,
    tests: user_tests,
    roles: ['Public']
}