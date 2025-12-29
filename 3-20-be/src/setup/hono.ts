import { swaggerUI } from '@hono/swagger-ui'
import { OpenAPIHono } from '@hono/zod-openapi'
import { cors } from 'hono/cors'
import { sequelize } from './sequelize';

export const app = new OpenAPIHono()

// sequelize.sync({ alter: false }).then(() => {console.log("Database Connected!") }).catch((err) => {console.log(err) });

app.get(
    '/swagger',
    swaggerUI({
        url: '/doc'
    })
)

app.doc('/doc', {
    info: {
        title: 'An API',
        version: 'v1'
    },
    openapi: '3.1.0'
})

app.use('*', cors());