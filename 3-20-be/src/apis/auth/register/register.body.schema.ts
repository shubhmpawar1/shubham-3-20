import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z)

export let register_body_schema = {
    name: z.string().openapi({ example: 'Akash' }),
    email: z.string().email().openapi({ example: 'user@example.com' }),
    password: z.string().min(6).openapi({ example: 'password123' }),
};