"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import type { BlogPostMeta } from "@/lib/content";
import { cn } from "@/lib/utils";

const categories = ["Engineering", "Product Development", "Architecture", "AI & Automation", "Startup Technology", "Engineering Operations"];

function categoryFor(post: BlogPostMeta) {
  if (post.slug.includes("architecture")) return "Architecture";
  if (post.tag.toLowerCase() === "ai") return "AI & Automation";
  if (post.tag.toLowerCase() === "ops") return "Engineering Operations";
  return "Engineering";
}

function dateLabel(date: string) {
  return new Date(`${date.slice(0, 10)}T12:00:00`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export function BlogIndex({ posts }: { posts: BlogPostMeta[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const featured = posts.find((post) => post.featured) ?? posts[0];
  const filtered = useMemo(() => posts.filter((post) => {
    const matchesCategory = category === "All" || categoryFor(post) === category;
    const matchesQuery = [post.title, post.excerpt, post.tag, categoryFor(post)].join(" ").toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  }), [posts, query, category]);
  const featuredVisible = featured && filtered.some((post) => post.slug === featured.slug) && category === "All" && !query;
  const visiblePosts = filtered.filter((post) => !featuredVisible || post.slug !== featured?.slug);

  return <div className="space-y-10">
    <div className="space-y-4">
      <label className="flex max-w-xl items-center gap-3 border-b border-border px-1 py-3 text-muted-foreground focus-within:border-primary"><Search className="size-4" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search insights" aria-label="Search insights" className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground" /></label>
      <div className="flex flex-wrap gap-2" aria-label="Filter insights by category">
        {["All", ...categories].map((item) => <button key={item} type="button" onClick={() => setCategory(item)} aria-pressed={category === item} className={cn("border px-3 py-1.5 font-mono text-[11px] transition-colors", category === item ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-primary hover:text-foreground")}>{item}</button>)}
      </div>
    </div>

    {featuredVisible && featured ? <article className="grid overflow-hidden border border-border md:grid-cols-2">
      <Link href={`/insights/${featured.slug}`} className="flex min-h-64 flex-col justify-between bg-[#FAF8F3] p-7 text-[#2A1E17] transition-colors hover:bg-[#f3ecdf] sm:p-10">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Featured insight · {categoryFor(featured)}</span>
        <div className="my-8"><span className="editorial-serif text-4xl">Field notes on building dependable products.</span></div>
        <span className="font-mono text-xs">{featured.readingTime}</span>
      </Link>
      <div className="flex flex-col justify-between p-7 sm:p-10">
        <div><p className="font-mono text-xs text-primary">{dateLabel(featured.publishedAt)} <span className="px-1 text-muted-foreground">/</span> {featured.tag}</p><h2 className="editorial-serif mt-4 text-3xl leading-tight"><Link className="hover:text-primary" href={`/insights/${featured.slug}`}>{featured.title}</Link></h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{featured.excerpt}</p></div>
        <Link href={`/insights/${featured.slug}`} className="mt-8 inline-flex items-center gap-2 border-t border-border pt-4 text-sm font-medium text-primary">Read featured article <ArrowUpRight className="size-4" /></Link>
      </div>
    </article> : null}

    {visiblePosts.length ? <div className="grid gap-0 border-y border-border sm:grid-cols-2 sm:border-l">{visiblePosts.map((post) => <article key={post.slug} className="flex flex-col justify-between border-b border-border p-6 sm:border-r sm:p-8"><div><div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"><span className="text-primary">{categoryFor(post)}</span><span aria-hidden="true">·</span><time dateTime={post.publishedAt}>{dateLabel(post.publishedAt)}</time><span aria-hidden="true">·</span><span>{post.readingTime}</span></div><h2 className="editorial-serif mt-5 text-2xl leading-snug"><Link href={`/insights/${post.slug}`} className="transition-colors hover:text-primary">{post.title}</Link></h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p></div><Link href={`/insights/${post.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm text-primary">Read article <ArrowUpRight className="size-4" /></Link></article>)}</div> : <div className="border-y border-border py-12 text-sm text-muted-foreground">No published articles match this selection yet.</div>}
  </div>;
}
