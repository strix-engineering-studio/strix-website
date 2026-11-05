type PageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
};

export function PageShell({
  eyebrow,
  title,
  description,
  children,
}: PageShellProps) {
  return (
    <section className="section-space pt-10">
      <div className="strix-container space-y-12">
        {/* Editorial Header Banner */}
        <div className="relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm sm:p-10 lg:p-14">
          {/* Blueprint Grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 blueprint-grid opacity-60"
          />

          {/* Radial Warm Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 right-0 size-80 rounded-full bg-primary/10 blur-[100px]"
          />

          <div className="relative max-w-4xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1">
              <span className="size-1.5 rounded-full bg-primary" />
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-primary">
                {eyebrow}
              </span>
            </div>

            <h1 className="editorial-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {description}
            </p>
          </div>
        </div>

        {/* Page Content */}
        {children ? <div className="space-y-8">{children}</div> : null}
      </div>
    </section>
  );
}
