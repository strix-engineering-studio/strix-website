"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass, Shield, Terminal, Zap } from "lucide-react";

export function StudioSectionEditorial() {
  return (
    <section id="studio" className="relative border-b border-border/80 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Asymmetric Studio Layout */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Studio Narrative (7 cols) */}
          <div className="space-y-6 lg:col-span-7">
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
              [THE STUDIO // 09]
            </span>

            <h2 className="editorial-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              An independent engineering studio for{" "}
              <span className="italic font-normal text-primary">
                people building serious software.
              </span>
            </h2>

            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                Strix was founded with a singular conviction:{" "}
                <strong className="text-foreground font-semibold">
                  most software failures are architectural, not superficial.
                </strong>{" "}
                When teams rush into development without clarifying domain
                boundaries, data models, and non-functional failure constraints,
                the resulting technical debt suffocates the product.
              </p>
              <p>
                We operate as an intimate, senior software engineering studio.
                We intentionally keep our operations focused so that every client
                works directly with experienced engineers who write the code, design
                the schemas, and take personal pride in the system&apos;s durability.
              </p>
              <p>
                Based in India and serving clients across the globe, we bridge
                ambitious product vision with disciplined engineering execution.
              </p>
            </div>

            {/* Studio Pillars Grid */}
            <div className="grid grid-cols-2 gap-4 border-t border-border/80 pt-6 sm:grid-cols-2">
              <div className="rounded-sm border border-border/70 bg-card p-4">
                <p className="font-mono text-[10px] uppercase tracking-wider text-primary">
                  Pillar 01
                </p>
                <h4 className="mt-1 text-sm font-semibold text-foreground">
                  Senior Ownership
                </h4>
                <p className="mt-1 text-xs text-muted-foreground">
                  No junior handoffs or bureaucratic account management layers.
                </p>
              </div>

              <div className="rounded-sm border border-border/70 bg-card p-4">
                <p className="font-mono text-[10px] uppercase tracking-wider text-primary">
                  Pillar 02
                </p>
                <h4 className="mt-1 text-sm font-semibold text-foreground">
                  Zero Lock-In
                </h4>
                <p className="mt-1 text-xs text-muted-foreground">
                  100% clean, documented TypeScript repositories you own outright.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-primary transition-colors hover:text-foreground"
              >
                <span>Learn more about our studio & philosophy</span>
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Studio Blueprint Visual (5 cols) */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="overflow-hidden rounded-lg border border-border bg-card shadow-xl">
                <div className="flex items-center justify-between border-b border-border/80 bg-muted/40 px-4 py-2.5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    STUDIO ARTIFACT // PHILOSOPHY
                  </span>
                  <span className="font-mono text-[10px] text-primary">
                    [SYS.MANIFESTO]
                  </span>
                </div>

                <div className="relative aspect-[4/3] w-full overflow-hidden bg-sand/20 dark:bg-card">
                  <Image
                    src="/assets/production-systems/7.png"
                    alt="Build the right system before building more software - Strix Engineering Studio"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover"
                  />
                </div>

                <div className="border-t border-border/70 p-5">
                  <p className="editorial-serif text-xl text-foreground">
                    “Build the right system before building more software.”
                  </p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    Prathamesh More · Lead Engineer & Founder, Strix
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

