import { update_country_body_schema } from "./update-country.body.schema";
import update_country_function from "./update-country.function";
import { update_country_query_schema } from "./update-country.query.schema";
import { update_country_tests } from "./update-country.test";
import { z } from "zod";

export let update_country_details = {
    module: 'Country',
    api_name: 'Update Country',
    api_description: 'This is Update Country API',
    method: 'post',
    path: '/country/update-country',
    query_schema: z.object(update_country_query_schema).strict(),
    body_schema: z.object(update_country_body_schema).strict(),
    execution_function: update_country_function,
    tests: update_country_tests,
    roles: ['Public']
}