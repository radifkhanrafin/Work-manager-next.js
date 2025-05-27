import { NextResponse } from 'next/server'

export function middleware(request) {
    const token = request.cookies.get("login_token")?.value;

    const pathname = request.nextUrl.pathname;

    // ✅ Allow login and signup API routes
    if (pathname.startsWith('/api/login') || pathname.startsWith('/api/signup')) {
        return NextResponse.next();
    }

    // ✅ If visiting login or signup pages and already logged in, redirect to /profile
    const isAuthPage = pathname === '/login' || pathname === '/signup';
    if (isAuthPage && token) {
        return NextResponse.redirect(new URL('/profile', request.url));
    }

    // ✅ If visiting a protected page and not logged in, redirect to /login
    const isProtectedPage = !isAuthPage && !pathname.startsWith('/api') && (
        pathname.startsWith('/profile') ||
        pathname === '/add-task' ||
        pathname === '/show-task'
    );

    if (isProtectedPage && !token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // ✅ Default: allow request
    return NextResponse.next();
}

export const config = {
    matcher: ['/signup', '/login', '/add-task', '/show-task', '/profile/:path*', '/api/:path*']
}
