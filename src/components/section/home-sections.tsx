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
    question: "What kinds of projects do you take on?",
    answer:
      "Product systems, internal tools, AI-enabled workflows, infrastructure hardening, and long-term support for teams that need clarity more than buzzwords.",
  },
  {
    question: "Do you work with existing products?",
    answer:
      "Yes. A lot of the work here is integration, refactoring, and redesigning the operating surface around what already exists.",
  },
  {
    question: "How do you start?",
    answer: "Most projects begin with a short discovery pass, then a scoped delivery plan that turns into the actual build.",
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
      <Container className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }} className="max-w-3xl">
          <motion.p variants={fade} className="text-[11px] font-medium uppercase tracking-[0.32em] text-primary">
            STRIX · Engineering Studio
          </motion.p>
          <motion.h1 variants={fade} className="mt-5 text-balance text-4xl font-semibold tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[5.3rem] lg:leading-[0.94]">
            Build the right system before building the software.
          </motion.h1>
          <motion.p variants={fade} className="mt-6 max-w-2xl text-pretty text-base leading-8 text-foreground/70 sm:text-lg">
            A product engineering studio for startups and technology businesses building scalable software products, operational systems, and AI-enabled platforms.
          </motion.p>
          <motion.div variants={fade} className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-[8px] bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary-foreground transition hover:-translate-y-0.5">
              Start project
              <ArrowUpRight className="size-4" />
            </Link>
            <Link href="/#selected-systems" className="inline-flex items-center gap-2 rounded-[8px] border border-black/10 bg-background/70 px-5 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-foreground/80 transition hover:-translate-y-0.5 dark:border-white/10">
              View systems
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

        <motion.div initial={{ opacity: 0, y: 18, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
          <Surface className="relative overflow-hidden p-4 sm:p-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(232,84,28,0.12),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(11,11,10,0.04),transparent_24%)]" />
            <div className="relative space-y-4">
              <div className="grid gap-3 sm:grid-cols-3">
                {[["Launch", "Systems"], ["Scale", "Delivery"], ["Support", "Ongoing"]].map(([label, value]) => (
                  <div key={label} className="rounded-[10px] border border-black/10 bg-background/70 px-3 py-3 dark:border-white/10">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/45">{label}</p>
                    <p className="mt-2 text-sm text-foreground/80">{value}</p>
                  </div>
                ))}
              </div>

              <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="relative overflow-hidden rounded-[12px] border border-black/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.7),rgba(255,255,255,0.42))] p-4 dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]">
                  <div className="absolute inset-0 grid-overlay opacity-60" />
                  <div className="relative space-y-4">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-foreground/45">
                      <span>System map</span>
                      <span>SYS.01</span>
                    </div>
                    <motion.svg
                      initial={{ opacity: 0.8 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.9 }}
                      viewBox="0 0 320 180"
                      className="h-40 w-full"
                      role="img"
                      aria-label="Abstract system schematic"
                    >
                      <rect x="24" y="24" width="272" height="132" rx="18" fill="rgba(255,255,255,0.2)" stroke="rgba(11,11,10,0.16)" />
                      <path d="M76 70h58" stroke="rgba(232,84,28,0.95)" strokeWidth="4" strokeLinecap="round" />
                      <path d="M134 70h54" stroke="rgba(11,11,10,0.36)" strokeWidth="3" strokeLinecap="round" />
                      <path d="M188 70v34" stroke="rgba(11,11,10,0.36)" strokeWidth="3" strokeLinecap="round" />
                      <path d="M188 104h54" stroke="rgba(232,84,28,0.95)" strokeWidth="4" strokeLinecap="round" />
                      <circle cx="76" cy="70" r="12" fill="rgba(232,84,28,0.96)" />
                      <circle cx="188" cy="70" r="12" fill="rgba(11,11,10,0.92)" />
                      <circle cx="242" cy="104" r="12" fill="rgba(232,84,28,0.96)" />
                      <path d="M76 132h116" stroke="rgba(11,11,10,0.28)" strokeWidth="3" strokeLinecap="round" />
                      <circle cx="76" cy="132" r="10" fill="rgba(11,11,10,0.86)" />
                      <circle cx="192" cy="132" r="10" fill="rgba(11,11,10,0.5)" />
                    </motion.svg>
                    <div className="rounded-[10px] border border-black/10 bg-background/80 p-4 text-sm leading-7 text-foreground/70 dark:border-white/10">
                      Shared architecture, implementation, and delivery guidance flowing through one operating surface.
                    </div>
                  </div>
                </div>

                <div className="grid gap-3">
                  {[['1', 'Discovery'], ['2', 'Design'], ['3', 'Delivery']].map(([step, label]) => (
                    <div key={step} className="rounded-[10px] border border-black/10 bg-background/70 px-4 py-4 dark:border-white/10">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/45">Step {step}</p>
                      <p className="mt-2 text-lg font-medium text-foreground">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-foreground/65">A compact process for moving from strategy to a shippable product system.</p>
                    </div>
                  ))}
                </div>
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
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading eyebrow="Selected systems" title="A few operating surfaces, shown with restraint." description="The design leans on clear structure, compact data, and a visual rhythm that feels expensive without becoming noisy." />
        <div className="space-y-6">
          {featuredProjects.slice(0, 3).map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
              className={`grid gap-6 rounded-[18px] border border-black/10 bg-background/70 p-5 shadow-[0_8px_30px_rgba(11,11,10,0.03)] dark:border-white/10 lg:items-stretch ${index % 2 === 1 ? "lg:grid-cols-[1.05fr_0.95fr]" : "lg:grid-cols-[0.95fr_1.05fr]"}`}
            >
              <div className={`space-y-4 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-primary">{project.category}</p>
                <h3 className="text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">{project.title}</h3>
                <p className="max-w-xl text-sm leading-7 text-foreground/70">{project.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {project.architecture.slice(0, 4).map((item) => (
                    <MiniTag key={item}>{item}</MiniTag>
                  ))}
                </div>
                <div className="rounded-[10px] border border-black/10 bg-background/80 px-4 py-4 text-sm text-foreground/75 dark:border-white/10">
                  {project.timeline} · {project.spotlight}
                </div>
              </div>

              <Surface className={`overflow-hidden p-4 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="grid gap-3 sm:grid-cols-3">
                  {project.metrics.map((metric) => (
                    <div key={metric} className="rounded-[8px] border border-black/10 bg-background/80 px-4 py-4 text-sm text-foreground/75 dark:border-white/10">
                      {metric}
                    </div>
                  ))}
                </div>
                <div className="mt-4 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                  <div className="rounded-[12px] border border-black/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,255,255,0.42))] p-4 dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]">
                    <div className="flex h-full min-h-44 flex-col justify-between rounded-[10px] border border-black/10 bg-background/80 p-4 dark:border-white/10">
                      <div className="space-y-2">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/45">{project.tagline}</p>
                        <p className="text-sm leading-7 text-foreground/70">{project.solution}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.highlights.slice(0, 3).map((item) => (
                          <span key={item} className="rounded-full border border-black/10 bg-background/70 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-foreground/70 dark:border-white/10">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-3">
                    {project.deployment.map((item, deploymentIndex) => (
                      <div key={item} className="rounded-[10px] border border-black/10 bg-background/80 px-4 py-4 dark:border-white/10">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/45">0{deploymentIndex + 1}</p>
                        <p className="mt-2 text-sm leading-6 text-foreground/70">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Surface>
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
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading eyebrow="Capabilities" title="Coverage map, not a brochure." description="The stack is framed as an operating system for the business, not a list of unrelated services." />
        <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="space-y-5">
            <div className="rounded-[18px] border border-black/10 bg-background/70 p-5 shadow-[0_8px_30px_rgba(11,11,10,0.03)] dark:border-white/10">
              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-foreground/55">Delivery map</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-foreground">The work is modular, but the system should feel unified.</h3>
              <p className="mt-4 text-sm leading-7 text-foreground/70">Each engagement is designed to reduce handoff friction, shorten feedback loops, and make future updates easier.</p>
            </div>
            <div className="flex flex-wrap gap-2">
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
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.bullets.map((bullet) => (
                      <span key={bullet} className="rounded-full border border-black/10 bg-background/70 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-foreground/70 dark:border-white/10">
                        {bullet}
                      </span>
                    ))}
                  </div>
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
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="rounded-[18px] border border-black/10 bg-background/70 p-6 shadow-[0_8px_30px_rgba(11,11,10,0.03)] dark:border-white/10">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-foreground/55">Engineering philosophy</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.02em] text-foreground sm:text-5xl">We think in systems, not features.</h2>
          <p className="mt-4 text-sm leading-7 text-foreground/70">The best products feel simple because discovery, architecture, and delivery were handled as one system.</p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-[8px] bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary-foreground transition hover:-translate-y-0.5">
            Start a discovery session
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ['Structured systems', 'Clear relationships, few surprises, and interfaces that stay understandable as the product evolves.'],
            ['Reliable delivery', 'Scoped releases, good feedback loops, and a pace that leaves room for quality.'],
            ['Technical clarity', 'Design decisions written down, tradeoffs visible, and implementation that is easy to maintain.'],
            ['Long-term support', 'The relationship does not end at launch; the system is designed to keep improving.'],
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
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading eyebrow="Testimonials" title="Loved by teams that move fast." description="Short signals from teams that wanted a cleaner system and a calmer delivery process." />
        <div className="grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial) => {
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
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading eyebrow="Insights" title="Three short notes, integrated into the flow." description="Writing stays close to the work and avoids turning the site into a separate content product." />
        <div className="grid gap-4 md:grid-cols-3">
          {blogTopics.slice(0, 3).map((topic, index) => (
            <div key={topic.title} className="overflow-hidden rounded-[16px] border border-black/10 bg-background/70 dark:border-white/10">
              <div className="h-44 bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0.35))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]" />
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
          <h2 className="text-4xl font-semibold tracking-[-0.02em] text-foreground sm:text-5xl">All you need to know.</h2>
          <p className="max-w-xl text-sm leading-7 text-foreground/70">Clear answers for teams that want to get started without a long, repetitive intake loop.</p>
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
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.02em] text-foreground sm:text-5xl">Start a discovery session.</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-foreground/70">A single intake for new work, references, and technical notes, with a calmer structure than a typical contact form.</p>
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
