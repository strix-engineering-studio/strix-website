import React from 'react'

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ borderBottom: '1px solid #e6e6e6', padding: '16px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ fontWeight: 700 }}>STRIX</div>
          <nav style={{ display: 'flex', gap: 12 }}>
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/case-studies">Case Studies</a>
            <a href="/dashboard">Dashboard</a>
          </nav>
        </div>
      </header>
      <main style={{ flex: 1 }}>{children}</main>
      <footer style={{ borderTop: '1px solid #e6e6e6', padding: 24, textAlign: 'center' }}>
        © {new Date().getFullYear()} Strix Engineering Studio
      </footer>
    </div>
  )
}
