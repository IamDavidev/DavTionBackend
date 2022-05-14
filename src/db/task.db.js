import pkg from 'mongoose';
const { connect } = pkg;

const API_MONGO_URL = process.env.API_MONGO_URL || 'mongodb://localhost:27017/tasks';


export async function bbdd() {
    try {

        await connect(API_MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(
            () => console.log('MongoDB connected'),
        ).catch(err => console.log(err))

    } catch (err) {
        console.log(err)
    }
}