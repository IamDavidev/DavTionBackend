
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
            const { title, description, createdAt, finishedAt, status, priority } = args
            const taskNew = {
                title,
                description,
                createdAt,
                finishedAt,
                status,
                priority
            }
            return exampleTasks = [...exampleTasks, taskNew]
        }
    }
}
