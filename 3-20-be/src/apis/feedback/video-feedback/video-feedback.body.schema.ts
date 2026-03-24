import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z)

export let video_feedback_body_schema = {
    video_id: z.number().optional().openapi({ example: 1 }),
    session_id: z.string().optional().openapi({ example: 'abc-123' }),
    rating: z.number().min(1).max(5).openapi({ example: 4 }),
    adjustments: z.array(
        z.enum(['easier', 'harder', 'shorter', 'longer', 'change'])
    ).default([]).openapi({ example: ['easier', 'shorter'] }),
};