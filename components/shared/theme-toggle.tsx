"use client"

import { MoonStar, SunMedium } from "lucide-react"
import { useTheme } from "@/components/shared/theme-provider"

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, toggleTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={className ?? "inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-2 text-xs font-medium text-foreground shadow-sm shadow-black/5 backdrop-blur-xl transition hover:border-emerald-300/30 hover:bg-muted"}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? <SunMedium className="size-4 text-emerald-300" /> : <MoonStar className="size-4 text-emerald-500" />}
      <span>{isDark ? "Dark" : "Light"}</span>
    </button>
  )
}