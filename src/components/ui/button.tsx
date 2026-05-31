import React from 'react'

export default function Button({ children, onClick, className }: { children: React.ReactNode; onClick?: () => void; className?: string }) {
  return (
    <button
      onClick={onClick}
      className={"inline-flex items-center px-4 py-2 rounded-md bg-black text-white " + (className || '')}
    >
      {children}
    </button>
  )
}
