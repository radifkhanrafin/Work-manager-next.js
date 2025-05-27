import connectDB from "@/database/Database Connect/db";
import { Task } from "@/database/Models/taskSchema";
import { NextResponse } from "next/server";


connectDB();
export async function GET(request, { params }) {
    const { taskId } = params;

    try {

        // console.log(taskId)
        const findTask = await Task.findById(taskId);
        return NextResponse.json({
            message: "Find task",
            status: 201,
            findTask,
        })


    } catch (error) {
        return NextResponse.json({
            message: "Something Went wrong",
            status: 401,
        })
    }
}


export async function POST(request) {

    try {


        const { title, content, userId } = await request.json();


        const newTask = new Task({
            title, content, userId
        });

        const createTask = await newTask.save();

        return NextResponse.json({
            message: "Insert Complete",
            status: 201,
            createTask
        })


    } catch (error) {

    } return NextResponse.json({
        message: "Insert Incomplete",
        status: 401,
    })
}



export async function PUT(request, { params }) {

    const { taskId } = params;
    // console.log("taskId : ", taskId)
    try {


        const task = await request.json();
        // console.log("task : ", task);
        const updateTask = await Task.findByIdAndUpdate(taskId, task, {
            new: true,
            runValidators: true,
        })

        return NextResponse.json(updateTask);

    } catch (error) {
        return NextResponse.json(error.message);
    }

}
export async function PATCH(request, { params }) {

    try {
        const { taskId } = params 
        // const task = await request.json();
        const updateTask = await Task.findByIdAndUpdate(taskId, { status: 'complete' }, {
            new: true,
            runValidators: true,
        })
        // console.log(updateTask)
        return NextResponse.json({
            message:"Status Update Successful",
            success: true,
            updateTask
        });

    } catch (error) {
        return NextResponse.json(error.message);
    }

}



export async function DELETE(request, { params }) {
    const { taskId } = params;
    try {
        const task = await Task.findByIdAndDelete(taskId);
        if (!task) {
            return NextResponse.json(
                { message: 'Task not found' },
                { status: 404 }
            );
        }
        return NextResponse.json(
            { message: 'Task deleted successfully', task },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: 'Internal server error', error: error.message },
            { status: 500 }
        );
    }
}