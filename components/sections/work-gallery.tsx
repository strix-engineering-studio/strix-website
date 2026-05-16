"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { ArrowUpRight, Search, SlidersHorizontal } from "lucide-react"
import { featuredProjects } from "@/lib/site"
import { cn } from "@/lib/utils"

const categories = ["All", "AI", "Backend", "Mobile", "Full Stack", "SaaS", "Automation"]

export function WorkGallery() {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("All")
  const [sortBy, setSortBy] = useState("featured")

  const projects = useMemo(() => {
    const filtered = featuredProjects.filter((project) => {
      const matchesQuery = [project.title, project.summary, project.tagline, ...project.stack, ...project.highlights]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase())

      const matchesCategory = category === "All" || project.category.toLowerCase().includes(category.toLowerCase())

      return matchesQuery && matchesCategory
    })

    return filtered.sort((left, right) => {
      if (sortBy === "title") return left.title.localeCompare(right.title)
      if (sortBy === "category") return left.category.localeCompare(right.category)
      return 0
    })
  }, [category, query, sortBy])

  return (
    <div className="space-y-8">
      <div className="grid gap-4 rounded-[28px] border border-white/10 bg-white/5 p-4 lg:grid-cols-[1fr_auto_auto] lg:items-center">
        <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white/60">
          <Search className="size-4" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects, stacks, and outcomes"
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
          />
        </label>
        <div className="flex items-center gap-2 overflow-x-auto">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={cn(
                "whitespace-nowrap rounded-full border px-4 py-2 text-sm transition",
                category === item
                  ? "border-emerald-300/25 bg-emerald-300/12 text-emerald-100"
                  : "border-white/10 bg-white/5 text-white/65 hover:bg-white/8"
              )}
            >
              {item}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/65">
          <SlidersHorizontal className="size-4" />
          <select value={sortBy} onChange={(event) => setSortBy(event.target.value)} className="bg-transparent text-white outline-none">
            <option value="featured">Featured</option>
            <option value="title">Title</option>
            <option value="category">Category</option>
          </select>
        </label>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/case-studies/${project.slug}`}
            className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-5 transition duration-500 hover:-translate-y-1 hover:border-white/16 hover:bg-white/7"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-emerald-300/80">{project.category}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
                </div>
                <ArrowUpRight className="size-5 text-white/50 transition group-hover:text-emerald-200" />
              </div>
              <p className="max-w-xl text-sm leading-7 text-white/66">{project.summary}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-white/8 bg-black/20 px-3 py-1.5 text-xs text-white/68">
                    {item}
                  </span>
                ))}
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {project.metrics.map((metric) => (
                  <div key={metric} className="rounded-2xl border border-white/8 bg-black/20 px-4 py-3 text-sm text-white/72">
                    {metric}
                  </div>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
