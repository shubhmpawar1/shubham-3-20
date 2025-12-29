import { get_country_body_schema } from "./get-country.body.schema";
import get_country_function from "./get-country.function";
import { get_country_query_schema } from "./get-country.query.schema";
import { get_country_tests } from "./get-country.test";
import { z } from "zod";

export let get_country_details = {
    module: 'Country',
    api_name: 'Get Country',
    api_description: 'This is Get Country API',
    method: 'get',
    path: '/country/get-country',
    query_schema: z.object(get_country_query_schema).strict(),
    body_schema: z.object(get_country_body_schema).strict(),
    execution_function: get_country_function,
    tests: get_country_tests,
    roles: ['Public']
}