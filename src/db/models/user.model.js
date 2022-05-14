import pkg from 'mongoose'
const { Schema, model, } = pkg


export const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    photoURL: {
        type: String,
        required: true
    },
    lastLogin: {
        type: String,
        required: true
    },
    isLoggedIn: Boolean,
    _token: String,
})


export const User = model('User', UserSchema)
