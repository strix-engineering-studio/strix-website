import Link from "next/link";

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

      <div className="strix-container mb-[-2rem] pt-8">
        <Breadcrumb title={title} parent={breadcrumbParent} />
      </div>

      <PageShell eyebrow={eyebrow} title={title} description={description}>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <main className="space-y-6 rounded-xl border border-white/10 bg-white/4 p-5">
            <Section title="What is this?" body={whatIsThis} />

            <Section title="Who is it for?" body={whoIsItFor} />

            <Section
              title="What problem does it solve?"
              body={whatProblemDoesItSolve}
            />

            <Section title="How does it work?" body={howDoesItWork} />

            <Section title="Why choose Strix?" body={whyChooseStrix} />
          </main>

          <aside className="space-y-6 rounded-xl border border-white/10 bg-black/20 p-5">
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
    <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
      <Link href="/" className="transition hover:text-foreground">
        Home
      </Link>

      {parent ? (
        <>
          <span aria-hidden="true" className="mx-2 text-white/30">
            /
          </span>

          <Link href={parent.href} className="transition hover:text-foreground">
            {parent.name}
          </Link>
        </>
      ) : null}

      <span aria-hidden="true" className="mx-2 text-white/30">
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
    <section>
      <p className="text-[11px] uppercase tracking-[0.35em] text-white/45">
        Related
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {services.map((item) => (
          <Link
            key={`${item.href}-${item.label}`}
            href={item.href}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-foreground transition hover:bg-white/10"
          >
            {item.label}
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
    <section>
      <p className="text-[11px] uppercase tracking-[0.35em] text-white/45">
        FAQs
      </p>

      <div className="mt-4 space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="rounded border border-white/10 bg-white/5 p-4"
          >
            <p className="font-medium text-foreground">{faq.question}</p>

            <p className="mt-2 text-sm leading-7 text-muted-foreground">
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
    <section className="rounded-xl border border-primary/20 bg-primary/10 p-6">
      <p className="text-[11px] uppercase tracking-[0.35em] text-primary">
        Start with the system
      </p>

      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
        Bring the real constraints into the room.
      </h2>

      <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
        Share what you are building, where the current system is getting in the
        way, and what a useful next step would look like.
      </p>

      <Link
        href="/project-inquiry"
        className="mt-5 inline-flex rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90"
      >
        Start a Project
      </Link>
    </section>
  );
}

function Section({ title, body }: { title: string; body: string }) {
  return (
    <section>
      <p className="text-[11px] uppercase tracking-[0.35em] text-white/45">
        {title}
      </p>

      <p className="mt-3 text-sm leading-7 text-muted-foreground">{body}</p>
    </section>
  );
}
