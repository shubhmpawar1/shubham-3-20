import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z)

export let save_onboarding_answers_body_schema = {
    user_id: z.number().openapi({ example: 1 }),
    answers: z.record(
        z.string(),
        z.array(z.number())
    ).openapi({
        example: { "1": [3], "2": [5, 7], "3": [2] }
    }),
};