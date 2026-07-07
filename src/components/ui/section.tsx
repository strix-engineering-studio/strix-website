import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type SectionProps = {
  children: ReactNode
  className?: string
  id?: string
  padding?: "sm" | "md" | "lg"
}

const paddingMap = {
  sm: "py-10 sm:py-12 lg:py-14",
  md: "py-14 sm:py-16 lg:py-20",
  lg: "py-16 sm:py-20 lg:py-24",
}

export function Section({ children, className, id, padding = "md" }: SectionProps) {
  return (
    <section id={id} className={cn("w-full", paddingMap[padding], className)}>
      {children}
    </section>
  )
}
