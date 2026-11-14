import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getBlogPosts } from "@/lib/content";

export async function EngineeringJournalEditorial() {
  const articles = (await getBlogPosts()).slice(0, 3);

  return (
    <section id="engineering-journal" className="border-b border-border py-16 sm:py-20 lg:py-24">
      <div className="strix-container">
        <header className="mb-10 flex flex-col justify-between gap-5 border-b border-border pb-7 md:flex-row md:items-end">
          <div className="max-w-3xl space-y-4">
            <p className="editorial-meta text-primary">Insights</p>
            <h2 className="editorial-serif type-heading-1 text-foreground">
              Ideas for building useful, durable software.
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Technical perspectives on architecture, AI systems, and product engineering from the Strix journal.
            </p>
          </div>
          <Link
            href="/insights"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            View all insights
            <ArrowUpRight className="size-4" />
          </Link>
        </header>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article key={article.slug} className="flex h-full flex-col border border-border bg-card p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3 border-b border-border pb-3">
                <span className="editorial-meta text-primary">{article.tag}</span>
                <span className="font-mono text-[10px] text-muted-foreground">
                  {new Date(`${article.publishedAt}T00:00:00Z`).toLocaleDateString("en", {
                    month: "short",
                    year: "numeric",
                    timeZone: "UTC",
                  })}
                </span>
              </div>
              <h3 className="editorial-serif mt-5 text-2xl leading-tight text-foreground">
                <Link href={`/insights/${article.slug}`} className="transition-colors hover:text-primary">
                  {article.title}
                </Link>
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {article.excerpt}
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {article.readingTime}
                </span>
                <Link
                  href={`/insights/${article.slug}`}
                  aria-label={`Read ${article.title}`}
                  className="inline-flex size-9 items-center justify-center border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
