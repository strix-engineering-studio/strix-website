"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight, Cpu, Database, Globe, Mail, Radar, ShieldCheck, Sparkles, Terminal, Workflow } from "lucide-react"
import { featuredProjects, heroStats, services, experienceTimeline, testimonials, blogTopics } from "@/lib/site"
import { SectionHeading } from "@/components/shared/section-heading"
import { cn } from "@/lib/utils"

const reveal = {
  hidden: { opacity: 0, y: 24, filter: "blur(12px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
}

function Counter({ value }: { value: number }) {
  const display = `${value}+`
  return (
    <motion.span
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5 }}
      className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
    >
      {display}
    </motion.span>
  )
}

function Panel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-[28px] border border-white/10 bg-white/6 p-5 shadow-[0_0_60px_rgba(0,0,0,0.28)] backdrop-blur-2xl", className)}>
      {children}
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-5 pb-8 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-14">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.9fr] lg:items-center">
        <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }} className="relative">
          <motion.p variants={reveal} transition={{ duration: 0.6 }} className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.35em] text-emerald-200">
            <Sparkles className="size-3.5" />
            Full Stack + AI Engineer
          </motion.p>
          <motion.h1 variants={reveal} transition={{ duration: 0.7 }} className="max-w-4xl text-balance text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
            Building production-grade MVPs, AI systems, and scalable applications.
          </motion.h1>
          <motion.p variants={reveal} transition={{ duration: 0.6 }} className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-white/68 sm:text-xl">
            Full-stack engineer specializing in AI integrations, backend architecture, Flutter systems, and startup-focused product development.
          </motion.p>

          <motion.div variants={reveal} transition={{ duration: 0.6 }} className="mt-8 flex flex-wrap gap-3">
            {[
              { href: "/work", label: "View Work" },
              { href: "/contact", label: "Book a Discovery Call" },
              { href: "/case-studies/ai-workflow-platform", label: "Explore Case Studies" },
            ].map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all",
                  index === 1
                    ? "border border-white/12 bg-white/5 text-white hover:bg-white/10"
                    : "bg-emerald-400 text-slate-950 hover:translate-y-[-1px] hover:bg-emerald-300"
                )}
              >
                {item.label}
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ))}
          </motion.div>

          <motion.div variants={reveal} transition={{ duration: 0.6 }} className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              "Architecture thinking",
              "Production delivery",
              "Startup velocity",
              "AI systems",
              "Backend rigor",
              "Founder trust",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm text-white/70">
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.94, y: 32 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative mx-auto w-full max-w-[640px]">
          <div className="absolute inset-0 -z-10 rounded-[36px] bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.26),transparent_28%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.22),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] blur-3xl" />
          <Panel className="relative overflow-hidden p-0">
            <div className="border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2 text-xs text-white/55">
                <span className="size-2 rounded-full bg-emerald-400" />
                Realtime architecture view
              </div>
            </div>
            <div className="grid gap-4 p-5 sm:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-4 rounded-3xl border border-white/8 bg-black/25 p-4">
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span>API / Event Flow</span>
                  <span>Live</span>
                </div>
                <div className="space-y-3">
                  {[
                    ["Client", "Next.js app", "emerald"],
                    ["Auth", "Auth.js + session", "blue"],
                    ["Core", "API + server actions", "purple"],
                    ["Data", "PostgreSQL + Prisma", "emerald"],
                  ].map(([label, value, tone]) => (
                    <div key={label} className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/5 px-4 py-3">
                      <div className={cn("size-10 rounded-2xl", tone === "emerald" && "bg-emerald-400/15", tone === "blue" && "bg-sky-400/15", tone === "purple" && "bg-violet-400/15")} />
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-white/40">{label}</p>
                        <p className="text-sm text-white/82">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-4">
                <div className="rounded-3xl border border-white/8 bg-white/5 p-4">
                  <div className="flex items-center justify-between text-xs text-white/55">
                    <span>Deployment</span>
                    <span>Vercel</span>
                  </div>
                  <div className="mt-4 space-y-3 text-sm text-white/72">
                    <div className="flex items-center justify-between rounded-2xl bg-black/25 px-4 py-3">
                      <span>Preview</span>
                      <span className="text-emerald-300">Passed</span>
                    </div>
                    <div className="flex items-center justify-between rounded-2xl bg-black/25 px-4 py-3">
                      <span>Database migration</span>
                      <span className="text-emerald-300">Ready</span>
                    </div>
                    <div className="flex items-center justify-between rounded-2xl bg-black/25 px-4 py-3">
                      <span>OG image</span>
                      <span className="text-emerald-300">Enabled</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/8 bg-gradient-to-br from-emerald-400/12 via-transparent to-sky-400/12 p-4">
                  <div className="flex items-center justify-between text-xs text-white/55">
                    <span>Realtime dashboard</span>
                    <span>2ms refresh</span>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {[
                      ["P95 latency", "184ms"],
                      ["Deploy confidence", "99%"],
                      ["Automations", "18"],
                      ["Open issues", "3"],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-2xl border border-white/8 bg-black/20 p-3">
                        <p className="text-[11px] uppercase tracking-[0.25em] text-white/40">{label}</p>
                        <p className="mt-2 text-lg font-semibold text-white">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Panel>
        </motion.div>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl items-center justify-between gap-4 px-1 text-xs uppercase tracking-[0.3em] text-white/40 sm:px-0">
        <span>Scroll to explore the system</span>
        <span className="hidden sm:block">Cinematic founder-grade delivery</span>
      </div>
    </section>
  )
}

export function TrustStrip() {
  return (
    <section className="px-5 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {heroStats.map((item) => (
          <Panel key={item.label} className="space-y-2 p-4">
            <Counter value={item.value} />
            <p className="text-sm leading-6 text-white/64">{item.label}</p>
          </Panel>
        ))}
      </div>
    </section>
  )
}

export function FeaturedWorkSection() {
  return (
    <section className="px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="Featured work"
          title="Case studies that feel like shipped startup products."
          description="Every project is framed as a real system: architecture, metrics, deployment, and product outcomes."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-white/15 hover:bg-white/7"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_30%)] opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10 space-y-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-emerald-300/75">{project.category}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
                  </div>
                  <Link href={`/case-studies/${project.slug}`} className="rounded-full border border-white/10 bg-black/20 p-3 text-white/80 transition group-hover:border-emerald-300/30 group-hover:text-emerald-200">
                    <ArrowUpRight className="size-5" />
                  </Link>
                </div>
                <p className="max-w-xl text-sm leading-7 text-white/68">{project.summary}</p>
                <div className="grid gap-3 sm:grid-cols-3">
                  {project.metrics.map((metric) => (
                    <div key={metric} className="rounded-2xl border border-white/8 bg-black/20 px-4 py-3 text-sm text-white/72">
                      {metric}
                    </div>
                  ))}
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-[24px] border border-white/8 bg-black/20 p-4">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-white/42">Architecture</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.architecture.map((item) => (
                        <span key={item} className="rounded-full border border-white/8 bg-white/5 px-3 py-1.5 text-xs text-white/68">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[24px] border border-white/8 bg-black/20 p-4">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-white/42">Deployment</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.deployment.map((item) => (
                        <span key={item} className="rounded-full border border-emerald-300/12 bg-emerald-300/10 px-3 py-1.5 text-xs text-emerald-100">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-white/52">
                  <span>{project.timeline}</span>
                  <span>{project.spotlight}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ServicesSection() {
  return (
    <section className="px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="Services"
          title="A premium execution layer for startups and businesses."
          description="These service lines are structured around how ambitious teams actually ship: quickly, securely, and with enough depth to scale."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="group rounded-[28px] border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-white/16 hover:bg-white/7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/66">{service.summary}</p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-black/20 p-3 text-emerald-300 transition group-hover:bg-emerald-300/10">
                  <Workflow className="size-5" />
                </div>
              </div>
              <div className="mt-5 rounded-3xl border border-white/8 bg-black/20 p-4">
                <p className="text-[11px] uppercase tracking-[0.3em] text-white/42">System visual</p>
                <p className="mt-2 text-sm leading-6 text-white/70">{service.visual}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.bullets.map((bullet) => (
                    <span key={bullet} className="rounded-full border border-white/8 bg-white/5 px-3 py-1.5 text-xs text-white/64">
                      {bullet}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EngineeringDepthSection() {
  const diagrams = [
    { icon: Terminal, title: "API flow", text: "Request validation, auth, business logic, and storage boundaries." },
    { icon: Database, title: "Data model", text: "Clean relations, indexed queries, and migration-safe schema design." },
    { icon: Cpu, title: "AI orchestration", text: "Prompt routing, approval steps, and observability across the lifecycle." },
    { icon: ShieldCheck, title: "Security", text: "Auth, roles, rate-limits, and error isolation from the start." },
  ]

  return (
    <section className="px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <SectionHeading
          eyebrow="Engineering depth"
          title="Clients need to feel the architecture before they see the code."
          description="This section frames the invisible work: data modeling, deployment pipelines, CI/CD, and system design choices that make the product durable."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {diagrams.map((diagram, index) => {
            const Icon = diagram.icon

            return (
              <motion.div
                key={diagram.title}
                initial={{ opacity: 0, scale: 0.95, y: 18 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-[26px] border border-white/10 bg-white/5 p-5"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl border border-emerald-300/12 bg-emerald-300/10 p-3 text-emerald-200">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{diagram.title}</h3>
                    <p className="text-sm text-white/56">{diagram.text}</p>
                  </div>
                </div>
                <div className="mt-5 h-32 rounded-3xl border border-white/8 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-4">
                  <div className="flex h-full items-end gap-2">
                    <div className="h-2/5 flex-1 rounded-xl bg-emerald-400/30" />
                    <div className="h-3/5 flex-1 rounded-xl bg-sky-400/25" />
                    <div className="h-4/5 flex-1 rounded-xl bg-violet-400/25" />
                    <div className="h-1/2 flex-1 rounded-xl bg-white/15" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function BlogPreviewSection() {
  return (
    <section className="px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="Build in public"
          title="A blog that proves technical taste."
          description="MDX-powered writing with code examples, reading progress, tags, and linked product thinking around the systems that matter most."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {blogTopics.map((topic, index) => (
            <motion.article
              key={topic}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="rounded-[26px] border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:bg-white/8"
            >
              <div className="flex items-center gap-3 text-white/75">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-3 text-emerald-300">
                  <Globe className="size-5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-white/38">Article</p>
                  <h3 className="mt-1 text-lg font-semibold text-white">{topic}</h3>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-white/62">
                A practical write-up on architecture decisions, tradeoffs, and production learnings.
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ExperienceSection() {
  return (
    <section className="px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="A timeline of shipped systems and product momentum."
          description="The story matters because clients want to know you can keep shipping as scope and complexity grow."
        />
        <div className="mt-10 space-y-4 border-l border-white/12 pl-5 sm:pl-8">
          {experienceTimeline.map((item, index) => (
            <motion.div
              key={item.year + item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="relative rounded-[24px] border border-white/10 bg-white/5 p-5"
            >
              <span className="absolute -left-[33px] top-6 size-3 rounded-full bg-emerald-300 shadow-[0_0_24px_rgba(16,185,129,0.55)] sm:-left-[41px]" />
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-white/42">
                <span>{item.year}</span>
                <span>{item.kind}</span>
              </div>
              <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-white/65">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TestimonialsSection() {
  return (
    <section className="px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="Testimonials"
          title="Founder trust is built in the delivery details."
          description="Social proof should sound like a serious recommendation, not generic praise."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="rounded-[28px] border border-white/10 bg-white/5 p-5"
            >
              <div className="mb-5 flex gap-1 text-emerald-300">
                {Array.from({ length: 5 }).map((_, star) => (
                  <Radar key={star} className="size-4 fill-current" />
                ))}
              </div>
              <p className="text-pretty text-sm leading-7 text-white/76">“{testimonial.quote}”</p>
              <footer className="mt-6 border-t border-white/10 pt-4 text-sm text-white/60">
                <p className="font-medium text-white">{testimonial.name}</p>
                <p>{testimonial.role} · {testimonial.company}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CTASection() {
  return (
    <section className="px-5 py-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.25),transparent_35%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-8 sm:p-10 lg:p-14">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-200/80">Final step</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let&apos;s build your next product.
            </h2>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-white/68">
              If you need an engineer who can think like a founder, build like a systems architect, and ship with taste, this is the right conversation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-emerald-300">
                Start a project
                <ArrowRight className="size-4" />
              </Link>
              <a href="mailto:prathamesh.more@example.com" className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-5 py-3 text-sm font-medium text-white/82 transition hover:bg-white/10">
                <Mail className="size-4" />
                prathamesh.more@example.com
              </a>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Discovery", "Define scope, stack, and success metrics."],
              ["Delivery", "Build the product with weekly momentum."],
              ["Deployment", "Ship to Vercel, cloud, and production environments."],
              ["Support", "Stabilize, iterate, and prepare the next release."],
            ].map(([title, text], index) => (
              <div key={title} className={cn("rounded-[26px] border border-white/10 bg-black/20 p-5", index === 1 && "translate-y-4") }>
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">0{index + 1}</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/62">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
