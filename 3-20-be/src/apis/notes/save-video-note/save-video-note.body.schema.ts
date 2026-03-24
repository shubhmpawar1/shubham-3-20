import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z)

export let save_video_note_body_schema = {
    video_id: z.number().openapi({ example: 1 }),
    note: z.string().openapi({ example: 'This exercise helped my knee pain.' }),
};