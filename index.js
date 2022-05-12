import { ApolloServer, gql } from 'apollo-server-express'
import express from 'express'
import http from 'http'

const typeDefs = gql`
    type Task {
        id: ID
        title: String
        createdAt: String
        finishedAt: String
        description: String
        status: String
        priority: String
    }
    type Query {
        tasks: [Task]
    }
`
const resolvers = {
    Query: {
        tasks: () => {
            return [
                {
                    id: '1',
                    title: 'Task 1',
                    createdAt: '2020-01-01',
                    finishedAt: '2020-01-01',
                    description: 'Description 1',
                    status: 'Status 1',
                    priority: 'Priority 1'
                }
            ]
        }
    }
}
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
    server.applyMiddleware({
        app,
        path: '/'
    })
    await new Promise(resolve => httpServer.listen({ port: PORT }, resolve))
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
}

MainServer(typeDefs, resolvers)
