import React from 'react'
import { listPartners } from '@/features/partners/service'

export default async function DashboardPartnersPage() {
  const items = await listPartners({ take: 50 })

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold">Partners</h2>
      <div className="mt-6">
        {items.length === 0 ? (
          <p>No partners yet.</p>
        ) : (
          <ul>
            {items.map((p: any) => (
              <li key={p.id} className="py-2">
                <strong>{p.name}</strong> — <span className="text-muted-foreground">{p.type}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
