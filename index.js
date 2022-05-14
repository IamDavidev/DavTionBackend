import 'dotenv/config.js'
import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import http from 'http'

import { bbdd } from './src/db/task.db.js'
import { typeDefs } from './src/types/tasks.types.js'
import { resolvers } from './src/resolvers/tasks.resolvers.js'
import { PORT } from './src/constants/client.js'
import { Task } from './src/db/models/task.model.js'

const app = express()

app.get('/', (_, res) => {
    res.status(200).send(`<h1>Davtion Backend</h1>`)
})

async function MainServer(typeDefs, resolvers) {
    const app = express()
    const httpServer = http.createServer(app)

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        csrfPrevention: true
    })

    await server.start();
    server.applyMiddleware({
        app,
        path: '/graphql',
    })
    await new Promise(resolve => httpServer.listen({ port: PORT }, resolve))
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
}
bbdd()

MainServer(typeDefs, resolvers)