import { get_quick_facts_body_schema } from "./get-quick-facts.body.schema";
import get_quick_facts_function from "./get-quick-facts.function";
import { get_quick_facts_query_schema } from "./get-quick-facts.query.schema";
import { get_quick_facts_tests } from "./get-quick-facts.test";
import { z } from "zod";

export let get_quick_facts_details = {
    module: 'QuickFacts',
    api_name: 'Get Quick Facts',
    api_description: 'This is Quick Facts List API',
    method: 'get',
    path: '/fact/get-quick-facts',
    query_schema: z.object(get_quick_facts_query_schema).strict(),
    body_schema: z.object(get_quick_facts_body_schema).strict(),
    execution_function: get_quick_facts_function,
    tests: get_quick_facts_tests,
    roles: ['Public']
}