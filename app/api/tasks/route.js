
import connectDB from "@/database/Database Connect/db";
import { Task } from "@/database/Models/taskSchema";
import { NextResponse } from "next/server";


connectDB()
export async function GET(request) {
    try {
        const tasks = await Task.find();
        if (!tasks) {
            return NextResponse.json({
                message: "The requested resource was not found.",
                status: 404,
                tasks,
            })
        }
        return NextResponse.json({
            message: "Data find",
            status: 200,
            tasks,
        })
    } catch (error) {
        return NextResponse.json({
            message: `Internal Server Error – Try again later.: ${error.message}`,
            status: 500,

        })
    }
}

export async function POST(request, { params }) {
    try {

        const bodyData = await request.json();
        console.log(bodyData);


        const task = new Task(bodyData)
        const newTask = await task.save();
        return NextResponse.json({
            message: "Successfully Insert data ",
            status: 200,
            task: newTask,
        })

    } catch (error) {
        return NextResponse.json({
            message: `Internal Server Error – Try again later.: ${error.message}`,
            status: 500,

        })
    }
}