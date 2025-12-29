import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z)

export let delete_country_query_schema = {
    id: z.string().openapi({ example: '1' })
};