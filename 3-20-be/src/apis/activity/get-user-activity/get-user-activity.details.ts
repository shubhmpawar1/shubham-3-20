import { get_user_activity_body_schema } from "./get-user-activity.body.schema";
import get_user_activity_function from "./get-user-activity.function";
import { get_user_activity_query_schema } from "./get-user-activity.query.schema";
import { get_user_activity_tests } from "./get-user-activity.test";
import { z } from "zod";

export let get_user_activity_details = {
    module: 'Activity',
    api_name: 'Get User Activity',
    api_description: 'User activity screen — daily breakdown with videos watched, duration, categories, and detailed video information',
    method: 'get',
    path: '/activity/get-user-activity',
    query_schema: z.object(get_user_activity_query_schema).strict(),
    body_schema: z.object(get_user_activity_body_schema).strict(),
    execution_function: get_user_activity_function,
    tests: get_user_activity_tests,
    roles: ['User']
}