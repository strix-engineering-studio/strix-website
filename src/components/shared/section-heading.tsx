type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-4xl space-y-4">
      <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-foreground/60">
        <span>{eyebrow}</span>
        <span className="h-px w-10 bg-foreground/15" />
      </div>
      <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl xl:text-6xl">
        <span className="font-heading">{title}</span>
      </h2>
      <p className="max-w-2xl text-pretty text-sm leading-7 text-foreground/70 sm:text-base">{description}</p>
    </div>
  )
}
