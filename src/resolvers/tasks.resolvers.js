
let exampleTasks = [
    {
        id: '1',
        title: 'Task 1',
        createdAt: '2020-01-01',
        finishedAt: '2020-01-01',
        description: 'Description 1',
        status: 'In progress',
        priority: 'Low'

    }
]

export const resolvers = {
    Query: {
        getAllTasks: () => exampleTasks
    },
    Mutation: {
        addTask: (_, args) => {
            const { tilte, description, createdAt, finishedAt, status, priofity } = args
            const taskNew = {
                tilte,
                description,
                createdAt,
                finishedAt,
                status,
                priofity
            }
            return exampleTasks = [...exampleTasks, taskNew]
        }
    }
}
