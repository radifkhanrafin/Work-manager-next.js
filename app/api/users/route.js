import connectDB from "@/database/Database Connect/db";
import { User } from "@/database/Models/userSchema";
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs";


connectDB()
export async function GET(request) {

    try {
        const user = await User.find().select("-password");
        return NextResponse.json(user)
    } catch (error) {
        // console.log(error)
        return NextResponse.json({
            message: "Failed to get  users !!!",
            status: false,
        })
    }
}

export async function HEAD(request) { }


//create user API
export async function POST(request) {

    const bodyData = await request.json();
    // console.log(bodyData);
    const { name, email, password, about, profileURL } = bodyData;



    const user = new User({ name, email, password, about, profileURL });

    console.log(user)
    try {

        user.password = bcrypt.hashSync(user.password, parseInt(process.env.BCRYPT_SALT))
        const createUser = await user.save();
        // console.log(createUser)
        const response = NextResponse.json(user, {
            status: 201,
        })
        return response;

    } catch (error) {
        // console.log(error)
        return NextResponse.json({
            message: "Failed to create user !!!",
            status: false,
        })
    }
}

export async function PUT(request) { }

export async function DELETE(request) { }

export async function PATCH(request) { }

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and set the appropriate Response `Allow` header depending on the other methods defined in the Route Handler.
export async function OPTIONS(request) { }