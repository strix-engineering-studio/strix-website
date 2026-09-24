import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import {
  breadcrumbSchema,
  faqSchema,
  organizationSchema,
  serviceSchema,
  websiteSchema,
} from "@/lib/seo";
import { PageShell } from "@/components/shared/page-shell";

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
  related: { label: string; href: string }[];
  faqs: { question: string; answer: string }[];
  breadcrumbParent?: { name: string; href: string };
  serviceSchema?: {
    name: string;
    description: string;
    url: string;
  };
  children?: React.ReactNode;
};

export function ContentPage(props: ContentPageProps) {
  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          websiteSchema(),
          breadcrumbSchema([
            { name: "Home", item: "https://strix.website/" },
            ...(props.breadcrumbParent
              ? [
                  {
                    name: props.breadcrumbParent.name,
                    item: `https://strix.website${props.breadcrumbParent.href}`,
                  },
                ]
              : []),
            { name: props.title, item: `https://strix.website${props.path}` },
          ]),
          faqSchema(props.faqs),
          ...(props.serviceSchema ? [serviceSchema(props.serviceSchema)] : []),
        ]}
      />

      <div className="strix-container mb-[-2rem] pt-8">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
          <Link href="/" className="transition hover:text-foreground">
            Home
          </Link>
          {props.breadcrumbParent ? (
            <>
              <span className="mx-2 text-white/30">/</span>
              <Link
                href={props.breadcrumbParent.href}
                className="transition hover:text-foreground"
              >
                {props.breadcrumbParent.name}
              </Link>
            </>
          ) : null}
          <span className="mx-2 text-white/30">/</span>
          <span className="text-foreground">{props.title}</span>
        </nav>
      </div>

      <PageShell
        eyebrow={props.eyebrow}
        title={props.title}
        description={props.description}
      >
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 rounded-xl border border-white/10 bg-white/4 p-5">
            <Section title="What is this?" body={props.whatIsThis} />
            <Section title="Who is it for?" body={props.whoIsItFor} />
            <Section
              title="What problem does it solve?"
              body={props.whatProblemDoesItSolve}
            />
            <Section title="How does it work?" body={props.howDoesItWork} />
            <Section title="Why choose Strix?" body={props.whyChooseStrix} />
          </div>

          <aside className="space-y-6 rounded-xl border border-white/10 bg-black/20 p-5">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-white/45">
                Related
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {props.related.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-foreground transition hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-white/45">
                FAQs
              </p>
              <div className="mt-4 space-y-4">
                {props.faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="rounded border border-white/10 bg-white/5 p-4"
                  >
                    <p className="font-medium text-foreground">
                      {faq.question}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {props.children}

        <div className="rounded-xl border border-primary/20 bg-primary/10 p-6">
          <p className="text-[11px] uppercase tracking-[0.35em] text-primary">
            Start with the system
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
            Bring the real constraints into the room.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
            Share what you are building, where the current system is getting in
            the way, and what a useful next step would look like.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90"
          >
            Start a conversation
          </Link>
        </div>
      </PageShell>
    </>
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
