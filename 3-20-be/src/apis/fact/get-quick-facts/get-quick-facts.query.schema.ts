import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z)

export let get_quick_facts_query_schema = {
    page: z.string().optional().openapi({ example: '1' }),
    page_size: z.string().optional().openapi({ example: '8' }),
    sort_by: z.string().optional().openapi({ example: '' }),
    sort_order: z.string().optional().openapi({ example: '' }),
    search: z.string().optional().openapi({ example: 'Search' }),
    skip: z.string().optional().openapi({ example: 'skip' }),
    limit: z.string().optional().openapi({ example: 'limit' }),
    sort: z.string().optional().openapi({ example: 'sort' }),
    filter: z.string().optional().openapi({ example: 'filter' }),
};