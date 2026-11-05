"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export function HeroEditorial() {
  return (
    <section className="relative overflow-hidden border-b border-border/80 pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Blueprint grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 blueprint-grid opacity-70"
      />

      {/* Radial soft orange ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top engineering status marker */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-primary">
              [SYS // 01 · PRODUCTION STUDIO]
            </span>
            <span className="hidden text-xs text-muted-foreground/60 sm:inline">
              —
            </span>
            <span className="hidden font-mono text-[10px] tracking-widest text-muted-foreground sm:inline">
              ARCH-DRIVEN PRODUCT ENGINEERING
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              ACCEPTING NEW PROJECTS · 2026/2027
            </span>
          </div>
        </div>

        {/* Hero Main Grid (Asymmetric Editorial Composition) */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Expressive Headline & Positioning (7 cols) */}
          <div className="space-y-8 lg:col-span-7">
            {/* Supporting Philosophy Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3.5 py-1">
              <span className="size-1.5 rounded-full bg-primary" />
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                Build the right system before building the software
              </span>
            </div>

            {/* Oversized Editorial Headline */}
            <h1 className="editorial-serif text-5xl leading-[0.98] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[5.4rem]">
              From first idea to{" "}
              <span className="italic font-normal text-primary underline decoration-primary/30 underline-offset-8">
                production-grade product.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg sm:leading-relaxed">
              We design, engineer, and launch software products — from proof of
              concept to production-ready platforms. Direct engineering ownership,
              robust architecture, and battle-tested execution for founders and
              product teams.
            </p>

            {/* CTAs & Conversion Paths */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
              >
                <span>Start a project</span>
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="#selected-work"
                className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/60 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-foreground backdrop-blur-sm transition-all hover:border-foreground/30 hover:bg-card"
              >
                <span>Explore our work</span>
                <span className="font-mono text-xs text-muted-foreground">↓</span>
              </Link>
            </div>

            {/* Engineering Annotations / Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 border-t border-border/70 pt-8 sm:gap-6">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  POC & MVP Delivery
                </p>
                <p className="editorial-serif mt-1 text-2xl font-normal text-foreground sm:text-3xl">
                  2 to 6 <span className="text-base text-primary">Weeks</span>
                </p>
                <p className="text-[11px] text-muted-foreground">
                  Rapid validation cycles
                </p>
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  Stack Foundation
                </p>
                <p className="editorial-serif mt-1 text-2xl font-normal text-foreground sm:text-3xl">
                  Full-Stack
                </p>
                <p className="text-[11px] text-muted-foreground">
                  Web, Mobile, APIs & AI
                </p>
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  Direct Ownership
                </p>
                <p className="editorial-serif mt-1 text-2xl font-normal text-foreground sm:text-3xl">
                  100% <span className="text-base text-primary">Code</span>
                </p>
                <p className="text-[11px] text-muted-foreground">
                  Auditable & scalable
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Editorial Image Composition (5 cols) */}
          <div className="relative lg:col-span-5">
            {/* Museum/Editorial Outer Border Frame */}
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Corner Registration Marks */}
              <span className="absolute -top-2.5 -left-2.5 z-20 font-mono text-xs text-primary">
                +
              </span>
              <span className="absolute -top-2.5 -right-2.5 z-20 font-mono text-xs text-primary">
                +
              </span>
              <span className="absolute -bottom-2.5 -left-2.5 z-20 font-mono text-xs text-primary">
                +
              </span>
              <span className="absolute -bottom-2.5 -right-2.5 z-20 font-mono text-xs text-primary">
                +
              </span>

              {/* Main Visual Layer: Architecture & Production Schematic */}
              <div className="group relative overflow-hidden rounded-md border border-border bg-card shadow-2xl transition-all duration-300 hover:border-primary/50">
                <div className="flex items-center justify-between border-b border-border/80 bg-muted/40 px-4 py-2.5">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-primary" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/80">
                      STRIX // PRODUCTION SPECIFICATION
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    FIG. 01 — ARCHITECTURE
                  </span>
                </div>

                <div className="relative aspect-[16/10] w-full overflow-hidden bg-sand/30 dark:bg-card">
                  <Image
                    src="/assets/production-systems/1.png"
                    alt="A Prototype Proves an Idea. Production Proves a System - Strix Engineering Studio"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 540px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="border-t border-border/70 p-4">
                  <p className="editorial-serif text-lg text-foreground">
                    “A Prototype Proves an Idea. Production Proves a System.”
                  </p>
                  <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                    Reliable edge cases, data integrity, and observable uptime.
                  </p>
                </div>
              </div>

              {/* Overlapping Floating Product Card (Hugged Live App Showcase) */}
              <div className="absolute -bottom-6 -left-6 z-20 hidden w-64 rounded-md border border-border/90 bg-background/95 p-3.5 shadow-xl backdrop-blur-md sm:block">
                <div className="flex items-center gap-3">
                  <div className="relative size-11 shrink-0 overflow-hidden rounded border border-border bg-muted">
                    <Image
                      src="/assets/projects/hugged/hugged-logo.png"
                      alt="Hugged parenting platform"
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-xs font-semibold text-foreground">
                      Hugged Parenting
                    </p>
                    <p className="font-mono text-[10px] text-primary">
                      ● Google Play Live
                    </p>
                    <p className="truncate text-[10px] text-muted-foreground">
                      Flutter · Next.js · FCM
                    </p>
                  </div>
                </div>
              </div>

              {/* Overlapping Floating System Tag (Top Right) */}
              <div className="absolute -top-5 -right-4 z-20 hidden rounded-md border border-border/80 bg-background/95 px-3 py-1.5 shadow-lg backdrop-blur-md sm:block">
                <p className="font-mono text-[10px] uppercase tracking-wider text-foreground">
                  <span className="text-primary">LATENCY:</span> &lt;45ms ·{" "}
                  <span className="text-emerald-500">PROD READY</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

