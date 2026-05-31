import React from 'react'
import { listContactRequests } from '@/features/contact/service'

export default async function DashboardContactsPage() {
  const items = await listContactRequests({ take: 50 })

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold">Contact Requests</h2>
      <div className="mt-6">
        {items.length === 0 ? (
          <p>No contact requests yet.</p>
        ) : (
          <ul>
            {items.map((c: any) => (
              <li key={c.id} className="py-2">
                <strong>{c.name}</strong> — <span className="text-muted-foreground">{c.status}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
