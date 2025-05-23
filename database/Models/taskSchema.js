import mongoose from 'mongoose';
const { Schema } = mongoose;
const taskSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    content: {
        type: String,
        require: true,
    },
    Status: {
        type: String,
        enum: ["pending", "complete"],
        default: "pending",
    },
    addedDate: {
        type: Date,
        default: Date.now(),
    },
    userId: {
        type: mongoose.ObjectId,
        require: true,
    }
})

// export const Task = mongoose.models.tasks || mongoose.model("tasks", taskSchema);
export const Task = mongoose.models.tasks || mongoose.model("tasks", taskSchema);