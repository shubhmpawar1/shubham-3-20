import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z)

export let add_favourite_video_body_schema = {
    video_id: z.number().openapi({ example: 1 }),
};
