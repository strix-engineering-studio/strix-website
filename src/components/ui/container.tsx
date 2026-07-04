import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type ContainerProps = {
  children: ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  return <div className={cn("mx-auto w-full max-w-7xl px-3 sm:px-4 lg:px-6", className)}>{children}</div>
}
