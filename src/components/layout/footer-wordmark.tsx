export function FooterWordmark() {
  return (
    <section
      aria-label="Strix Engineering Studio"
      className="border-y border-border bg-surface-warm"
    >
      <div className="strix-container flex flex-col gap-4 py-8 sm:flex-row sm:items-end sm:justify-between sm:py-10">
        <p className="editorial-serif text-5xl leading-none tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          STRIX
        </p>
        <p className="editorial-meta text-muted-foreground">
          System before software · India · Global delivery
        </p>
      </div>
      <div aria-hidden="true" className="h-px w-full bg-primary/60" />
    </section>
  );
}
