import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type CardProps = {
  children: ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn("rounded-[20px] border border-black/10 bg-background/70 shadow-[0_10px_32px_rgba(11,11,10,0.035)] backdrop-blur-sm dark:border-white/10", className)}>
      {children}
    </div>
  )
}

export function CardHeader({ children, className }: CardProps) {
  return <div className={cn("space-y-3", className)}>{children}</div>
}

export function CardTitle({ children, className }: CardProps) {
  return <h3 className={cn("text-xl font-semibold tracking-[-0.01em] text-foreground", className)}>{children}</h3>
}

export function CardDescription({ children, className }: CardProps) {
  return <p className={cn("text-sm leading-7 text-foreground/70", className)}>{children}</p>
}

export function CardContent({ children, className }: CardProps) {
  return <div className={cn("space-y-4", className)}>{children}</div>
}
