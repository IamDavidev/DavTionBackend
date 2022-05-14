import { Task } from "../db/models/task.model.js"

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
        getAllTasks: async () => {
            const Tasks = await Task.find()
            console.log(Tasks)
            return Tasks
        }
    },
    Mutation: {
        addTask: (_, args) => {
            const { title, description, createdAt, finishedAt, status, priority } = args
            const taskNew = new Task({
                title,
                description,
                createdAt,
                finishedAt,
                status,
                priority
            })
            taskNew.save()
            return taskNew
        }
    }
}
