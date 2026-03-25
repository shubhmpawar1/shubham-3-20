import { get_home_details_body_schema } from "./get-home-details.body.schema";
import get_home_details_function from "./get-home-details.function";
import { get_home_details_query_schema } from "./get-home-details.query.schema";
import { get_home_details_tests } from "./get-home-details.test";
import { z } from "zod";

export let get_home_details_details = {
    module: 'Home',
    api_name: 'Get Home Details',
    api_description: 'Home screen data — minutes moved graph, daily plan, essentials, quick fact',
    method: 'get',
    path: '/home/get-home-details',
    query_schema: z.object(get_home_details_query_schema).strict(),
    body_schema: z.object(get_home_details_body_schema).strict(),
    execution_function: get_home_details_function,
    tests: get_home_details_tests,
    roles: ['User']
}