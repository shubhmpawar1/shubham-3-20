import { swaggerUI } from '@hono/swagger-ui'
import { OpenAPIHono } from '@hono/zod-openapi'
import { cors } from 'hono/cors'
import { sequelize } from './sequelize';
import jwt from 'jsonwebtoken'

// Define the context variables interface
interface ContextVariables {
  user?: {
    userId: string;
    email: string;
    [key: string]: any; // Allow additional properties from JWT payload
  };
}

export const app = new OpenAPIHono<{ Variables: ContextVariables }>()

app.get('/swagger', swaggerUI({ url: '/doc' }))

app.doc('/doc', {
    info: { title: 'An API', version: 'v1' },
    openapi: '3.1.0'
})

app.use('*', cors());

// Auth Middleware
app.use('*', async (c, next) => {
    const authHeader = c.req.header('Authorization');
    if (authHeader && authHeader.startsWith('Bearer ')) {
        try {
            const token = authHeader.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
                userId: string;
                email: string;
                [key: string]: any;
            };
            c.set('user', decoded);
        } catch (err) {
            // Invalid token — user null rahega
        }
    }
    await next();
});
