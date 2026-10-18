
"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Layers3,
} from "lucide-react";

export type ShowcaseItem = {
  slug: string;
  title: string;
  description: string;
  href: string;
  category?: string;
  image?: string;
  tags?: string[];
  eyebrow?: string;
};

type HorizontalShowcaseProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  viewAllHref: string;
  viewAllLabel?: string;
  items: ShowcaseItem[];
  columns?: 2 | 3;
  emptyMessage?: string;
};

export function HorizontalShowcase({
  eyebrow,
  title,
  description,
  viewAllHref,
  viewAllLabel = "View all",
  items,
  columns = 3,
  emptyMessage = "More work will be published here soon.",
}: HorizontalShowcaseProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(direction: "left" | "right") {
    const container = scrollRef.current;
    if (!container) return;

    const distance = container.clientWidth * 0.85;

    container.scrollBy({
      left: direction === "right" ? distance : -distance,
      behavior: "smooth",
    });
  }

  return (
    <section className="border-y border-border/70 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div className="mb-7 flex items-end justify-between gap-4 sm:mb-9">
          <div className="min-w-0">
            {eyebrow && (
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
                {eyebrow}
              </p>
            )}

            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {title}
            </h2>

            {description && (
              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
                {description}
              </p>
            )}
          </div>

          <Link
            href={viewAllHref}
            className="inline-flex shrink-0 items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
          >
            <span className="hidden sm:inline">{viewAllLabel}</span>
            <span className="sm:hidden">All</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Cards and scrolling controls */}
        {items.length > 0 ? (
          <>
            <div className="relative">
              <div
                ref={scrollRef}
                className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:thin] [scrollbar-color:var(--border)_transparent]"
                aria-label={`${title} cards`}
              >
                {items.map((item) => (
                  <article
                    key={item.slug}
                    className={
                      columns === 2
                        ? "group flex min-w-0 basis-[88%] snap-start flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-foreground/30 sm:basis-[48%] lg:basis-[calc((100%-1rem)/2)]"
                        : "group flex min-w-0 basis-[88%] snap-start flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-foreground/30 sm:basis-[48%] lg:basis-[calc((100%-2rem)/3)]"
                    }
                  >
                    {/* Image or fallback */}
                    <Link
                      href={item.href}
                      aria-label={`View ${item.title}`}
                      className="block"
                    >
                      <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-muted">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes={
                              columns === 2
                                ? "(max-width: 639px) 88vw, (max-width: 1023px) 48vw, 50vw"
                                : "(max-width: 639px) 88vw, (max-width: 1023px) 48vw, 33vw"
                            }
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          />
                        ) : (
                          <div className="flex h-full flex-col justify-between p-5 sm:p-6">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background">
                              <Layers3
                                className="h-5 w-5 text-muted-foreground"
                                aria-hidden="true"
                              />
                            </div>

                            <div>
                              {item.eyebrow && (
                                <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                                  {item.eyebrow}
                                </p>
                              )}
                              <p className="mt-2 line-clamp-2 text-xl font-semibold tracking-tight">
                                {item.title}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </Link>

                    {/* Card content */}
                    <div className="flex flex-1 flex-col p-4 sm:p-5">
                      {item.category && (
                        <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                          {item.category}
                        </p>
                      )}

                      <h3 className="mt-2 text-lg font-semibold tracking-tight">
                        <Link
                          href={item.href}
                          className="transition-colors hover:text-primary"
                        >
                          {item.title}
                        </Link>
                      </h3>

                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>

                      {item.tags && item.tags.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md border border-border px-2 py-1 text-[10px] text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="mt-auto pt-5">
                        <Link
                          href={item.href}
                          className="inline-flex items-center gap-2 text-sm font-medium"
                        >
                          Explore
                          <ArrowRight
                            className="h-4 w-4 transition-transform group-hover:translate-x-1"
                            aria-hidden="true"
                          />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Scroll controls */}
            <div className="mt-4 flex items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">
                Scroll to explore
              </p>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => scroll("left")}
                  aria-label={`Scroll ${title} left`}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-border transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={() => scroll("right")}
                  aria-label={`Scroll ${title} right`}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-border transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="rounded-xl border border-dashed border-border px-5 py-12 text-center">
            <p className="text-sm text-muted-foreground">{emptyMessage}</p>
            <Link
              href={viewAllHref}
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium hover:text-primary"
            >
              Visit {title}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
