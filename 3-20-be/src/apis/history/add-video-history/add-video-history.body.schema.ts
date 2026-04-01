import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z)

export let add_video_history_body_schema = {
    video_id: z.number().int().positive().openapi({ example: 1 }),
    session_id: z.number().int().positive().optional().openapi({ example: 1 }),
    status: z.enum(['completed', 'in_progress', 'skipped']).optional().openapi({ example: 'completed' }),
};