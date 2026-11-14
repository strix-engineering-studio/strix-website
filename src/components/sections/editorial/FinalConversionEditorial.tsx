import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

export function FinalConversionEditorial() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="strix-container">
        <div className="grid gap-8 border border-border bg-surface-warm p-6 sm:p-10 lg:grid-cols-12 lg:items-end lg:gap-12 lg:p-14">
          <div className="space-y-5 lg:col-span-8">
            <p className="editorial-meta text-primary">Start a conversation</p>
            <h2 className="editorial-serif type-heading-1 max-w-3xl text-foreground">
              Let&apos;s talk about what your product needs next.
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Share the idea, system, or engineering challenge you&apos;re working through. We can explore the right next step together.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 lg:col-span-4 lg:items-end">
            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center gap-3 border border-primary bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Start a Project
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <a
              href="mailto:team@strix.website"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="size-4" />
              team@strix.website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
