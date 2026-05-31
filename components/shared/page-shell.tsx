type PageShellProps = {
  eyebrow: string
  title: string
  description: string
  children?: React.ReactNode
}

export function PageShell({ eyebrow, title, description, children }: PageShellProps) {
  return (
    <section className="px-3 py-8 sm:px-4 lg:px-6 lg:py-10">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="overflow-hidden rounded-xl border border-border/70 bg-[linear-gradient(135deg,rgba(216,158,88,0.16),rgba(122,168,112,0.09)_36%,rgba(255,255,255,0.04))] px-5 py-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] sm:px-6 sm:py-8 lg:px-8 lg:py-10">
          <div className="max-w-4xl space-y-5">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] uppercase tracking-[0.38em] text-white/70">
              {eyebrow}
            </div>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              <span className="font-heading">{title}</span>
            </h1>
            <p className="max-w-3xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">{description}</p>
          </div>
        </div>
        {children ? <div className="space-y-8">{children}</div> : null}
      </div>
    </section>
  )
}
