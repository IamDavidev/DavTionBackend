import { ApolloServer, gql } from 'apollo-server-express'
import express from 'express'
import http from 'http'

const typeDefs = gql``
const resolvers = {}
const PORT = process.env.PORTSERVER || 3001

async function MainServer(typeDefs, resolvers) {
    const app = express()
    const httpServer = http.createServer(app)

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        csrfPrevention: true

    })

    await server.start();
    server.applyMiddleware({ app })

    await new Promise(resolve => {
        httpServer.listen({
            port: PORT
        }), resolve
    })
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
}

MainServer(typeDefs, resolvers)