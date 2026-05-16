"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { Search, Tag } from "lucide-react"
import type { BlogPostMeta } from "@/lib/content"
import { cn } from "@/lib/utils"

type BlogIndexProps = {
  posts: BlogPostMeta[]
}

export function BlogIndex({ posts }: BlogIndexProps) {
  const [query, setQuery] = useState("")
  const [tag, setTag] = useState("All")

  const tags = useMemo(() => ["All", ...new Set(posts.map((post) => post.tag))], [posts])

  const filtered = useMemo(
    () =>
      posts.filter((post) => {
        const matchesQuery = [post.title, post.excerpt, post.tag].join(" ").toLowerCase().includes(query.toLowerCase())
        const matchesTag = tag === "All" || post.tag === tag
        return matchesQuery && matchesTag
      }),
    [posts, query, tag]
  )

  return (
    <div className="space-y-8">
      <div className="grid gap-4 rounded-[28px] border border-white/10 bg-white/5 p-4 lg:grid-cols-[1fr_auto] lg:items-center">
        <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white/60">
          <Search className="size-4" />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search articles" className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35" />
        </label>
        <div className="flex flex-wrap gap-2">
          {tags.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTag(item)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition",
                tag === item ? "border-emerald-300/25 bg-emerald-300/12 text-emerald-100" : "border-white/10 bg-white/5 text-white/68 hover:bg-white/8"
              )}
            >
              <Tag className="size-4" />
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {filtered.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group rounded-[30px] border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:bg-white/7">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs uppercase tracking-[0.35em] text-emerald-300/80">{post.tag}</p>
                <span className="text-xs text-white/38">{post.readingTime}</span>
              </div>
              <h3 className="text-2xl font-semibold text-white">{post.title}</h3>
              <p className="max-w-2xl text-sm leading-7 text-white/66">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-white/50">
                <span>{new Date(post.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                <span className="transition group-hover:text-white">Read article</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
