import mongoose from 'mongoose';
const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@blog-app.wics8xw.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL);
        console.log('Database connected Successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};
export default Connection;



