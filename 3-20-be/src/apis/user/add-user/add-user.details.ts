import { add_user_body_schema } from "./add-user.body.schema";
import add_user_function from "./add-user.function";
import { add_user_query_schema } from "./add-user.query.schema";
import { add_user_tests } from "./add-user.test";
import { z } from "zod";

export let add_user_details = {
    module: 'User',
    api_name: 'Add User',
    api_description: 'Add User Description',
    method: 'post',
    path: '/user/add-user',
    query_schema: z.object(add_user_query_schema).strict(),
    body_schema: z.object(add_user_body_schema).strict(),
    execution_function: add_user_function,
    tests: add_user_tests,
    roles: ['Public']
}