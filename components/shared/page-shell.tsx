type PageShellProps = {
  eyebrow: string
  title: string
  description: string
  children?: React.ReactNode
}

export function PageShell({ eyebrow, title, description, children }: PageShellProps) {
  return (
    <section className="px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="max-w-4xl space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-emerald-300/80">{eyebrow}</p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="max-w-3xl text-pretty text-base leading-7 text-white/68 sm:text-lg">{description}</p>
        </div>
        {children}
      </div>
    </section>
  )
}
