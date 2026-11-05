import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { absoluteUrl } from "@/seo/config";
import { breadcrumbSchema } from "@/seo/schemas/breadcrumb";
import { faqSchema } from "@/seo/schemas/faq";
import { organizationSchema } from "@/seo/schemas/organization";
import { serviceSchema as buildServiceSchema } from "@/seo/schemas/service";
import { websiteSchema } from "@/seo/schemas/website";
import { JsonLd } from "@/seo/json-ld";
import { PageShell } from "@/components/shared/page-shell";

type FAQ = {
  question: string;
  answer: string;
};

type RelatedLink = {
  label: string;
  href: string;
};

type ServiceSchema = {
  name: string;
  description: string;
  url: string;
};

type BreadcrumbParent = {
  name: string;
  href: string;
};

type ContentPageProps = {
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  whatIsThis: string;
  whoIsItFor: string;
  whatProblemDoesItSolve: string;
  howDoesItWork: string;
  whyChooseStrix: string;
  related: RelatedLink[];
  faqs: FAQ[];
  breadcrumbParent?: BreadcrumbParent;
  serviceSchema?: ServiceSchema;
  children?: React.ReactNode;
};

export function ContentPage({
  path,
  eyebrow,
  title,
  description,
  whatIsThis,
  whoIsItFor,
  whatProblemDoesItSolve,
  howDoesItWork,
  whyChooseStrix,
  related,
  faqs,
  breadcrumbParent,
  serviceSchema,
  children,
}: ContentPageProps) {
  const faqJsonLd = faqSchema(faqs);

  const jsonLd = [
    organizationSchema(),
    websiteSchema(),
    breadcrumbSchema([
      {
        name: "Home",
        url: absoluteUrl("/"),
      },
      ...(breadcrumbParent
        ? [
            {
              name: breadcrumbParent.name,
              url: absoluteUrl(breadcrumbParent.href),
            },
          ]
        : []),
      {
        name: title,
        url: absoluteUrl(path),
      },
    ]),
    ...(faqJsonLd ? [faqJsonLd] : []),
    ...(serviceSchema ? [buildServiceSchema(serviceSchema)] : []),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      <div className="strix-container mb-[-1.5rem] pt-6">
        <Breadcrumb title={title} parent={breadcrumbParent} />
      </div>

      <PageShell eyebrow={eyebrow} title={title} description={description}>
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Main Content (7 cols) */}
          <main className="space-y-8 rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:col-span-8">
            <Section title="What is this?" body={whatIsThis} />
            <Section title="Who is it for?" body={whoIsItFor} />
            <Section title="What problem does it solve?" body={whatProblemDoesItSolve} />
            <Section title="How does it work?" body={howDoesItWork} />
            <Section title="Why choose Strix?" body={whyChooseStrix} />
          </main>

          {/* Aside: Related Links & FAQs (4 cols) */}
          <aside className="space-y-6 lg:col-span-4">
            <RelatedServices services={related} />
            <FAQSection faqs={faqs} />
          </aside>
        </div>

        {children}

        <ProjectInquiryCTA />
      </PageShell>
    </>
  );
}

function Breadcrumb({
  title,
  parent,
}: {
  title: string;
  parent?: BreadcrumbParent;
}) {
  return (
    <nav aria-label="Breadcrumb" className="font-mono text-xs text-muted-foreground">
      <Link href="/" className="transition hover:text-foreground">
        Home
      </Link>

      {parent ? (
        <>
          <span aria-hidden="true" className="mx-2 text-border">
            /
          </span>
          <Link href={parent.href} className="transition hover:text-foreground">
            {parent.name}
          </Link>
        </>
      ) : null}

      <span aria-hidden="true" className="mx-2 text-border">
        /
      </span>
      <span className="text-foreground">{title}</span>
    </nav>
  );
}

function RelatedServices({ services }: { services: RelatedLink[] }) {
  if (!services.length) {
    return null;
  }

  return (
    <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
        Related Offerings
      </p>

      <div className="mt-4 flex flex-col gap-2">
        {services.map((item) => (
          <Link
            key={`${item.href}-${item.label}`}
            href={item.href}
            className="group flex items-center justify-between rounded-md border border-border bg-muted/20 p-2.5 text-xs font-medium text-foreground transition hover:border-primary hover:bg-primary/5"
          >
            <span>{item.label}</span>
            <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
          </Link>
        ))}
      </div>
    </section>
  );
}

function FAQSection({ faqs }: { faqs: FAQ[] }) {
  if (!faqs.length) {
    return null;
  }

  return (
    <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
        Frequently Asked Questions
      </p>

      <div className="mt-4 space-y-3.5">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="rounded-md border border-border/80 bg-muted/20 p-3.5"
          >
            <p className="text-xs font-semibold text-foreground">{faq.question}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectInquiryCTA() {
  return (
    <section className="rounded-xl border border-primary/30 bg-primary/5 p-8 text-center sm:p-10">
      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-primary">
        Start with the system
      </span>

      <h2 className="editorial-serif mt-2 text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
        Bring your real constraints into the room.
      </h2>

      <p className="mx-auto mt-2 max-w-xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
        Tell us what you are building, where the current system is getting in the
        way, and what a useful next step looks like.
      </p>

      <div className="mt-6">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-md transition-all hover:bg-primary/90"
        >
          <span>Start a project inquiry</span>
          <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}

function Section({ title, body }: { title: string; body: string }) {
  return (
    <section className="border-b border-border/70 pb-6 last:border-b-0 last:pb-0">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
        {title}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
        {body}
      </p>
    </section>
  );
}
