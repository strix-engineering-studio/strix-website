import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Cloud,
  Code2,
  Compass,
  Database,
  Layers,
  Smartphone,
  Wrench,
} from "lucide-react";
import { buildMetadata } from "@/seo/metadata";
import { caseStudies } from "@/features/caseStudies/content/case-studies.content";

export const metadata: Metadata = buildMetadata({
  title: "Product Engineering Services | Strix Engineering Studio",
  description:
    "Move from product discovery and technical feasibility to MVP development, full product engineering, and ongoing evolution with Strix.",
  path: "/services",
  keywords: [
    "product discovery",
    "technical feasibility",
    "MVP development",
    "SaaS product development",
    "Flutter mobile development",
    "AI product engineering",
    "product modernization",
  ],
});

const pathways = [
  {
    number: "01",
    name: "Validate",
    title: "Product Discovery & Technical Feasibility",
    description:
      "Make informed product and technical decisions before committing to a larger build.",
    services: [
      "Product discovery",
      "Technical consulting",
      "Architecture planning",
      "Proof of Concept",
      "Technical feasibility assessment",
    ],
    href: "/services/poc-development",
    caseStudies: ["qr-based-iot-sensor-monitoring-poc"],
    icon: Compass,
  },
  {
    number: "02",
    name: "Launch",
    title: "MVP & Product Development",
    description:
      "Build a useful first product around the core user workflows, business needs, and technical foundations.",
    services: [
      "MVP development",
      "SaaS product development",
      "Web application development",
      "Flutter mobile applications",
      "Backend and API development",
      "AI-powered product development",
    ],
    href: "/services/mvp-development",
    caseStudies: ["hugged-parenting-platform", "atmabhan-spiritual-learning-app"],
    icon: Layers,
  },
  {
    number: "03",
    name: "Grow",
    title: "Full Product Engineering",
    description:
      "Improve and extend an existing product as its users, workflows, and operating needs change.",
    services: [
      "Product modernization",
      "Application scaling",
      "Cloud infrastructure",
      "API and third-party integrations",
      "Performance optimization",
      "Maintenance and ongoing engineering",
    ],
    href: "/services/product-engineering",
    caseStudies: ["instameasure-water-bill-management"],
    icon: ArrowUpRight,
  },
];

const capabilities = [
  { title: "Web Engineering", detail: "Web applications and product interfaces.", href: "/services/web-application-development", icon: Code2 },
  { title: "Mobile Engineering", detail: "Cross-platform mobile products with Flutter.", href: "/services/mobile-application-development", icon: Smartphone },
  { title: "Backend & API Engineering", detail: "Application services, data models, and integrations.", href: "/services/backend-systems", icon: Database },
  { title: "AI Engineering", detail: "AI capabilities designed around product workflows.", href: "/services/ai-product-engineering", icon: Bot },
  { title: "Cloud & Infrastructure", detail: "Deployment foundations and cloud-connected systems.", href: "/services/backend-systems", icon: Cloud },
  { title: "Product Modernization", detail: "Improve and extend an existing application or platform.", href: "/services/product-modernization", icon: Wrench },
];

const engagements = [
  {
    number: "01",
    title: "Fixed-scope project",
    fit: "A defined product initiative, feature set, discovery phase, or technical assessment with an agreed scope.",
    start: "Share the goal, current context, and the outcome you need to move forward.",
  },
  {
    number: "02",
    title: "Dedicated engineering partnership",
    fit: "Ongoing product work that benefits from a close engineering relationship and continuity across releases.",
    start: "Tell us about your roadmap, team, and the engineering capacity you need.",
  },
  {
    number: "03",
    title: "Technical consulting",
    fit: "A focused need such as architecture planning, feasibility review, technical direction, or product discovery.",
    start: "Describe the decision or technical question you want to work through.",
  },
];

const deliverySteps = [
  { number: "01", title: "Discover", detail: "Understand goals, users, constraints, and existing systems." },
  { number: "02", title: "Define", detail: "Agree on scope, technical direction, dependencies, and priorities." },
  { number: "03", title: "Build", detail: "Develop and review the product in clear, manageable increments." },
  { number: "04", title: "Launch", detail: "Prepare the system and team for release and real-world use." },
  { number: "05", title: "Evolve", detail: "Use product needs and usage to guide future improvements." },
];

const faqs = [
  {
    question: "How do we choose the right starting point?",
    answer:
      "Start with the question you need answered. If the product direction or technical feasibility is uncertain, begin with discovery or a PoC. If the core scope is understood, move into product development. For an existing product, focus on the constraints and improvements that matter now.",
  },
  {
    question: "Can Strix work with an existing product or codebase?",
    answer:
      "Yes. Share the current product, team context, and the changes you have in mind. The first step can be a technical review or a scoped discussion of the product and its codebase.",
  },
  {
    question: "How are project scope and timing decided?",
    answer:
      "Scope and timing depend on the product requirements, integrations, platforms, and existing systems. We discuss those constraints before agreeing on a project plan.",
  },
  {
    question: "What should I include in a project inquiry?",
    answer:
      "A short description of the product or system, who it serves, what you want to change or build, and any important constraints is a useful starting point. You can include links or technical context if available.",
  },
];

const publicCaseStudies = caseStudies.filter(
  (study) => study.status === "published" && (study.visibility === "public" || study.visibility === "anonymized"),
);

function CaseStudyLink({ slug }: { slug: string }) {
  const study = publicCaseStudies.find((item) => item.slug === slug);
  if (!study) return null;

  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group flex items-start justify-between gap-3 border-t border-border py-3 text-sm transition-colors hover:text-primary"
    >
      <span>
        <span className="block font-medium text-foreground group-hover:text-primary">{study.client?.name || study.title.split(":")[0]}</span>
        <span className="mt-1 block text-xs text-muted-foreground">{study.client?.industry || study.category}</span>
      </span>
      <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground group-hover:text-primary" />
    </Link>
  );
}

export default function ServicesPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border py-16 sm:py-20 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 blueprint-grid opacity-50" />
        <div className="strix-container relative">
          <div className="max-w-4xl space-y-5">
            <p className="editorial-meta border-l-2 border-primary py-1 pl-3 text-primary">Services & engagement</p>
            <h1 className="editorial-serif type-display-lg text-foreground">
              Product engineering for the stage you&apos;re at.
            </h1>
            <p className="body-large max-w-3xl text-muted-foreground">
              From validating an idea to evolving a product in use, Strix brings product thinking and engineering together around what needs to work.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/contact" className="inline-flex min-h-12 items-center gap-3 border border-primary bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                Discuss a project <ArrowUpRight className="size-4" />
              </Link>
              <Link href="#pathways" className="inline-flex min-h-12 items-center gap-3 border border-border bg-background px-5 py-3 text-sm font-medium transition-colors hover:border-foreground/40">
                Explore services <ArrowDownRight className="size-4 text-muted-foreground" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="pathways" className="border-b border-border py-16 sm:py-20 lg:py-24">
        <div className="strix-container">
          <SectionIntro eyebrow="Three pathways" title="Start where your product needs you." description="Each pathway connects a business need to the product and engineering work that can move it forward." />
          <div className="mt-9 grid gap-4 lg:grid-cols-3">
            {pathways.map((pathway) => {
              const Icon = pathway.icon;
              return (
                <article key={pathway.number} className="flex h-full flex-col border border-border bg-card p-5 sm:p-6">
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <span className="font-mono text-xs tracking-[0.18em] text-primary">{pathway.number} / {pathway.name}</span>
                    <Icon aria-hidden="true" className="size-5 text-foreground/70" strokeWidth={1.6} />
                  </div>
                  <h3 className="editorial-serif mt-5 text-2xl leading-tight text-foreground">{pathway.title}</h3>
                  <p className="mt-3 min-h-12 text-sm leading-relaxed text-muted-foreground">{pathway.description}</p>
                  <ul className="mt-5 flex-1 space-y-2 border-t border-border pt-4">
                    {pathway.services.map((service) => (
                      <li key={service} className="flex items-start gap-2 text-sm text-foreground/80">
                        <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 bg-primary" />
                        {service}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 border-t border-border pt-2">
                    <p className="editorial-meta mb-1 pt-2 text-muted-foreground">Relevant work</p>
                    {pathway.caseStudies.map((slug) => <CaseStudyLink key={slug} slug={slug} />)}
                  </div>
                  <Link href={pathway.href} className="mt-4 inline-flex items-center gap-2 border border-foreground/20 px-4 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary">
                    Explore {pathway.name} <ArrowRight className="size-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface-warm py-16 sm:py-20">
        <div className="strix-container">
          <SectionIntro eyebrow="Supporting capabilities" title="The engineering behind the product." description="Bring in the capabilities your product needs, as part of a broader engagement or a focused piece of work." />
          <div className="mt-9 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ icon: Icon, ...capability }) => (
              <Link key={capability.title} href={capability.href} className="group flex min-h-36 items-start gap-4 bg-background p-5 transition-colors hover:bg-card sm:p-6">
                <Icon aria-hidden="true" className="mt-1 size-5 shrink-0 text-primary" strokeWidth={1.6} />
                <span>
                  <span className="block font-medium text-foreground group-hover:text-primary">{capability.title}</span>
                  <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">{capability.detail}</span>
                </span>
                <ArrowUpRight aria-hidden="true" className="ml-auto size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="engagement-models" className="border-b border-border py-16 sm:py-20 lg:py-24">
        <div className="strix-container">
          <SectionIntro eyebrow="Engagement models" title="A working model for the kind of help you need." description="The engagement can fit a defined initiative, a continuing product roadmap, or a focused technical decision." />
          <div className="mt-9 grid gap-4 lg:grid-cols-3">
            {engagements.map((engagement) => (
              <article key={engagement.number} className="flex flex-col border border-border bg-card p-5 sm:p-6">
                <span className="font-mono text-xs tracking-[0.18em] text-primary">{engagement.number}</span>
                <h3 className="editorial-serif mt-4 text-2xl text-foreground">{engagement.title}</h3>
                <div className="mt-5 border-t border-border pt-4">
                  <p className="editorial-meta text-muted-foreground">Suitable for</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">{engagement.fit}</p>
                </div>
                <div className="mt-5 flex-1 border-t border-border pt-4">
                  <p className="editorial-meta text-muted-foreground">How to start</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">{engagement.start}</p>
                </div>
                <Link href="/contact" className="mt-5 inline-flex items-center gap-2 border-t border-border pt-4 text-sm font-medium text-foreground transition-colors hover:text-primary">
                  Discuss this model <ArrowUpRight className="size-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery-process" className="border-b border-border bg-surface-warm py-16 sm:py-20">
        <div className="strix-container">
          <SectionIntro eyebrow="Delivery process" title="A clear path from question to working product." description="The details vary by project. These stages keep product decisions connected to engineering and release." />
          <ol className="mt-9 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
            {deliverySteps.map((step) => (
              <li key={step.number} className="bg-background p-5 sm:p-6">
                <span className="font-mono text-xs tracking-[0.18em] text-primary">{step.number}</span>
                <h3 className="editorial-serif mt-4 text-2xl text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
              </li>
            ))}
          </ol>
          <Link href="/#how-we-work" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary">
            See how we work <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>

      <section id="case-studies" className="border-b border-border py-16 sm:py-20 lg:py-24">
        <div className="strix-container">
          <SectionIntro eyebrow="Relevant work" title="Engineering across real product contexts." description="Explore published case studies from client product work and technical implementation." />
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {["qr-based-iot-sensor-monitoring-poc", "hugged-parenting-platform", "instameasure-water-bill-management"].map((slug) => {
              const study = publicCaseStudies.find((item) => item.slug === slug);
              if (!study) return null;
              return (
                <article key={study.slug} className="flex flex-col border border-border bg-card p-5 sm:p-6">
                  <p className="editorial-meta text-primary">{study.client?.industry || study.category}</p>
                  <h3 className="editorial-serif mt-4 flex-1 text-2xl leading-tight text-foreground">{study.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{study.subtitle}</p>
                  <Link href={`/case-studies/${study.slug}`} className="mt-5 inline-flex items-center gap-2 border-t border-border pt-4 text-sm font-medium text-foreground transition-colors hover:text-primary">
                    Read case study <ArrowUpRight className="size-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="services-faq" className="border-b border-border bg-surface-warm py-16 sm:py-20 lg:py-24">
        <div className="strix-container grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <SectionIntro eyebrow="FAQ" title="A few useful answers." description="If your question is specific to your product, send it with your project inquiry." />
          </div>
          <div className="lg:col-span-8">
            {faqs.map((faq) => (
              <details key={faq.question} className="group border-b border-border py-5 first:border-t">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-medium text-foreground marker:content-none">
                  {faq.question}
                  <span className="font-mono text-primary transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="max-w-3xl pr-8 pt-3 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="strix-container">
          <div className="flex flex-col justify-between gap-6 border border-border bg-surface-warm p-6 sm:p-9 md:flex-row md:items-end">
            <div className="max-w-3xl space-y-4">
              <p className="editorial-meta text-primary">Project inquiry</p>
              <h2 className="editorial-serif type-heading-2 text-foreground">Tell us what you&apos;re building or improving.</h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">Share your product context and the outcome you&apos;re looking for. We can help identify a suitable next step.</p>
            </div>
            <Link href="/contact" className="inline-flex min-h-12 shrink-0 items-center gap-3 border border-primary bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              Start a project <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <header className="max-w-3xl space-y-4">
      <p className="editorial-meta text-primary">{eyebrow}</p>
      <h2 className="editorial-serif type-heading-1 text-foreground">{title}</h2>
      <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">{description}</p>
    </header>
  );
}
