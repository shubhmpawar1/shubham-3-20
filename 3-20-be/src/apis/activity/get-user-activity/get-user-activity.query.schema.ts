import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z)

export let get_user_activity_query_schema = {
    filter: z.enum(['Week', 'Month']).optional().openapi({ example: 'Week' }),
    page: z.number().int().min(1).optional().openapi({ example: 1 }),
    limit: z.number().int().min(1).max(50).optional().openapi({ example: 10 }),
};