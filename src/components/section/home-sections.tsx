"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Mail } from "lucide-react"
import type { ReactNode } from "react"
import { ContactForm } from "@/components/contact/contact-form"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/heading"
import { blogTopics, contactCategories, featuredProjects, heroStats, services, testimonials } from "@/lib/site"

const fade = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

const faqItems = [
  {
    question: "What kinds of engagements fit best?",
    answer: "We work best on product systems, platform upgrades, internal tools, and AI-enabled workflows where the team needs clarity and steady delivery.",
  },
  {
    question: "Do you work with existing products?",
    answer: "Yes. A large part of the work is improving what already exists, simplifying the experience, and reducing technical drag.",
  },
  {
    question: "How do you start a project?",
    answer: "Most projects begin with a short discovery pass, a practical plan, and a focused delivery path that keeps the scope realistic.",
  },
  {
    question: "Can you support the product after launch?",
    answer: "Yes. We often stay involved for iteration, reliability work, and the steady improvements that keep a product healthy over time.",
  },
]

function Surface({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <Card className={className}>{children}</Card>
}

function MiniTag({ children }: { children: ReactNode }) {
  return <Badge>{children}</Badge>
}

export function HeroSection() {
  return (
    <section className="px-3 pb-10 pt-6 sm:px-4 lg:px-6 lg:pb-14 lg:pt-8">
      <Container className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }} className="max-w-3xl">
          <motion.p variants={fade} className="text-[11px] font-medium uppercase tracking-[0.32em] text-primary">
            STRIX · Engineering Studio
          </motion.p>
          <motion.h1 variants={fade} className="mt-5 text-balance text-4xl font-semibold tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[4.8rem] lg:leading-[0.95]">
            Build the right system before building the software.
          </motion.h1>
          <motion.p variants={fade} className="mt-6 max-w-2xl text-pretty text-base leading-8 text-foreground/70 sm:text-lg">
            We help startups and product teams shape clear systems, ship with confidence, and keep building without unnecessary complexity.
          </motion.p>
          <motion.div variants={fade} className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-[8px] bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary-foreground transition hover:-translate-y-0.5">
              Start a project
              <ArrowUpRight className="size-4" />
            </Link>
            <Link href="/#selected-systems" className="inline-flex items-center gap-2 rounded-[8px] border border-black/10 bg-background/70 px-5 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-foreground/80 transition hover:-translate-y-0.5 dark:border-white/10">
              Review work
              <ArrowUpRight className="size-4" />
            </Link>
          </motion.div>

          <motion.div variants={fade} className="mt-8 grid gap-3 sm:grid-cols-3">
            {heroStats.slice(0, 3).map((item) => (
              <div key={item.label} className="rounded-[12px] border border-black/10 bg-background/70 px-4 py-4 dark:border-white/10">
                <p className="text-[11px] uppercase tracking-[0.3em] text-foreground/50">{item.label}</p>
                <p className="mt-3 text-2xl font-semibold text-foreground">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 18, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.8 }}>
          <Surface className="p-5 sm:p-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-foreground/55">What we focus on</p>
            <div className="mt-4 space-y-3">
              {[
                "Architecture that stays clear as the product grows",
                "Delivery that is calm, visible, and scoped",
                "Support that continues after launch",
              ].map((item) => (
                <div key={item} className="rounded-[10px] border border-black/10 bg-background/70 px-4 py-3 text-sm leading-6 text-foreground/70 dark:border-white/10">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-[12px] border border-black/10 bg-background/80 p-4 dark:border-white/10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/45">Typical engagement</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Discovery', 'Design', 'Delivery'].map((step) => (
                  <span key={step} className="rounded-full border border-black/10 bg-background/70 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-foreground/70 dark:border-white/10">
                    {step}
                  </span>
                ))}
              </div>
            </div>
          </Surface>
        </motion.div>
      </Container>
    </section>
  )
}

export function SystemsStrip() {
  return (
    <section id="systems" className="px-3 py-2 sm:px-4 lg:px-6">
      <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-6">
        {heroStats.map((item) => (
          <div key={item.label} className="rounded-[12px] border border-black/10 bg-background/70 px-4 py-4 dark:border-white/10">
            <p className="text-[10px] uppercase tracking-[0.32em] text-foreground/50">{item.label}</p>
            <p className="mt-3 text-2xl font-semibold text-foreground">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function SelectedSystemsSection() {
  return (
    <section id="selected-systems" className="px-3 py-14 sm:px-4 lg:px-6 lg:py-20">
      <div className="mx-auto max-w-7xl space-y-8">
        <SectionHeading eyebrow="Selected systems" title="Focused work, built for real product needs." description="Each engagement stays practical: clear decisions, measurable momentum, and a system that is easier to evolve." />
        <div className="space-y-4">
          {featuredProjects.slice(0, 2).map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
              className="rounded-[18px] border border-black/10 bg-background/70 p-5 shadow-[0_8px_30px_rgba(11,11,10,0.03)] dark:border-white/10"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-primary">{project.category}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-foreground/70">{project.summary}</p>
                </div>
                <div className="rounded-[10px] border border-black/10 bg-background/80 px-4 py-3 text-sm text-foreground/75 dark:border-white/10">
                  {project.timeline} · {project.spotlight}
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.architecture.slice(0, 4).map((item) => (
                  <MiniTag key={item}>{item}</MiniTag>
                ))}
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {project.metrics.map((metric) => (
                  <div key={metric} className="rounded-[8px] border border-black/10 bg-background/80 px-4 py-4 text-sm text-foreground/75 dark:border-white/10">
                    {metric}
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CapabilityMapSection() {
  return (
    <section id="capabilities" className="px-3 py-14 sm:px-4 lg:px-6 lg:py-20">
      <div className="mx-auto max-w-7xl space-y-8">
        <SectionHeading eyebrow="Capabilities" title="A practical map of the work." description="The focus stays on the essentials: clear architecture, strong delivery, and support that lasts beyond launch." />
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-[18px] border border-black/10 bg-background/70 p-5 shadow-[0_8px_30px_rgba(11,11,10,0.03)] dark:border-white/10">
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-foreground/55">Delivery map</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-foreground">The work is modular, but the system still feels cohesive.</h3>
            <p className="mt-4 text-sm leading-7 text-foreground/70">We keep the engagement focused so the team can move quickly without losing structure or quality.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {contactCategories.map((item) => (
                <MiniTag key={item}>{item}</MiniTag>
              ))}
            </div>
          </div>

          <Surface className="overflow-hidden p-4 sm:p-5">
            <div className="grid gap-4 md:grid-cols-2">
              {services.slice(0, 4).map((service) => (
                <div key={service.title} className="rounded-[12px] border border-black/10 bg-background/80 p-5 dark:border-white/10">
                  <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-foreground/60">{service.title}</p>
                  <p className="mt-3 text-sm leading-7 text-foreground/70">{service.summary}</p>
                </div>
              ))}
            </div>
          </Surface>
        </div>
      </div>
    </section>
  )
}

export function PhilosophySection() {
  return (
    <section className="px-3 py-14 sm:px-4 lg:px-6 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="rounded-[18px] border border-black/10 bg-background/70 p-6 shadow-[0_8px_30px_rgba(11,11,10,0.03)] dark:border-white/10">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-foreground/55">Engineering philosophy</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.02em] text-foreground sm:text-5xl">We think in systems, not features.</h2>
          <p className="mt-4 text-sm leading-7 text-foreground/70">Good products feel simple because the thinking behind them is clear from the start.</p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-[8px] bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary-foreground transition hover:-translate-y-0.5">
            Start a discovery session
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ['Structured systems', 'Clear relationships, fewer surprises, and interfaces that stay understandable as the product evolves.'],
            ['Reliable delivery', 'Scoped releases, visible progress, and a pace that leaves room for quality.'],
            ['Technical clarity', 'Tradeoffs are discussed early and the implementation stays maintainable.'],
            ['Long-term support', 'The relationship continues beyond launch when the product needs steady refinement.'],
          ].map(([title, description]) => (
            <div key={title} className="rounded-[12px] border border-black/10 bg-background/70 px-5 py-5 dark:border-white/10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/45">Principle</p>
              <h3 className="mt-3 text-xl font-semibold text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-foreground/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TestimonialsSection() {
  return (
    <section className="px-3 py-14 sm:px-4 lg:px-6 lg:py-20">
      <div className="mx-auto max-w-7xl space-y-8">
        <SectionHeading eyebrow="Testimonials" title="Trusted by teams that value clarity." description="Short signals from clients who wanted a calmer process and a stronger foundation." />
        <div className="grid gap-4 lg:grid-cols-2">
          {testimonials.slice(0, 2).map((testimonial) => {
            const initials = testimonial.name.split(' ').map((part) => part[0]).join('')

            return (
              <div key={testimonial.name} className="rounded-[16px] border border-black/10 bg-background/70 p-5 dark:border-white/10">
                <p className="text-sm leading-7 text-foreground/80">“{testimonial.quote}”</p>
                <div className="mt-6 flex items-center gap-4 border-t border-black/10 pt-4 dark:border-white/10">
                  <div className="flex size-10 items-center justify-center rounded-full border border-black/10 bg-background/80 text-xs font-semibold uppercase tracking-[0.2em] text-foreground dark:border-white/10">{initials}</div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-foreground/60">{testimonial.role} · {testimonial.company}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function InsightsSection() {
  return (
    <section id="insights" className="px-3 py-14 sm:px-4 lg:px-6 lg:py-20">
      <div className="mx-auto max-w-7xl space-y-8">
        <SectionHeading eyebrow="Insights" title="Short notes from the work itself." description="The writing stays close to the practice: practical thinking, useful patterns, and a few clear takeaways." />
        <div className="grid gap-4 md:grid-cols-2">
          {blogTopics.slice(0, 2).map((topic, index) => (
            <div key={topic.title} className="overflow-hidden rounded-[16px] border border-black/10 bg-background/70 dark:border-white/10">
              <div className="h-36 bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0.35))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]" />
              <div className="space-y-3 px-5 py-5">
                <p className="text-[10px] uppercase tracking-[0.32em] text-foreground/45">0{index + 1}</p>
                <h3 className="text-xl font-semibold text-foreground">{topic.title}</h3>
                <p className="text-sm leading-7 text-foreground/70">{topic.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FaqSection() {
  return (
    <section className="px-3 py-14 sm:px-4 lg:px-6 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="space-y-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-foreground/55">FAQ</p>
          <h2 className="text-4xl font-semibold tracking-[-0.02em] text-foreground sm:text-5xl">A few clear answers.</h2>
          <p className="max-w-xl text-sm leading-7 text-foreground/70">A simple way to understand the fit, the process, and what working together looks like.</p>
        </div>
        <div className="space-y-3">
          {faqItems.map((item) => (
            <div key={item.question} className="rounded-[12px] border border-black/10 bg-background/70 px-5 py-4 dark:border-white/10">
              <p className="text-base font-medium text-foreground">{item.question}</p>
              <p className="mt-2 text-sm leading-7 text-foreground/70">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section id="contact" className="px-3 py-14 sm:px-4 lg:px-6 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div className="rounded-[18px] border border-black/10 bg-background/70 p-6 shadow-[0_8px_30px_rgba(11,11,10,0.03)] dark:border-white/10 lg:sticky lg:top-28">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-foreground/55">Contact</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.02em] text-foreground sm:text-5xl">Start a focused conversation.</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-foreground/70">Send a short note with what you are building, what is feeling difficult, and what kind of support would help most.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {contactCategories.map((item) => (
              <MiniTag key={item}>{item}</MiniTag>
            ))}
          </div>
          <a href="mailto:hello@strix.com" className="mt-6 inline-flex items-center gap-2 rounded-[8px] bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary-foreground transition hover:-translate-y-0.5">
            hello@strix.com
            <Mail className="size-4" />
          </a>
        </div>
        <Surface className="overflow-hidden p-4 sm:p-5 lg:p-6">
          <div className="mb-5 grid gap-3 sm:grid-cols-3">
            {[['< 48h', 'Typical response'], ['1 pass', 'Discovery review'], ['3 tracks', 'Systems, support, launch']].map(([value, label]) => (
              <div key={label} className="rounded-[10px] border border-black/10 bg-background/80 px-4 py-4 dark:border-white/10">
                <p className="text-2xl font-semibold text-foreground">{value}</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-foreground/45">{label}</p>
              </div>
            ))}
          </div>
          <ContactForm />
        </Surface>
      </div>
    </section>
  )
}
