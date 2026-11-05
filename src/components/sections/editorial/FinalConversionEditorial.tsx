"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, MessageSquare, Phone, Sparkles } from "lucide-react";

export function FinalConversionEditorial() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background radial accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-primary/10 blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-card/80 p-8 shadow-2xl backdrop-blur-md sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Headline & Direct CTA (7 cols) */}
            <div className="space-y-6 lg:col-span-7">
              <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
                [PROJECT INITIATION // 10]
              </span>

              <h2 className="editorial-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Have a product idea?{" "}
                <span className="italic font-normal text-primary">
                  Let&apos;s engineer it.
                </span>
              </h2>

              <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Tell us about your product concept, timeline, and current stage. We
                will provide an initial architecture review and a structured delivery
                roadmap within 48 hours.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-xl"
                >
                  <span>Start a project inquiry</span>
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>

                <a
                  href="mailto:team@strix.website"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Mail className="size-3.5 text-primary" />
                  <span>team@strix.website</span>
                </a>
              </div>

              {/* Response Time Guarantee */}
              <p className="font-mono text-xs text-muted-foreground pt-1">
                ⚡ Direct founder & engineer response · Non-disclosure agreements (NDA) supported
              </p>
            </div>

            {/* Right Column: Direct Service Routing Matrix (5 cols) */}
            <div className="space-y-3.5 rounded-xl border border-border/80 bg-muted/20 p-6 lg:col-span-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Select Your Requirement:
              </p>

              <Link
                href="/services/poc-development"
                className="group flex items-center justify-between rounded-md border border-border bg-card p-3.5 transition-all hover:border-primary hover:bg-primary/5"
              >
                <div>
                  <p className="text-xs font-semibold text-foreground group-hover:text-primary">
                    Proof of Concept (POC)
                  </p>
                  <p className="font-mono text-[10px] text-muted-foreground">
                    1-3 weeks · Validate technical feasibility
                  </p>
                </div>
                <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
              </Link>

              <Link
                href="/services/mvp-development"
                className="group flex items-center justify-between rounded-md border border-border bg-card p-3.5 transition-all hover:border-primary hover:bg-primary/5"
              >
                <div>
                  <p className="text-xs font-semibold text-foreground group-hover:text-primary">
                    Minimum Viable Product (MVP)
                  </p>
                  <p className="font-mono text-[10px] text-muted-foreground">
                    3-6 weeks · Market-ready product with payments
                  </p>
                </div>
                <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
              </Link>

              <Link
                href="/services/product-engineering"
                className="group flex items-center justify-between rounded-md border border-border bg-card p-3.5 transition-all hover:border-primary hover:bg-primary/5"
              >
                <div>
                  <p className="text-xs font-semibold text-foreground group-hover:text-primary">
                    Full Product Engineering
                  </p>
                  <p className="font-mono text-[10px] text-muted-foreground">
                    End-to-end multi-platform systems
                  </p>
                </div>
                <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
              </Link>

              <Link
                href="/services/product-modernization"
                className="group flex items-center justify-between rounded-md border border-border bg-card p-3.5 transition-all hover:border-primary hover:bg-primary/5"
              >
                <div>
                  <p className="text-xs font-semibold text-foreground group-hover:text-primary">
                    System Modernization
                  </p>
                  <p className="font-mono text-[10px] text-muted-foreground">
                    Refactor, scale, and harden existing systems
                  </p>
                </div>
                <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
              </Link>

              {/* Direct Phone / WhatsApp */}
              <div className="pt-2 text-center sm:text-left">
                <a
                  href="tel:+918421334187"
                  className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="size-3 text-primary" />
                  <span>Direct phone / WhatsApp: +91 84213 34187</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

