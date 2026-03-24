import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z)

export let get_favourite_videos_query_schema = {
    page: z.string().optional().openapi({ example: '1' }),
    page_size: z.string().optional().openapi({ example: '10' }),
    sort_by: z.string().optional().openapi({ example: 'createdAt' }),
    sort_order: z.string().optional().openapi({ example: 'DESC' }),
};