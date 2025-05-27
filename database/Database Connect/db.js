import mongoose from 'mongoose';
import { User } from '../Models/userSchema';


const config = {
    isConnected: 0,
}
const connectDB = async () => {

    if (config.isConnected) {
        return
    }


    try {
        const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
            dbName: "work_manager"
        });

        console.log("Good ~~ Your Database is Connected:", connection.name);


        config.isConnected = connection.readyState
    } catch (error) {
        console.error("Not Good ~~ Failed to connect Database:", error.message);
    }
};

export default connectDB;
