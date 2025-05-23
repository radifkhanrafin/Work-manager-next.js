import mongoose from 'mongoose';
import { User } from '../Models/userSchema';

const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
            dbName: "work_manager"
        });

        console.log("Good ~~ Your Database is Connected:", connection.name);

        const user = new User({
            name: "test name ",
            email: "test@gmail.com",
            password: "testing password",
            about: "testing about",
            profileURL: "photo "
        })


        await user.save();
    } catch (error) {
        console.error("Not Good ~~ Failed to connect Database:", error.message);
    }
};

export default connectDB;
