import { add_country_body_schema } from "./add-country.body.schema";
import add_country_function from "./add-country.function";
import { add_country_query_schema } from "./add-country.query.schema";
import { add_country_tests } from "./add-country.test";
import { z } from "zod";

export let add_country_details = {
    module: 'Country',
    api_name: 'Add Country',
    api_description: 'This is Add Country API',
    method: 'post',
    path: '/country/add-country',
    query_schema: z.object(add_country_query_schema).strict(),
    body_schema: z.object(add_country_body_schema).strict(),
    execution_function: add_country_function,
    tests: add_country_tests,
    roles: ['Public']
}