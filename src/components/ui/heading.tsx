import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type SectionHeadingProps = {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: "left" | "center"
  className?: string
  titleClassName?: string
  descriptionClassName?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl space-y-4", align === "center" ? "mx-auto text-center" : "text-left", className)}>
      {eyebrow ? (
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary">{eyebrow}</p>
      ) : null}
      <h2 className={cn("text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl", titleClassName)}>{title}</h2>
      {description ? <p className={cn("text-sm leading-7 text-foreground/70", descriptionClassName)}>{description}</p> : null}
    </div>
  )
}
