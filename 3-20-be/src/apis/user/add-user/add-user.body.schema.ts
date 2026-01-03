import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z)

export let add_user_body_schema = {
    name: z.string().optional().openapi({ example: 'Akash' })
};