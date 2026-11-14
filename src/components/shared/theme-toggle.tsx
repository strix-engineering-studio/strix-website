"use client"

import { MonitorPlay, Sun, Moon } from "lucide-react"
import { useEffect, useState } from "react"
import { useTheme } from "@/components/shared/theme-provider"

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setMounted(true), 0)
    return () => window.clearTimeout(timeoutId)
  }, [])

  if (!mounted) {
    return (
      <button
        type="button"
        className={className ?? "flex items-center gap-1 rounded-sm border border-border bg-card p-1 shadow-sm"}
        aria-label="Theme"
        title="Theme"
      >
        <span className="inline-flex size-8 items-center justify-center rounded-sm text-muted-foreground">
          <Moon className="size-4" />
        </span>
      </button>
    )
  }

  return (
    <div className={className ?? "flex items-center gap-1 rounded-sm border border-border bg-card p-1 shadow-sm"}>
      <button
        type="button"
        onClick={() => setTheme('system')}
        className={`inline-flex size-8 items-center justify-center rounded-sm transition-colors ${
          theme === 'system'
            ? 'bg-secondary text-foreground'
            : 'text-foreground/50 hover:text-foreground'
        }`}
        aria-label="System theme"
        aria-pressed={theme === 'system'}
        title="System theme"
      >
        <MonitorPlay className="size-4" />
      </button>

      <button
        type="button"
        onClick={() => setTheme('light')}
        className={`inline-flex size-8 items-center justify-center rounded-sm transition-colors ${
          theme === 'light'
            ? 'bg-secondary text-foreground'
            : 'text-foreground/50 hover:text-foreground'
        }`}
        aria-label="Light theme"
        aria-pressed={theme === 'light'}
        title="Light theme"
      >
        <Sun className="size-4" />
      </button>

      <button
        type="button"
        onClick={() => setTheme('dark')}
        className={`inline-flex size-8 items-center justify-center rounded-sm transition-colors ${
          theme === 'dark'
            ? 'bg-secondary text-foreground'
            : 'text-foreground/50 hover:text-foreground'
        }`}
        aria-label="Dark theme"
        aria-pressed={theme === 'dark'}
        title="Dark theme"
      >
        <Moon className="size-4" />
      </button>
    </div>
  )
}
