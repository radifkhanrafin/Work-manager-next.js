import connectDB from "@/database/Database Connect/db";
import { Task } from "@/database/Models/taskSchema";
import { User } from "@/database/Models/userSchema";
import { NextResponse } from "next/server";


connectDB();
export async function GET(request, { params }) {

    const { userid } = params;
    console.log("userTask : ", userid)
    try {
        // console.log(params)
        const userTask = await Task.find({ userId: userid })
        console.log("userTask 2 :", userTask);
        return NextResponse.json(userTask)

    } catch (error) {
        console.log(error.message)
        return NextResponse.json(error.message)
    }
}