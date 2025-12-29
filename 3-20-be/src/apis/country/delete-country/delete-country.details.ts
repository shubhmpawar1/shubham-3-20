import { delete_country_body_schema } from "./delete-country.body.schema";
import delete_country_function from "./delete-country.function";
import { delete_country_query_schema } from "./delete-country.query.schema";
import { delete_country_tests } from "./delete-country.test";
import { z } from "zod";

export let delete_country_details = {
    module: 'Country',
    api_name: 'Delete Country',
    api_description: 'This is Delete Country API',
    method: 'delete',
    path: '/country/delete-country',
    query_schema: z.object(delete_country_query_schema).strict(),
    body_schema: z.object(delete_country_body_schema).strict(),
    execution_function: delete_country_function,
    tests: delete_country_tests,
    roles: ['Public']
}