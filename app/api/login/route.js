import { User } from "@/database/Models/userSchema"; 
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import status from "daisyui/components/status";
export async function POST(request) {



    try {
        const { email, password } = await request.json();

        const user = await User.findOne({ email: email });
        // console.log(user)

        if (user == null || !user) {
            return NextResponse.json({
                message: "This User Not Available on Database",
                status: 404
            })
        }

        const matched = bcrypt.compareSync(password, user.password)

        if (!matched) {
            return NextResponse.json({
                message: "Wrong Password",

            })
        }

        return NextResponse.json({
            message: "Login Successful",
            status:201,
        })
    } catch (error) {f
        return NextResponse.json({
            message: `error message :${ error.message}`,
            success: false,
            status: 500
        })
    }
}