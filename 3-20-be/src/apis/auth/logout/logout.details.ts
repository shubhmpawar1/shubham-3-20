import { logout_body_schema } from "./logout.body.schema";
import logout_function from "./logout.function";
import { logout_query_schema } from "./logout.query.schema";
import { logout_tests } from "./logout.test";
import { z } from "zod";

export let logout_details = {
    module: 'Auth',
    api_name: 'Logout',
    api_description: 'User ko logout karo',
    method: 'get',
    path: '/auth/logout',
    query_schema: z.object(logout_query_schema).strict(),
    body_schema: z.object(logout_body_schema).strict(),
    execution_function: logout_function,
    tests: logout_tests,
    roles: ['User', 'Admin']
}