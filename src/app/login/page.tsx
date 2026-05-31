import React from 'react'

export default function LoginPage() {
  return (
    <div style={{ padding: 48 }}>
      <h1 style={{ fontSize: 28, fontWeight: 700 }}>Admin access required</h1>
      <p style={{ marginTop: 12 }}>
        The dashboard is protected. For initial development you can enable access by setting the environment variable
        <strong> ADMIN_BYPASS=true</strong> in your local environment. A proper authentication flow will be implemented
        in the next iteration.
      </p>
    </div>
  )
}
