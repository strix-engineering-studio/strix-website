"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { Search, Sparkles } from "lucide-react"
import { navigation } from "@/lib/site"

export function CommandMenu() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        setOpen((value) => !value)
      }

      if (event.key === "Escape") {
        setOpen(false)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  const commands = useMemo(
    () => [
      { label: "Book a call", href: "/contact" },
      { label: "View work", href: "/work" },
      { label: "Read the blog", href: "/blog" },
      ...navigation,
    ],
    []
  )

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-3 text-sm text-white/70 shadow-2xl backdrop-blur-xl transition hover:bg-white/12"
      >
        <Search className="size-4" />
        <span>Cmd K</span>
      </button>

      {open ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div
            className="w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-[#07111f]/95 shadow-[0_0_80px_rgba(16,185,129,0.15)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
              <Sparkles className="size-4 text-emerald-300" />
              <input
                autoFocus
                placeholder="Search pages, actions, and case studies"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
              />
            </div>
            <div className="grid gap-2 p-3">
              {commands.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm text-white/75 transition hover:border-white/12 hover:bg-white/10"
                >
                  <span>{item.label}</span>
                  <span className="text-xs uppercase tracking-[0.3em] text-white/35">Open</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
