import type { Metadata } from "next";
import { Mail, MapPin, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { PageShell } from "@/components/shared/page-shell";
import { ProjectInquiryForm } from "@/components/contact/project-inquiry-form";
import { buildMetadata } from "@/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact & Project Inquiry | Strix Engineering Studio",
  description:
    "Start a software engineering project with Strix Engineering Studio. Discuss your POC, MVP, or production product requirements directly with senior engineers.",
  path: "/contact",
  keywords: [
    "hire software engineering studio",
    "POC development inquiry",
    "MVP development contact",
    "product engineering consultation",
  ],
});

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Project Inquiry"
      title="Tell us what you’re engineering"
      description="Whether you have an early concept needing validation or a production system requiring architectural scale, share your requirements below."
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Left Column: Direct Studio Information & Guarantees (4 cols) */}
        <aside className="space-y-6 lg:col-span-4">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-7">
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
              DIRECT CHANNELS
            </span>
            <h2 className="editorial-serif mt-2 text-2xl font-normal text-foreground">
              Direct Senior Access
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Your inquiry goes straight to our lead engineers. We do not use
              intermediary sales representatives.
            </p>

            <div className="mt-6 space-y-4 border-t border-border/70 pt-5 text-xs text-foreground/90">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Email
                </p>
                <a
                  href="mailto:team@strix.website"
                  className="mt-1 flex items-center gap-2 font-medium transition-colors hover:text-primary"
                >
                  <Mail className="size-4 text-primary shrink-0" />
                  <span>team@strix.website</span>
                </a>
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Phone & WhatsApp
                </p>
                <a
                  href="tel:+918421334187"
                  className="mt-1 flex items-center gap-2 font-medium transition-colors hover:text-primary"
                >
                  <Phone className="size-4 text-primary shrink-0" />
                  <span>+91 84213 34187</span>
                </a>
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Studio Location
                </p>
                <p className="mt-1 flex items-center gap-2 font-medium">
                  <MapPin className="size-4 text-primary shrink-0" />
                  <span>India · Global Remote Delivery</span>
                </p>
              </div>
            </div>
          </div>

          {/* Guarantees Box */}
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 shadow-sm">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
              OUR COMMITMENT
            </span>
            <h3 className="editorial-serif mt-2 text-lg font-normal text-foreground">
              What Happens Next:
            </h3>

            <ul className="mt-3 space-y-2.5 text-xs text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
                <span>Response within 24 to 48 business hours.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
                <span>NDA signed upfront upon request.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
                <span>Clear technical scope and fixed estimate.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
                <span>Zero sales pressure or lock-in tactics.</span>
              </li>
            </ul>
          </div>
        </aside>

        {/* Right Column: Full Inquiry Form (8 cols) */}
        <div className="lg:col-span-8">
          <ProjectInquiryForm />
        </div>
      </div>
    </PageShell>
  );
}
