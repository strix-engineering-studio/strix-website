type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="text-sm font-medium uppercase tracking-[0.35em] text-emerald-300/80">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        <span className="font-serif">{title}</span>
      </h2>
      <p className="max-w-2xl text-pretty text-base leading-7 text-white/68 sm:text-lg">{description}</p>
    </div>
  )
}
