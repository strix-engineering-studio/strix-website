import { NextResponse } from 'next/server'
import { listProducts, createProduct } from '@/features/products/service'

export async function GET() {
    const items = await listProducts({ take: 100 })
    return NextResponse.json(items)
}

export async function POST(req: Request) {
    const body = await req.json()
    const created = await createProduct(body)
    return NextResponse.json(created)
}
