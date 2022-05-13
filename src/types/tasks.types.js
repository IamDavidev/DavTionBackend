import { gql } from "apollo-server-express";


export const typeDefs = gql`
    type Comemnt{
        _uid: ID!
        comment: String
        createdAt: String
    }
    type Task {
        _uid: ID
        title: String
        createdAt: String
        finishedAt: String
        description: String
        status: String
        priority: String
    }

    type Query {
        getAllTasks: [Task]!
    }

    
    # mutation
    type Mutation {
        addTask(
            title: String
            description: String
            status: String
            priority: String
            createdAt: String
            finishedAt: String
        ): Task
    }
`



// comment -> user [user] => comment