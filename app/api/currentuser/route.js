import { NextResponse } from "next/server"
import jwt from "jsonwebtoken";
import { User } from "@/database/Models/userSchema";
import connectDB from "@/database/Database Connect/db";

connectDB()
export async function GET(request) {
    const token = request.cookies.get("login_token")?.value
    // console.log("token from current user :", token)

    const verifyUser = jwt.verify(token, process.env.JWT_KEY)

    //  console.log("login user from login route :", verifyUser)

    const user = await User.findById(verifyUser).select('-password')
    // console.log("login user from login route verifyUser :", user)
    return NextResponse.json(user)
}