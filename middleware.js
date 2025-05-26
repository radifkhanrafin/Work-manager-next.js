import { NextResponse } from 'next/server'

export function middleware(request) {

    const token = request.cookies.get("login_token")?.value

    // console.log("middleware :", token)

    if (request.nextUrl.pathname === '/api/login') {
        return
    }
    const loggedUser = request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/signup'

    // console.log("loggedUser", loggedUser)
    if (loggedUser) {
        if (token) {
            return NextResponse.redirect(new URL('/profile', request.url))
        }
    } else {
        if (!token) {
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/signup', '/login', '/add-task', '/show-task', '/profile/:path*', '/api/:path*']
}