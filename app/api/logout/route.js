import { httpAxios } from "@/httpsHelper/httpAxios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(params) {

    try {
        const response = NextResponse.json({
            message: 'Log Out Successful',
            success: true,
        })
        response.cookies.set('login_token', '', {
            path: '/',
            expires: new Date(0),
        })

        // console.log('response from log out',response)
        return response

    } catch (error) {
        return NextResponse.json({
            message: 'Failed to Log Out',
            success: true
        })
    }
}