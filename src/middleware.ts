import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl

    if (pathname.startsWith('/dashboard')) {
        // Allow when ADMIN_BYPASS=true
        if (process.env.ADMIN_BYPASS === 'true') {
            return NextResponse.next()
        }

        // Allow if a dev auth cookie exists (strix_user)
        const cookie = req.cookies.get('strix_user')
        if (cookie) return NextResponse.next()

        // Otherwise redirect to /login (placeholder)
        const loginUrl = new URL('/login', req.url)
        return NextResponse.redirect(loginUrl)
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard/:path*'],
}
