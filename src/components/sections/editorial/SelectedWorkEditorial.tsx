"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: "hugged",
    number: "01",
    title: "Building Hugged: Community-Based Parenting Platform",
    shortTitle: "Hugged",
    category: "Full-Stack Product Engineering",
    ownership: "Client Project",
    statusText: "Live on Google Play & Web",
    summary:
      "End-to-end engineering across mobile, web, backend, and messaging. Delivered a Flutter mobile application, Next.js web console and website, Firebase Cloud Functions, Razorpay payments, and push notifications via FCM.",
    role: "Mobile, web, backend integration, and release engineering",
    stack: ["Flutter", "Dart", "Next.js", "Firebase", "Razorpay", "FCM"],
    link: "/case-studies/hugged-parenting-platform",
    externalUrl: "https://play.google.com/store/apps/details?id=com.hugged.user",
    externalLabel: "Google Play Store",
    image: "/assets/projects/hugged/made for every caregiver.webp",
    logo: "/assets/projects/hugged/hugged-logo.png",
    layout: "image-right",
    deviceType: "mobile",
  },
  {
    id: "h2go",
    number: "02",
    title: "H2Go: Water Delivery Logistics & Customer Operations",
    shortTitle: "H2Go",
    category: "Business Operations & SaaS",
    ownership: "Studio Product",
    statusText: "Active Development",
    summary:
      "A dedicated operational system for water delivery businesses to organize daily customer schedules, delivery routes, recurring bottle subscriptions, and digital invoicing without spreadsheet chaos.",
    role: "Product concept, systems architecture, full-stack implementation",
    stack: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    link: "/products/h2go",
    image: "/assets/production-systems/4.png",
    layout: "image-left",
    deviceType: "browser",
  },
  {
    id: "magicalstones",
    number: "03",
    title: "MagicalStones.store: Astrology & Spiritual E-Commerce",
    shortTitle: "MagicalStones",
    category: "E-Commerce Platform",
    ownership: "Production Storefront",
    statusText: "Storefront Live",
    summary:
      "An astrology and spiritual-products online store designed for product discovery, structured catalog browsing, secure shopping cart workflows, and multi-channel order fulfillment.",
    role: "Full-stack storefront engineering & payments",
    stack: ["Next.js", "TypeScript", "Firebase", "Online Payments"],
    link: "/products/magicalstones-store",
    logo: "/assets/projects/magicalstones/magicalstones-logo.png",
    image: "/assets/production-systems/5.png",
    layout: "image-right",
    deviceType: "browser",
  },
  {
    id: "classes360",
    number: "04",
    title: "Classes360: Coaching Institute Enquiry-to-Admission CRM",
    shortTitle: "Classes360",
    category: "Education Technology",
    ownership: "Studio Product",
    statusText: "Active Development",
    summary:
      "Connecting the enquiry-to-admission journey with everyday institute administration: student profiles, course batches, follow-up queues, and fee payment tracking built on NestJS and Prisma.",
    role: "Domain modeling, CRM workflows, and NestJS API architecture",
    stack: ["Next.js", "NestJS", "TypeScript", "MongoDB", "Prisma"],
    link: "/products/classes360",
    image: "/assets/production-systems/6.png",
    layout: "image-left",
    deviceType: "browser",
  },
  {
    id: "imrabo",
    number: "05",
    title: "Imrabo: Task-Oriented AI Assistant Exploration",
    shortTitle: "Imrabo",
    category: "AI Product Engineering",
    ownership: "Studio Prototype",
    statusText: "AI Prototype",
    summary:
      "An AI assistant concept exploring how AI capabilities can support user tasks and workflows through a unified interface with context orchestrators and structured tool invocation pipelines.",
    role: "Prompt architecture, LLM agent integration, interface prototyping",
    stack: ["TypeScript", "LLM APIs", "Vector Context", "Node.js"],
    link: "/products/imrabo",
    logo: "/assets/projects/imrabo/imrabo-logo.png",
    image: "/assets/production-systems/7.png",
    layout: "image-right",
    deviceType: "browser",
  },
];

export function SelectedWorkEditorial() {
  return (
    <section id="selected-work" className="relative border-b border-border/80 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 flex flex-col justify-between gap-6 border-b border-border/80 pb-10 md:flex-row md:items-end">
          <div className="max-w-2xl space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
              [PORTFOLIO // 04]
            </span>
            <h2 className="editorial-serif text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Selected work &{" "}
              <span className="italic font-normal text-primary">
                engineering deliveries.
              </span>
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              A curated look at client systems, studio products, and working
              prototypes. We maintain clear transparency between client deliveries,
              internal products, and experimental prototypes.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary transition-colors hover:text-foreground"
            >
              <span>View all case studies</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>

        {/* Alternating Project Layouts */}
        <div className="space-y-16 lg:space-y-24">
          {projects.map((project, index) => {
            const isImageRight = project.layout === "image-right";

            return (
              <article
                key={project.id}
                className="group relative rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/40 lg:p-10"
              >
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
                  {/* Text Column (5 or 6 cols) */}
                  <div
                    className={cn(
                      "space-y-6 lg:col-span-6",
                      isImageRight ? "order-1" : "order-1 lg:order-2",
                    )}
                  >
                    {/* Top Meta & Status */}
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/80 pb-3">
                      <div className="flex items-center gap-2.5">
                        <span className="editorial-serif text-2xl text-primary">
                          {project.number}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                          / {project.category}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1">
                        <span
                          className={cn(
                            "size-1.5 rounded-full",
                            "bg-primary",
                          )}
                        />
                        <span className="font-mono text-[10px] uppercase tracking-wider text-foreground">
                          {project.ownership} · {project.statusText}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="editorial-serif text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {project.summary}
                    </p>

                    {/* Role Annotation */}
                    <div className="rounded-sm border border-border/60 bg-muted/30 p-3 text-xs text-muted-foreground">
                      <span className="font-mono uppercase tracking-wider text-foreground">
                        Strix Responsibility:
                      </span>{" "}
                      {project.role}
                    </div>

                    {/* Stack Badges */}
                    <div className="flex flex-wrap items-center gap-2 pt-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[11px] text-foreground/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-4 pt-4">
                      <Link
                        href={project.link}
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
                      >
                        <span>Case study</span>
                        <ArrowUpRight className="size-3.5" />
                      </Link>

                      {project.externalUrl && (
                        <a
                          href={project.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <span>{project.externalLabel}</span>
                          <ExternalLink className="size-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Image Column (6 cols) */}
                  <div
                    className={cn(
                      "relative lg:col-span-6",
                      isImageRight ? "order-2" : "order-2 lg:order-1",
                    )}
                  >
                    <div className="relative overflow-hidden rounded-lg border border-border bg-sand/30 shadow-md dark:bg-card/90">
                      {/* Browser or Mobile Device Header */}
                      <div className="flex items-center justify-between border-b border-border/80 bg-muted/40 px-4 py-2.5">
                        <div className="flex items-center gap-1.5">
                          <span className="size-2.5 rounded-full bg-red-400/60" />
                          <span className="size-2.5 rounded-full bg-yellow-400/60" />
                          <span className="size-2.5 rounded-full bg-green-400/60" />
                        </div>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                          {project.shortTitle} // PREVIEW
                        </span>
                        <span className="font-mono text-[10px] text-muted-foreground/60">
                          {project.ownership}
                        </span>
                      </div>

                      {/* Image container */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-background">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 560px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Bottom Caption */}
                      <div className="flex items-center justify-between border-t border-border/70 bg-card/90 px-4 py-2">
                        <span className="font-mono text-[10px] text-muted-foreground">
                          STATUS: {project.statusText.toUpperCase()}
                        </span>
                        <span className="font-mono text-[10px] text-primary">
                          {project.category.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

