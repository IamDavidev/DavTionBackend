import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import http from 'http'

import { typeDefs } from './src/types/tasks.types.js'
import { resolvers } from './src/resolvers/tasks.resolvers.js'
import { PORT } from './src/constants/client.js'



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
        path: '/'
    })
    await new Promise(resolve => httpServer.listen({ port: PORT }, resolve))
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
}

MainServer(typeDefs, resolvers)
