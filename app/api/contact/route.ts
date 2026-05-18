import { NextResponse } from "next/server"
import { z } from "zod"
import { getContactInquiryCollection } from "@/lib/db"
import { budgetBands, contactCategories, timelineBands } from "@/lib/site"

const contactSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    company: z.string().optional(),
    category: z.string().optional(),
    budget: z.string().optional(),
    timeline: z.string().optional(),
    brief: z.string().optional(),
})

// Simple in-memory IP rate limiter (suitable for demo/local; replace with durable solution in production)
type RateEntry = { count: number; resetAt: number }
const RATE_LIMIT_WINDOW = 60_000 // 1 minute
const RATE_LIMIT_MAX = 10
const ipRateMap = new Map<string, RateEntry>()

function getClientIp(request: Request) {
    const forwarded = request.headers.get("x-forwarded-for")
    if (forwarded) return forwarded.split(",")[0].trim()
    return request.headers.get("x-real-ip") || "unknown"
}

export async function POST(request: Request) {
    // Basic rate limiting by IP
    const ip = getClientIp(request)
    const now = Date.now()
    const entry = ipRateMap.get(ip)
    if (!entry || now > entry.resetAt) {
        ipRateMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW })
    } else {
        if (entry.count >= RATE_LIMIT_MAX) {
            return NextResponse.json({ ok: false, message: "Too many requests" }, { status: 429 })
        }
        entry.count += 1
        ipRateMap.set(ip, entry)
    }

    const payload = await request.json().catch(() => null)
    const result = contactSchema.safeParse(payload)

    if (!result.success) {
        return NextResponse.json({ ok: false, message: "Invalid submission" }, { status: 400 })
    }

    // Additional domain validation against allowed lists
    const data = result.data as Record<string, unknown>
    if (data.category && typeof data.category === "string" && !contactCategories.includes(data.category)) {
        return NextResponse.json({ ok: false, message: "Invalid category" }, { status: 400 })
    }
    if (data.budget && typeof data.budget === "string" && !budgetBands.includes(data.budget)) {
        return NextResponse.json({ ok: false, message: "Invalid budget" }, { status: 400 })
    }
    if (data.timeline && typeof data.timeline === "string" && !timelineBands.includes(data.timeline)) {
        return NextResponse.json({ ok: false, message: "Invalid timeline" }, { status: 400 })
    }

    try {
        const collection = await getContactInquiryCollection()
        const timestamp = new Date()
        const created = await collection.insertOne({
            ...result.data,
            createdAt: timestamp,
            updatedAt: timestamp,
        })

        return NextResponse.json({ ok: true, persisted: true, id: created.insertedId.toString(), message: "Inquiry received" })
    } catch (error) {
        console.error("Contact inquiry persistence failed", error)
        return NextResponse.json({ ok: false, persisted: false, message: "Server error" }, { status: 500 })
    }
}
