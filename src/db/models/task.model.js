import pkg from 'mongoose'
const { Schema, model } = pkg

export const taskSchema = new Schema({
    title: {
        type: String,
        reuqired: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: true
    },
    finishedAt: {
        type: String,
        required: true
    }
})


export const Task = model('Task', taskSchema)