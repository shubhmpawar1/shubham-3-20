import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z)

export let get_onboarding_questions_body_schema = {
    name: z.string().optional().openapi({ example: 'Akash' })
};