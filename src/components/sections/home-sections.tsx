"use client"

import Link from "next/link"
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { ArrowUpRight, Mail } from "lucide-react"
import type { ReactNode } from "react"
import { ContactForm } from "@/components/contact/contact-form"
import { SectionHeading } from "@/components/shared/section-heading"
import { blogTopics, contactCategories, heroStats, services, testimonials } from "@/lib/site"
import { featuredProjects } from "@/features/products/content/product.content"
import { InteractiveWireframeScene } from "../3d/wireframe-sphere";

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



function MiniTag({ children }: { children: ReactNode }) {
  return <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.26em] text-white/68">{children}</span>
}

export function HeroSection() {
  return (
    <section className="px-3 pb-8 pt-6 sm:px-4 lg:px-6 lg:pb-10 lg:pt-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }} className="max-w-3xl">
          <motion.p variants={fade} className="text-[11px] uppercase tracking-[0.42em] text-white/70">
            Strix · Engineering Studio
          </motion.p>
          <motion.h1 variants={fade} className="mt-5 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[5.8rem] lg:leading-[0.95]">
            Build the right system before building the software.
          </motion.h1>
          <motion.p variants={fade} className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
            A product engineering studio for startups and technology businesses building scalable software products, operational systems, and AI-enabled platforms.
          </motion.p>
          <motion.div variants={fade} className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90">
              Start discovery
              <ArrowUpRight className="size-4" />
            </Link>
            <Link href="/#selected-systems" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-5 py-3 text-sm font-medium text-foreground transition hover:bg-white/8">
              View systems
              <ArrowUpRight className="size-4" />
            </Link>
          </motion.div>

          <motion.div variants={fade} className="mt-8 grid gap-3 sm:grid-cols-3">
              {heroStats.slice(0, 3).map((item) => (
              <div key={item.label} className="rounded-lg border border-white/10 bg-white/4 px-4 py-4">
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/50">{item.label}</p>
                <p className="mt-3 text-3xl font-semibold text-foreground">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

       <motion.div
  initial={{ opacity: 0, y: 18, scale: 0.98 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.15 }}
  className="relative"
>
  <InteractiveWireframeScene />
</motion.div>
      </div>
    </section>
  )
}

export function SystemsStrip() {
  return (
    <section id="systems" className="px-3 py-3 sm:px-4 lg:px-6">
      <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-6">
        {heroStats.map((item) => (
          <div key={item.label} className="rounded-lg border border-white/8 bg-white/4 px-4 py-4">
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/45">{item.label}</p>
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
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Selected systems"
            title="A few systems built around real operational needs."
            description="A selection of products and engineering work across mobile, web, backend, and connected workflows."
          />
          <Link
            href="/products"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2.5 text-sm font-medium text-foreground transition hover:bg-white/8"
          >
            View all systems
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.slice(0, 3).map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="flex h-full flex-col rounded-xl border border-white/10 bg-white/4 p-5 transition-colors hover:border-white/20 hover:bg-white/[0.055]"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="text-[11px] uppercase tracking-[0.3em] text-white/55">
                  {project.category}
                </p>
                <span className="text-xs tabular-nums text-white/35">
                  0{index + 1}
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {project.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.architecture.slice(0, 4).map((item) => (
                  <MiniTag key={item}>{item}</MiniTag>
                ))}
              </div>

              <div className="mt-5 rounded-md border border-white/8 bg-black/20 px-4 py-3 text-sm leading-6 text-white/65">
                {project.timeline} · {project.spotlight}
              </div>

              <div className="mt-5 space-y-2">
                {project.highlights.slice(0, 3).map((item) => (
                  <p key={item} className="text-sm text-white/70">
                    <span className="mr-2 text-white/35">—</span>
                    {item}
                  </p>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Selected work
                </span>
                <Link
                  href={`/products/${project.slug}`}
                  aria-label={`Explore ${project.title}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition hover:text-white/70"
                >
                  Explore
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
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
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="Capabilities"
          title="Coverage map, not a brochure."
          description="The stack is framed as an operating system for the business, not a list of unrelated services."
        />
        <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="space-y-5">
            <div className="rounded-xl border border-white/10 bg-white/4 p-5">
              <p className="text-[11px] uppercase tracking-[0.38em] text-white/50">Delivery map</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">The work is modular, but the system should feel unified.</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">Each engagement is designed to reduce handoff friction, shorten feedback loops, and make future updates easier.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {contactCategories.map((item) => (
                <MiniTag key={item}>{item}</MiniTag>
              ))}
            </div>
          </div>

           <div className="grid gap-4 md:grid-cols-2">
              {services.slice(0, 4).map((service) => (
                <div key={service.title} className="rounded-lg border border-white/8 bg-black/18 p-5">
                  <p className="text-[11px] uppercase tracking-[0.42em] text-white/55">{service.title}</p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.bullets.map((bullet) => (
                      <span key={bullet} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.26em] text-white/68">
                        {bullet}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
        
        </div>
      </div>
    </section>
  )
}

export function PhilosophySection() {
  return (
    <section className="px-3 py-14 sm:px-4 lg:px-6 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <div className="space-y-5 rounded-xl border border-white/10 bg-white/4 p-5">
          <p className="text-[11px] uppercase tracking-[0.38em] text-white/50">Engineering philosophy</p>
          <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">We think in systems, not features.</h2>
          <p className="text-sm leading-7 text-muted-foreground">The best products feel simple because discovery, architecture, and delivery were handled as one system.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90">
            Start a discovery session
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["Structured systems", "Clear relationships, few surprises, and interfaces that stay understandable as the product evolves."],
            ["Reliable delivery", "Scoped releases, good feedback loops, and a pace that leaves room for quality."],
            ["Technical clarity", "Design decisions written down, tradeoffs visible, and implementation that is easy to maintain."],
            ["Long-term support", "The relationship does not end at launch; the system is designed to keep improving."],
          ].map(([title, description]) => (
            <div key={title} className="rounded-lg border border-white/8 bg-white/4 px-5 py-5">
              <p className="text-[11px] uppercase tracking-[0.35em] text-white/45">Principle</p>
              <h3 className="mt-3 text-xl font-semibold text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p>
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
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by teams that move fast."
          description="Short signals from teams that wanted a cleaner system and a calmer delivery process."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial) => {
            const initials = testimonial.name
              .split(" ")
              .map((part) => part[0])
              .join("")

            return (
              <div key={testimonial.name} className="rounded-xl border border-white/10 bg-white/4 p-5">
                <p className="text-sm leading-7 text-foreground/90">“{testimonial.quote}”</p>
                <div className="mt-6 flex items-center gap-4 border-t border-white/8 pt-4">
                  <div className="flex size-10 items-center justify-center rounded-full bg-white/10 text-xs font-semibold tracking-[0.2em] text-foreground">{initials}</div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} · {testimonial.company}
                    </p>
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
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Insights"
            title="Notes from the engineering work."
            description="Practical perspectives on product decisions, system design, delivery, and long-term maintainability."
          />
          <Link
            href="/insights"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2.5 text-sm font-medium text-foreground transition hover:bg-white/8"
          >
            View all insights
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {blogTopics.slice(0, 3).map((topic, index) => (
            <article
              key={topic.title}
              className="flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/4 transition-colors hover:border-white/20 hover:bg-white/[0.055]"
            >
              <div className="relative h-36 overflow-hidden border-b border-white/8 bg-[radial-gradient(circle_at_25%_25%,rgba(216,158,88,0.24),transparent_24%),radial-gradient(circle_at_75%_22%,rgba(122,168,112,0.2),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.012))]">
                <span className="absolute left-5 top-5 text-xs uppercase tracking-[0.3em] text-white/55">
                  0{index + 1} / Field note
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  {topic.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                  {topic.subtitle}
                </p>
                <Link
                  href="/insights"
                  className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground transition hover:text-white/70"
                >
                  Read insights
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
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
          <p className="text-[11px] uppercase tracking-[0.38em] text-white/50">FAQ</p>
          <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">All you need to know.</h2>
          <p className="max-w-xl text-sm leading-7 text-muted-foreground">Clear answers for teams that want to get started without a long, repetitive intake loop.</p>
        </div>
        <div className="space-y-3">
          {faqItems.map((item) => (
            <div key={item.question} className="rounded-lg border border-white/8 bg-white/4 px-5 py-4">
              <p className="text-base font-medium text-foreground">{item.question}</p>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.answer}</p>
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
        <div className="space-y-5 rounded-xl border border-white/10 bg-white/4 p-5 lg:sticky lg:top-28">
          <p className="text-[11px] uppercase tracking-[0.38em] text-white/50">Contact</p>
          <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Start a discovery session.</h2>
          <p className="max-w-xl text-sm leading-7 text-muted-foreground">A single intake for new work, references, and technical notes, with a calmer structure than a typical contact form.</p>
          <div className="flex flex-wrap gap-2">
            {contactCategories.map((item) => (
              <MiniTag key={item}>{item}</MiniTag>
            ))}
          </div>
          <a href="mailto:team@strix.website" className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90">
            hello@strix.com
            <Mail className="size-4" />
          </a>
        </div>
        <div className="mb-5 grid gap-3 sm:grid-cols-3">
            {[
              ["< 48h", "Typical response"],
              ["1 pass", "Discovery review"],
              ["3 tracks", "Systems, support, launch"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-lg border border-white/8 bg-black/20 px-4 py-4">
                <p className="text-2xl font-semibold text-foreground">{value}</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-white/45">{label}</p>
              </div>
            ))}
          </div>
          <ContactForm />
      
      </div>
    </section>
  )
}

