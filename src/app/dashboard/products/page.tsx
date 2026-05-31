import React from 'react'
import { listProducts } from '@/features/products/service'

export default async function DashboardProductsPage() {
  const products = await listProducts({ take: 50 })

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold">Products</h2>
      <div className="mt-6">
        {products.length === 0 ? (
          <p>No products yet.</p>
        ) : (
          <ul>
            {products.map((p: any) => (
              <li key={p.id} className="py-2">
                <strong>{p.name}</strong> — <span className="text-muted-foreground">{p.status}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
