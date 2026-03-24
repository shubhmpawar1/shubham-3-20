import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z)

export let delete_video_note_body_schema = {
    note_id: z.number().openapi({ example: 1 }),
};