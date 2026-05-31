import React from 'react'
import { listOpenSource } from '@/features/openSource/service'

export default async function DashboardOpenSourcePage() {
  const items = await listOpenSource({ take: 50 })

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold">Open Source Projects</h2>
      <div className="mt-6">
        {items.length === 0 ? (
          <p>No open-source projects yet.</p>
        ) : (
          <ul>
            {items.map((o: any) => (
              <li key={o.id} className="py-2">
                <strong>{o.name}</strong>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
