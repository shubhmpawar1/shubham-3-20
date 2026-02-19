import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z)

export let social_auth_body_schema = {
    provider: z.enum(['google', 'apple', 'facebook', 'microsoft']).openapi({ example: 'google' }),
    provider_id: z.string().openapi({ example: 'google_user_123' }),
    email: z.string().email().optional().openapi({ example: 'user@example.com' }), // optional karo
    name: z.string().optional().openapi({ example: 'Akash' }), // optional karo
    profile_picture: z.string().optional().openapi({ example: 'https://example.com/profile.jpg' }),
};