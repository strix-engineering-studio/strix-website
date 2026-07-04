import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type BadgeProps = {
  children: ReactNode
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span className={cn("inline-flex items-center rounded-full border border-black/10 bg-background/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground/70 dark:border-white/10 dark:bg-white/5", className)}>
      {children}
    </span>
  )
}
