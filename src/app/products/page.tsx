import React from 'react'
import { listProducts } from '@/features/products/service'
import Link from 'next/link'

export default async function ProductsPage() {
  const products = await listProducts({ take: 50 })

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold">Products</h1>
      <div className="mt-6 grid grid-cols-1 gap-6">
        {products.map((p: any) => (
          <article key={p.id} className="p-4 border rounded">
            <h2 className="text-xl font-medium">
              <Link href={`/products/${p.slug}`}>{p.name}</Link>
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">{p.shortDescription}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
