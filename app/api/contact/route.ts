import { NextResponse } from "next/server"
import { z } from "zod"
import { prisma } from "@/lib/db"

const contactSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    company: z.string().optional(),
    category: z.string().optional(),
    budget: z.string().optional(),
    timeline: z.string().optional(),
    brief: z.string().optional(),
})

export async function POST(request: Request) {
    const payload = await request.json().catch(() => null)
    const result = contactSchema.safeParse(payload)

    if (!result.success) {
        return NextResponse.json({ ok: false, message: "Invalid submission" }, { status: 400 })
    }

    let persisted = false

    try {
        await prisma.contactInquiry.create({ data: result.data })
        persisted = true
    } catch (error) {
        console.error("Contact inquiry persistence failed", error)
    }

    return NextResponse.json({ ok: true, persisted, message: "Inquiry received" })
}
