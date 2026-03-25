import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z)

export let get_home_details_query_schema = {
    filter: z.enum(['Week', 'Month']).optional().openapi({ example: 'Week' }),
};