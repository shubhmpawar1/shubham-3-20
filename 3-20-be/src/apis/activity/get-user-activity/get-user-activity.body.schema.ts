import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z)

export let get_user_activity_body_schema = {
    name: z.string().optional().openapi({ example: 'Akash' })
};