import React from 'react'
import { getProductBySlug } from '@/features/products/service'

export default async function ProductDetail({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug)

  if (!product) {
    return <div className="p-8">Product not found</div>
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold">{product.name}</h1>
      <p className="mt-4 text-muted-foreground">{product.shortDescription}</p>
      <section className="mt-6">
        <h2 className="text-xl font-medium">Architecture</h2>
        <div className="prose mt-4">{product.architecture || 'No architecture content yet.'}</div>
      </section>
    </div>
  )
}
