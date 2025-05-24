import { User } from "@/database/Models/userSchema";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export async function POST(request) {
    try {
        const { email, password } = await request.json();

        // Find user by email
        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({
                message: "This user is not available in the database.",
                status: 404,
            });
        }

        // Compare password
        const matched = bcrypt.compareSync(password, user.password);

        if (!matched) {
            return NextResponse.json({
                message: "Wrong password",
                status: 401,
            });
        }

        // Generate JWT token
        const token = jwt.sign(
            { _id: user._id },
            process.env.JWT_KEY,
            { expiresIn: '1d' }
        );

        console.log("token:", token);

        // Create response and set cookie
        const response = NextResponse.json({
            message: "Login successful",
            success: true,
            status: 200,
        });

        response.cookies.set("login_token", token, {
            httpOnly: true,
            maxAge: 60 * 60 * 24, // 1 day
        });

        return response;

    } catch (error) {
        return NextResponse.json({
            message: `Error: ${error.message}`,
            success: false,
            status: 500,
        });
    }
}
