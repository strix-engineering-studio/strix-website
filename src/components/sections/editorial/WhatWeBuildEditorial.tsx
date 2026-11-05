"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Clock, ShieldCheck, Sparkles } from "lucide-react";

const offerings = [
  {
    number: "01",
    tag: "VALIDATE IDEAS & FEASIBILITY",
    title: "POC Engineering",
    timeframe: "1 to 3 Weeks",
    description:
      "Rapidly test technical feasibility, de-risk risky assumptions, and build working interactive proof for investors, stakeholders, or user feedback before committing to full development.",
    image: "/assets/production-systems/1.png",
    imageCaption: "A Prototype Proves an Idea. Production Proves a System.",
    deliverables: [
      "Interactive, functional technical prototype",
      "Architecture feasibility & risk assessment",
      "Technology stack evaluation & roadmap",
      "Live interactive demonstration",
    ],
    link: "/services/poc-development",
    badge: "Fast Feasibility",
  },
  {
    number: "02",
    tag: "FIRST USERS & MARKET VALIDATION",
    title: "MVP Engineering",
    timeframe: "3 to 6 Weeks",
    description:
      "Engineer a focused, production-grade product ready for real users, payments, and feedback. Not a throwaway prototype, but a sound technical foundation that can evolve into your permanent product.",
    image: "/assets/production-systems/2.png",
    imageCaption: "A Demo Proves the Happy Path. Production Handles Reality.",
    deliverables: [
      "Production web and/or mobile application",
      "Authentication & role-based permissions (RBAC)",
      "Secure payment processing (Razorpay / Stripe)",
      "Telemetry, error logging & automated deployments",
    ],
    link: "/services/mvp-development",
    badge: "Market-Ready",
  },
  {
    number: "03",
    tag: "SCALE, EVOLVE & OPERATE",
    title: "Full Product Engineering",
    timeframe: "Ongoing Engineering Partnership",
    description:
      "Comprehensive product engineering from initial discovery through distributed backend architecture, multi-platform apps, CI/CD pipelines, and continuous post-launch optimization.",
    image: "/assets/production-systems/3.png",
    imageCaption: "Reliability is Designed Before it is Needed.",
    deliverables: [
      "End-to-end multi-platform applications",
      "Resilient, modular backend & API infrastructure",
      "Automated testing & zero-downtime CI/CD",
      "Direct senior engineering ownership & support",
    ],
    link: "/services/product-engineering",
    badge: "Enterprise Grade",
  },
];

export function WhatWeBuildEditorial() {
  return (
    <section id="what-we-build" className="relative border-b border-border/80 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 border-b border-border/80 pb-10 md:flex-row md:items-end">
          <div className="max-w-2xl space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
              [COMMERCIAL OFFERINGS // 03]
            </span>
            <h2 className="editorial-serif text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              What we build:{" "}
              <span className="italic font-normal text-primary">
                three paths to market.
              </span>
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Whether you need to prove a technical concept in 10 days, ship an MVP
              ready for early customers, or scale a complete software product, Strix
              provides transparent scope, disciplined architecture, and senior execution.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              FIXED SCOPE OR DIRECT PARTNERSHIP
            </span>
          </div>
        </div>

        {/* 3 Offerings Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {offerings.map((offering) => (
            <article
              key={offering.number}
              className="group relative flex flex-col justify-between rounded-lg border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg lg:p-7"
            >
              {/* Top Meta */}
              <div>
                <div className="flex items-center justify-between border-b border-border/80 pb-4">
                  <span className="editorial-serif text-3xl font-normal text-primary">
                    {offering.number}
                  </span>
                  <div className="flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-primary">
                    <Clock className="size-3" />
                    <span>{offering.timeframe}</span>
                  </div>
                </div>

                <div className="mt-5 space-y-2">
                  <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-muted-foreground">
                    {offering.tag}
                  </p>
                  <h3 className="editorial-serif text-2xl font-normal tracking-tight text-foreground sm:text-3xl">
                    {offering.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {offering.description}
                  </p>
                </div>

                {/* Museum/Editorial Framed Technical Illustration */}
                <div className="relative my-6 overflow-hidden rounded-sm border border-border/80 bg-sand/30 dark:bg-card/80">
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image
                      src={offering.image}
                      alt={offering.imageCaption}
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="border-t border-border/60 bg-muted/30 px-3 py-1.5 text-center">
                    <p className="font-mono text-[10px] italic text-muted-foreground">
                      {offering.imageCaption}
                    </p>
                  </div>
                </div>

                {/* Deliverables List */}
                <div className="space-y-2.5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/80">
                    Key Deliverables:
                  </p>
                  <ul className="space-y-1.5 text-xs text-muted-foreground">
                    {offering.deliverables.map((deliv) => (
                      <li key={deliv} className="flex items-start gap-2">
                        <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Action Link */}
              <div className="mt-8 border-t border-border/80 pt-4">
                <Link
                  href={offering.link}
                  className="group/btn inline-flex w-full items-center justify-between rounded-md border border-border bg-muted/40 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <span>Explore {offering.title}</span>
                  <ArrowUpRight className="size-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

