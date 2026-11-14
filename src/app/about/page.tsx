import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { PageShell } from "@/components/shared/page-shell";
import { buildMetadata } from "@/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About Strix | Product Engineering Studio",
  description: "Learn how Strix approaches product strategy, engineering ownership, and reliable digital products built to evolve.",
  path: "/about",
});

const principles = [
  ["01", "Product thinking first", "We connect engineering choices to the people using the product and the outcomes it needs to support."],
  ["02", "Direct engineering ownership", "The people shaping the solution stay close to implementation, tradeoffs, and delivery."],
  ["03", "Transparent delivery", "Clear scope, visible decisions, and regular communication help teams make informed choices."],
  ["04", "Built for evolution", "We favor understandable systems that can adapt as requirements, teams, and products change."],
];

const capabilities = ["Product discovery & technical feasibility", "Web and mobile product engineering", "Backend, API & AI engineering", "Cloud infrastructure & integrations", "Modernization, performance & ongoing engineering"];

export default function AboutPage() {
  return (
    <PageShell eyebrow="About Strix" title="Engineering with intention. Building for what comes next." description="Strix helps businesses turn ideas into reliable digital products through thoughtful product decisions, hands-on software engineering, and systems designed to scale with real needs.">
      <section className="grid gap-8 border-b border-border pb-10 md:grid-cols-2 md:gap-12">
        <div><p className="editorial-meta text-primary">THE STUDIO</p><h2 className="editorial-serif mt-3 text-3xl">Build the right system before building the software.</h2></div>
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground"><p>Strix is a product engineering studio for teams building or improving digital products. We work across early product definition, implementation, and the engineering work that keeps a product dependable after launch.</p><p>Each engagement starts with the context: the users, constraints, and business need. From there, we shape a practical path from product decisions to working software.</p></div>
      </section>

      <section className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
        <div><p className="editorial-meta text-primary">ENGINEERING PHILOSOPHY</p><h2 className="editorial-serif mt-3 text-3xl">Make deliberate decisions. Leave room to grow.</h2></div>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">Good engineering is more than choosing a framework or shipping a feature. It means understanding what the product must do, choosing an architecture that fits its current reality, and keeping the next change possible.</p>
      </section>

      <section className="grid gap-px border border-border bg-border sm:grid-cols-2">
        {principles.map(([number, title, body]) => <article key={number} className="bg-background p-6 sm:p-8"><span className="font-mono text-xs text-primary">{number}</span><h3 className="editorial-serif mt-5 text-2xl">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p></article>)}
      </section>

      <section className="grid gap-8 border-y border-border py-10 md:grid-cols-2 md:gap-12">
        <div><p className="editorial-meta text-primary">HOW THE WORK MOVES</p><h2 className="editorial-serif mt-3 text-3xl">A journey shaped by the product.</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">Rather than assign dates to an undocumented studio history, these are the milestones we work toward with each product team.</p></div>
        <ol className="space-y-5">{[["01", "Understand", "Clarify the users, constraints, and opportunity."], ["02", "Shape", "Turn priorities into a product and technical direction."], ["03", "Deliver", "Build, review, and release in visible increments."], ["04", "Evolve", "Use what the product teaches us to guide the next improvements."]].map(([n, title, body]) => <li key={n} className="flex gap-4 border-b border-border pb-4 last:border-0"><span className="font-mono text-xs text-primary">{n}</span><div><h3 className="text-sm font-semibold">{title}</h3><p className="mt-1 text-sm text-muted-foreground">{body}</p></div></li>)}</ol>
      </section>

      <section className="grid gap-8 md:grid-cols-2 md:gap-12">
        <div><p className="editorial-meta text-primary">TECHNICAL CAPABILITIES</p><h2 className="editorial-serif mt-3 text-3xl">From product foundations to production systems.</h2></div>
        <ul className="space-y-3">{capabilities.map((item) => <li key={item} className="flex items-start gap-3 border-b border-border pb-3 text-sm"><Check className="mt-0.5 size-4 text-primary" />{item}</li>)}</ul>
      </section>

      <section className="border-t border-border pt-8"><p className="editorial-meta text-primary">WHERE WE WORK</p><h2 className="editorial-serif mt-3 text-3xl">Products with real operational needs.</h2><p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">Strix works across SaaS and web platforms, mobile applications, internal operations tools, connected and IoT systems, and AI-enabled workflows. Engagements span product discovery, new product development, and modernization.</p></section>

      <section className="flex flex-col items-start justify-between gap-6 border border-border bg-muted/20 p-6 sm:p-9 md:flex-row md:items-center"><div><p className="editorial-meta text-primary">START A CONVERSATION</p><h2 className="editorial-serif mt-2 text-3xl">What are you working through?</h2><p className="mt-2 text-sm text-muted-foreground">Share the product opportunity or engineering challenge with us.</p></div><Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">Start a project <ArrowUpRight className="size-4" /></Link></section>
    </PageShell>
  );
}
