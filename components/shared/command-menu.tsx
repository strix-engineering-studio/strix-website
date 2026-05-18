"use client"

import { MessageCircle } from "lucide-react"

export function CommandMenu() {
  return (
    <a
      href="https://wa.me/918421334187"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400 px-4 py-3 text-sm font-medium text-slate-950 shadow-2xl shadow-emerald-500/20 transition hover:bg-emerald-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="size-4" />
      <span>WhatsApp</span>
    </a>
  )
}
