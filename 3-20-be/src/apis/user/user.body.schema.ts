import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z)

export let user_body_schema = {
    name: (z.string().optional() as any).openapi({ example: 'Akash' })
};
