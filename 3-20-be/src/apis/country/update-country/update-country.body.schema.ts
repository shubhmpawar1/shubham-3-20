import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z)

export let update_country_body_schema = {
    name: z.string().optional().openapi({ example: 'India' }),
    code: z.any().optional().openapi({ example: '' }),
    is_active: z.boolean().optional().openapi({ example: true }),
};