import { get_country_list_body_schema } from "./get-country-list.body.schema";
import get_country_list_function from "./get-country-list.function";
import { get_country_list_query_schema } from "./get-country-list.query.schema";
import { get_country_list_tests } from "./get-country-list.test";
import { z } from "zod";

export let get_country_list_details = {
    module: 'Country',
    api_name: 'Get Country List',
    api_description: 'This is Country List API',
    method: 'get',
    path: '/country/get-country-list',
    query_schema: z.object(get_country_list_query_schema).strict(),
    body_schema: z.object(get_country_list_body_schema).strict(),
    execution_function: get_country_list_function,
    tests: get_country_list_tests,
    roles: ['Public']
}