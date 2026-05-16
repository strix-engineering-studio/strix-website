import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { navigation } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-black/20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1.6fr_1fr_1fr] lg:px-8 lg:py-16">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-300/75">Prathamesh More</p>
          <p className="max-w-xl text-balance text-2xl font-semibold text-white sm:text-3xl">
            Building production-grade software for ambitious founders.
          </p>
          <p className="max-w-lg text-sm leading-7 text-white/62">
            Full-stack product engineering, AI systems, backend architecture, and startup MVP delivery with a premium execution standard.
          </p>
        </div>

        <div className="space-y-4 text-sm text-white/70">
          <p className="font-medium text-white/90">Explore</p>
          <div className="flex flex-col gap-3">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="flex items-center justify-between rounded-xl border border-transparent px-3 py-2 transition-colors hover:border-white/10 hover:bg-white/5">
                <span>{item.label}</span>
                <ArrowUpRight className="size-4" />
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4 text-sm text-white/70">
          <p className="font-medium text-white/90">Contact</p>
          <a href="mailto:prathamesh.more@example.com" className="block rounded-xl border border-white/10 bg-white/5 px-3 py-3 transition-colors hover:bg-white/8">
            prathamesh.more@example.com
          </a>
          <p className="text-white/45">Available for high-trust product work, MVP launches, and architecture engagements.</p>
        </div>
      </div>
    </footer>
  )
}
