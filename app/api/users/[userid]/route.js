import connectDB from "@/database/Database Connect/db";
import { User } from "@/database/Models/userSchema";
import { NextResponse } from "next/server";

connectDB();


export async function GET(request, { params }) {
    const { userid } = params;

    // console.log("user id", userid);
    try {

        const user = await User.findOne({ _id: userid }).select("-password");
        // console.log(user);
        if (!user) {
            return NextResponse.json({
                message: "User not found",
                status: 404,
            });
        }

        return NextResponse.json({
            message: `Successfully Found User: ${user.name}`,
            success: true,
            user,
        });



    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "i can't find user",
            status: 404,
        })
    }
}

export async function DELETE(request, { params }) {

    const { userid } = params;
    try {

        const deletedUser = await User.findByIdAndDelete(userid)
        // console.log(deletedUser);
        return NextResponse.json({
            message: `Successfully Delete user : ${deletedUser.name}`,
            success: true,
        });
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: `Delete not Successful`,
            success: false,
        });
    }


}


export async function PUT(req, { params }) {
    const { userid } = params;
    try {
        const updateData = await req.json();
        const user = await User.findByIdAndUpdate(userid, updateData, {
            new: true,
            runValidators: true,
        }) 

        return NextResponse.json({
            message: "user data update successful",
            status: 201,
            user
        })
    } catch (error) {
        return NextResponse.json({
            message: `user data update not successful : ${error.message}`,
            status: 501,
        })
    }
}