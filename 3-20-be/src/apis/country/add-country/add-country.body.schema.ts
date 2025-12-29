import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z)

let country_schema = {
        name: z.string().min(1, 'Field cannot be empty').max(30, 'Field cannot be more than 30 characters').optional(),
        code: z.any().optional().openapi({ example: '' }),
        is_active: z.boolean().optional().openapi({ example: true }),
}

export let add_country_body_schema: any = {
        ...country_schema,
        bulk_upload: z.array(z.object(country_schema)).optional()
};