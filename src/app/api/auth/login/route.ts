import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(req: Request) {
    if (process.env.NODE_ENV === 'production' && process.env.ADMIN_BYPASS !== 'true') {
        return NextResponse.json({ error: 'Not allowed' }, { status: 403 })
    }

    const body = await req.json()
    const email = body?.email
    if (!email) return NextResponse.json({ error: 'Missing email' }, { status: 400 })

    // Find or create a user for development bootstrapping
    let user = await prisma.user.findUnique({ where: { email } })
    if (!user) {
        user = await prisma.user.create({ data: { email, name: email.split('@')[0], roles: ['SUPER_ADMIN'] } })
    }

    const res = NextResponse.json({ ok: true, email: user.email })
    // Set simple httpOnly cookie with user id (dev only)
    res.cookies.set('strix_user', user.id, { httpOnly: true, path: '/', maxAge: 60 * 60 * 24 * 7 })
    return res
}
