import React from 'react'
import { listCaseStudies } from '@/features/caseStudies/service'

export default async function DashboardCaseStudiesPage() {
  const items = await listCaseStudies({ take: 50 })

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold">Case Studies</h2>
      <div className="mt-6">
        {items.length === 0 ? (
          <p>No case studies yet.</p>
        ) : (
          <ul>
            {items.map((c: any) => (
              <li key={c.id} className="py-2">
                <strong>{c.title}</strong> — <span className="text-muted-foreground">{c.status}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
