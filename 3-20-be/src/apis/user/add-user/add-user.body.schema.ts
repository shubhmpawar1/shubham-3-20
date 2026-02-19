import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z)

export let add_user_body_schema = {
    name: z.string().optional().openapi({ example: 'Akash' }),
    email: z.string().optional().openapi({ example: 'user@example.com' }),
    password: z.string().min(6).openapi({ example: 'password123' }),
    google_id: z.string().optional().openapi({ example: 'google_user_123' }),
    apple_id: z.string().optional().openapi({ example: 'apple_user_456' }),
    microsoft_id: z.string().optional().openapi({ example: 'microsoft_user_789' }),
    facebook_id: z.string().optional().openapi({ example: 'facebook_user_abc' }),
    profile_picture: z.string().optional().openapi({ example: 'https://example.com/profile.jpg' }),
};
