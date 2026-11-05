"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight, ExternalLink, Search, Tag } from "lucide-react";
import type { BlogPostMeta } from "@/lib/content";
import { cn } from "@/lib/utils";
import { SiInstagram, SiLinkerd } from "react-icons/si";

type BlogIndexProps = {
  posts: BlogPostMeta[];
};

export function BlogIndex({ posts }: BlogIndexProps) {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("All");

  const tags = useMemo(
    () => ["All", ...new Set(posts.map((post) => post.tag))],
    [posts],
  );

  const filtered = useMemo(
    () =>
      posts.filter((post) => {
        const matchesQuery = [post.title, post.excerpt, post.tag]
          .join(" ")
          .toLowerCase()
          .includes(query.toLowerCase());
        const matchesTag = tag === "All" || post.tag === tag;
        return matchesQuery && matchesTag;
      }),
    [posts, query, tag],
  );

  return (
    <div className="space-y-12">
      {/* Search & Tag Filter Bar */}
      <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="flex flex-1 items-center gap-2.5 rounded-md border border-border bg-background px-3.5 py-2.5 text-muted-foreground transition-colors focus-within:border-primary">
          <Search className="size-4 shrink-0" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search engineering insights & architecture guides..."
            className="w-full bg-transparent text-xs text-foreground outline-none placeholder:text-muted-foreground/60 sm:text-sm"
          />
        </label>

        <div className="flex flex-wrap gap-1.5">
          {tags.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTag(item)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-mono text-[11px] transition-all",
                tag === item
                  ? "border-primary bg-primary text-primary-foreground font-semibold"
                  : "border-border bg-background text-muted-foreground hover:border-border/80 hover:text-foreground",
              )}
            >
              <Tag className="size-3" />
              <span>{item}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Featured Lead Post */}
      {filtered[0] ? (
        <article className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:border-primary/50">
          <Link
            href={`/insights/${filtered[0].slug}`}
            className="grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Visual Editorial Strip */}
            <div className="relative min-h-64 border-b border-border bg-sand/30 p-8 dark:bg-card/90 lg:col-span-5 lg:border-r lg:border-b-0 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary font-semibold">
                  FEATURED ESSAY
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">
                  {filtered[0].readingTime}
                </span>
              </div>

              <div className="my-auto py-6">
                <span className="editorial-serif text-3xl italic text-foreground/80 sm:text-4xl">
                  Architecture & Product Thinking
                </span>
              </div>

              <div className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground">
                <span>STRIX ENGINEERING STUDIO</span>
              </div>
            </div>

            {/* Content Body */}
            <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-7">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">
                    {filtered[0].tag}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {new Date(filtered[0].publishedAt).toLocaleDateString(
                      "en-US",
                      {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      },
                    )}
                  </span>
                </div>

                <h2 className="editorial-serif text-3xl font-normal tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-4xl">
                  {filtered[0].title}
                </h2>

                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {filtered[0].excerpt}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-border/80 pt-4">
                <span className="font-mono text-xs text-primary font-medium">
                  Read full article →
                </span>
                <ArrowUpRight className="size-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </Link>
        </article>
      ) : null}

      {/* Grid of Remaining Posts */}
      {filtered.length > 1 && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {filtered.slice(1).map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between border-b border-border/70 pb-3">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-semibold">
                    {post.tag}
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {post.readingTime}
                  </span>
                </div>

                <h3 className="editorial-serif text-2xl font-normal text-foreground transition-colors group-hover:text-primary">
                  <Link href={`/insights/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="text-xs leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-border/80 pt-4">
                <span className="font-mono text-[11px] text-muted-foreground">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>

                <Link
                  href={`/insights/${post.slug}`}
                  className="inline-flex items-center gap-1 font-mono text-xs text-primary transition-colors hover:text-foreground"
                >
                  <span>Read article</span>
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Selected Social Signals & Studio Channels */}
      <section className="rounded-xl border border-border bg-muted/20 p-8 sm:p-10">
        <div className="flex flex-col justify-between gap-4 border-b border-border/80 pb-6 sm:flex-row sm:items-end">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
              SOCIAL CHANNELS & SHORT ESSAYS
            </span>
            <h2 className="editorial-serif mt-1 text-2xl font-normal text-foreground sm:text-3xl">
              Signals from LinkedIn & Instagram
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/strix-engineering-studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-1.5 font-mono text-xs text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <SiLinkerd className="size-3.5 text-primary" />
              <span>LinkedIn</span>
              <ExternalLink className="size-3" />
            </a>
            <a
              href="https://www.instagram.com/strix.website/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-1.5 font-mono text-xs text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <SiInstagram className="size-3.5 text-primary" />
              <span>Instagram</span>
              <ExternalLink className="size-3" />
            </a>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-border/70 bg-card p-5">
            <p className="font-mono text-[10px] uppercase tracking-wider text-primary">
              SIGNAL // SOFTWARE ARCHITECTURE
            </p>
            <h4 className="editorial-serif mt-2 text-lg font-normal text-foreground">
              A demo proves the happy path. Production handles the reality.
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              How to architect timeouts, circuit breakers, and idempotency
              handlers so your application never crashes during third-party API
              downtime.
            </p>
            <a
              href="https://www.linkedin.com/company/strix-engineering-studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-primary transition-colors hover:text-foreground"
            >
              <span>Read discussion on LinkedIn</span>
              <ArrowUpRight className="size-3" />
            </a>
          </div>

          <div className="rounded-lg border border-border/70 bg-card p-5">
            <p className="font-mono text-[10px] uppercase tracking-wider text-primary">
              SIGNAL // PRODUCT STRATEGY
            </p>
            <h4 className="editorial-serif mt-2 text-lg font-normal text-foreground">
              Build the right system before building more software.
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Why product-market fit requires domain modeling and operational
              clarity, not just building more features that nobody asked for.
            </p>
            <a
              href="https://www.linkedin.com/company/strix-engineering-studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-primary transition-colors hover:text-foreground"
            >
              <span>Read discussion on LinkedIn</span>
              <ArrowUpRight className="size-3" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
