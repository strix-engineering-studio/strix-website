import React from 'react'
import DashboardShell from '@/components/layout/dashboard-shell'
import { getCurrentUser } from '@/modules/auth/get-current-user'
import { cookies } from 'next/headers'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser()

  // If no user, render a minimal shell that prompts to login
  return (
    <html>
      <body>
        <DashboardShell>
          {user ? (
            children
          ) : (
            <div style={{ padding: 24 }}>
              <h2>Sign in required</h2>
              <p>Please sign in via <a href="/login">/login</a> to access the dashboard.</p>
            </div>
          )}
        </DashboardShell>
      </body>
    </html>
  )
}
