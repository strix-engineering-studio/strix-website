"use client"

import { MoonStar, SunMedium } from "lucide-react"
import { useEffect, useState } from "react"
import { useTheme } from "@/components/shared/theme-provider"

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const isDark = resolvedTheme === "dark"

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setMounted(true), 0)
    return () => window.clearTimeout(timeoutId)
  }, [])

  if (!mounted) {
    return (
      <button
        type="button"
        className={className ?? "inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-2 text-xs font-medium text-foreground shadow-sm shadow-black/5 backdrop-blur-xl transition hover:border-primary/30 hover:bg-surface"}
        aria-label="Theme"
        title="Theme"
      >
        <MoonStar className="size-4 text-primary" />
        <span>Theme</span>
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={className ?? "inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-2 text-xs font-medium text-foreground shadow-sm shadow-black/5 backdrop-blur-xl transition hover:border-primary/30 hover:bg-surface"}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? <SunMedium className="size-4 text-primary" /> : <MoonStar className="size-4 text-primary" />}
      <span>{isDark ? "Dark" : "Light"}</span>
    </button>
  )
}