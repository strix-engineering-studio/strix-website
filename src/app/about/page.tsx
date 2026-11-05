import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Code2, Compass, Layers, ShieldCheck, Terminal, Users } from "lucide-react";
import { PageShell } from "@/components/shared/page-shell";
import { experienceTimeline } from "@/lib/site";
import { buildMetadata } from "@/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "The Studio & Philosophy | Strix Engineering Studio",
  description:
    "An independent product engineering studio focused on systems architecture, direct development ownership, and durable software delivery.",
  path: "/about",
  keywords: [
    "about Strix",
    "software engineering studio",
    "systems architecture",
    "product engineering",
    "Prathamesh More",
  ],
});

const principles = [
  {
    number: "01",
    title: "System Before Software",
    description:
      "A software product fails when its underlying operating model is confused. We model domain boundaries, state transitions, and business constraints before writing application code.",
  },
  {
    number: "02",
    title: "Direct Senior Ownership",
    description:
      "We operate as an intimate studio. You work directly with the senior engineers designing the architecture and shipping the commits. No agency bloat, no account manager games.",
  },
  {
    number: "03",
    title: "Runtime Verification & Type Safety",
    description:
      "TypeScript across every tier, runtime schema validation with Zod, and typed database contracts. Bugs are caught at compile time and request boundaries, not in production user sessions.",
  },
  {
    number: "04",
    title: "Failure-First Reliability",
    description:
      "Demos prove the happy path; production handles reality. We engineer idempotent endpoints, queue retry circuits, and database transaction rollbacks before launch day.",
  },
  {
    number: "05",
    title: "Zero Technical Lock-In",
    description:
      "You own 100% of the intellectual property and code repository. Clean architecture, standard open-source tools, and documentation mean any internal team can step in without friction.",
  },
  {
    number: "06",
    title: "Long-Term Evolution",
    description:
      "Launch is day zero. We stand by our systems with ongoing operational telemetry, performance tuning, and continuous capability engineering as your user base expands.",
  },
];

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="The Studio"
      title="Engineering software systems with architectural discipline"
      description="Strix exists to help founders, product teams, and growing businesses turn ambitious software ideas into durable, maintainable production systems."
    >
      {/* Studio Manifesto / Editorial Narrative */}
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="space-y-6 lg:col-span-7">
          <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-primary">
            STUDIO MANIFESTO
          </span>

          <h2 className="editorial-serif text-3xl font-normal tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            A Prototype Proves an Idea.{" "}
            <span className="italic font-normal text-primary">
              Production Proves a System.
            </span>
          </h2>

          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              In modern software development, speed is often confused with
              recklessness. Prototypes are hastily assembled with brittle
              assumptions, rushed to launch, and left to collapse under the weight
              of real-world edge cases, concurrent traffic, and evolving requirements.
            </p>
            <p>
              Strix takes a different stance:{" "}
              <strong className="text-foreground font-semibold">
                build the right system before building more software.
              </strong>{" "}
              We believe great engineering comes from clarity of domain boundaries,
              deliberate database modeling, and building with production resilience
              from the very first commit.
            </p>
            <p>
              We are an independent, focused software engineering studio based in
              India, collaborating with founders, venture-backed startups, and
              growing businesses across the globe.
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
            >
              <span>Work with our studio</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>

        {/* Right Artifact Frame */}
        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-lg border border-border bg-card shadow-lg">
            <div className="flex items-center justify-between border-b border-border/80 bg-muted/40 px-4 py-2.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                STUDIO IDENTITY
              </span>
              <span className="font-mono text-[10px] text-primary">
                EST. INDIA
              </span>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden bg-sand/20 dark:bg-card">
              <Image
                src="/assets/production-systems/1.png"
                alt="A Prototype Proves an Idea. Production Proves a System."
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-cover"
              />
            </div>

            <div className="border-t border-border/70 p-5">
              <p className="editorial-serif text-lg text-foreground">
                “Reliability is designed before it is needed.”
              </p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">
                Engineering for reality, not just the happy path.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Engineering Principles Section */}
      <section className="border-t border-border/80 pt-16">
        <div className="mb-10 space-y-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
            OUR OPERATING ETHOS
          </span>
          <h2 className="editorial-serif text-3xl font-normal text-foreground sm:text-4xl">
            Six engineering principles we live by.
          </h2>
          <p className="max-w-xl text-xs text-muted-foreground sm:text-sm">
            These rules shape every decision we make — from database normalization
            to deployment telemetry.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((pr) => (
            <div
              key={pr.number}
              className="rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50"
            >
              <span className="editorial-serif text-2xl text-primary font-normal">
                {pr.number}
              </span>
              <h3 className="editorial-serif mt-3 text-xl font-normal text-foreground">
                {pr.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {pr.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Evolution Timeline */}
      <section className="border-t border-border/80 pt-16">
        <div className="mb-10 space-y-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
            STUDIO CHRONOLOGY
          </span>
          <h2 className="editorial-serif text-3xl font-normal text-foreground sm:text-4xl">
            How our engineering practice evolved.
          </h2>
        </div>

        <div className="space-y-4">
          {experienceTimeline.map((item) => (
            <div
              key={item.year}
              className="grid gap-4 rounded-lg border border-border bg-card p-6 shadow-sm sm:grid-cols-[140px_1fr]"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">
                  {item.year}
                </p>
                <p className="editorial-serif mt-1 text-lg font-normal text-foreground">
                  {item.kind}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
