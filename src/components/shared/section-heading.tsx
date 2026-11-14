type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-4xl space-y-5">
      <div className="inline-flex items-center border-l-2 border-primary pl-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {eyebrow}
      </div>
      <h2 className="type-heading-1 text-balance text-foreground">
        <span className="editorial-serif font-normal">{title}</span>
      </h2>
      <p className="body-large max-w-2xl text-pretty text-muted-foreground">{description}</p>
    </div>
  )
}
