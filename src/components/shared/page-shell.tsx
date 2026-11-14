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
    <section className="section-space">
      <div className="strix-container space-y-12">
        <header className="max-w-4xl space-y-5 border-b border-border pb-8 sm:pb-10">
          <div className="inline-flex items-center border-l-2 border-primary py-1 pl-3">
            <span className="editorial-meta text-primary">{eyebrow}</span>
          </div>

          <h1 className="editorial-serif type-display-lg text-foreground">
            {title}
          </h1>

          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {description}
          </p>
        </header>

        {/* Page Content */}
        {children ? <div className="space-y-8">{children}</div> : null}
      </div>
    </section>
  );
}
