"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { FooterWordmark } from "./footer-wordmark";
import { SiGithub, SiInstagram, SiLinkerd } from "react-icons/si";

const serviceLinks = [
  { label: "Proof of Concept (POC)", href: "/services/poc-development" },
  { label: "Minimum Viable Product (MVP)", href: "/services/mvp-development" },
  { label: "Full Product Engineering", href: "/services/product-engineering" },
  { label: "Web Applications", href: "/services/nextjs-development" },
  {
    label: "Mobile Applications",
    href: "/services/mobile-application-development",
  },
  { label: "AI Product Engineering", href: "/services/ai-product-engineering" },
  { label: "Backend & Cloud", href: "/services/backend-systems" },
  { label: "Product Modernization", href: "/services/product-modernization" },
];

const studioLinks = [
  { label: "Selected Work", href: "/case-studies" },
  { label: "How We Work", href: "/#how-we-work" },
  { label: "Engineering Studio", href: "/about" },
  { label: "Insights & Journal", href: "/insights" },
  { label: "Open Source", href: "/open-source" },
  {
    label: "Careers",
    href: "https://wellfound.com/company/strix-engineering-studio",
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/strix-engineering-studio/",
    icon: SiLinkerd,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/strix.website/",
    icon: SiInstagram,
  },
  {
    label: "GitHub",
    href: "https://github.com/strix-engineering-studio",
    icon: SiGithub,
  },
];

export function SiteFooter() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="relative z-20 border-t border-border bg-card/60 backdrop-blur-md">
      {/* Top Banner / Philosophy */}
      <div className="border-b border-border/80">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-end lg:px-8">
          <div className="max-w-2xl space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
              Strix · Engineering Philosophy
            </span>
            <h2 className="editorial-serif text-3xl tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              From first idea to{" "}
              <span className="italic font-normal text-primary">
                production-grade product.
              </span>
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Build the right system before building the software. We design,
              engineer, and launch software products — from proof of concept to
              scalable production platforms.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-md transition-all hover:bg-primary/90"
            >
              <span>Start a project</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Col 1: Studio Info */}
          <div className="space-y-5 lg:col-span-5">
            <div>
              <Link
                href="/"
                className="font-mono text-sm font-bold tracking-[0.25em] text-foreground transition-colors hover:text-primary"
              >
                STRIX ENGINEERING STUDIO
              </Link>
              <p className="mt-1 editorial-serif text-sm italic text-muted-foreground">
                Engineered for Reality · Software Architecture & Delivery
              </p>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              A software engineering studio collaborating directly with
              founders, product creators, and technology teams to turn complex
              ideas into robust, maintainable software systems.
            </p>

            <div className="space-y-2 pt-2 text-xs font-medium text-foreground/80">
              <p className="flex items-center gap-2.5">
                <MapPin className="size-4 text-primary shrink-0" />
                <span>India · Global Delivery</span>
              </p>
              <a
                href="mailto:team@strix.website"
                className="flex items-center gap-2.5 transition-colors hover:text-primary"
              >
                <Mail className="size-4 text-primary shrink-0" />
                <span>team@strix.website</span>
              </a>
              <a
                href="tel:+918421334187"
                className="flex items-center gap-2.5 transition-colors hover:text-primary"
              >
                <Phone className="size-4 text-primary shrink-0" />
                <span>+91 84213 34187</span>
              </a>
            </div>

            <div className="flex items-center gap-2 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Strix on ${social.label}`}
                    className="flex size-9 items-center justify-center rounded-sm border border-border bg-card text-foreground/70 transition-colors hover:border-primary hover:text-primary"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="lg:col-span-4">
            <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-foreground">
              Services
            </h3>
            <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span className="size-1 rounded-full bg-border transition-colors group-hover:bg-primary" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Studio & Navigation */}
          <div className="lg:col-span-3">
            <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-foreground">
              Studio
            </h3>
            <ul className="space-y-2.5">
              {studioLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span className="size-1 rounded-full bg-border transition-colors group-hover:bg-primary" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Decorative Interactive Wordmark */}
      <FooterWordmark />

      {/* Bottom Legal / Copyright */}
      <div className="border-t border-border/80">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} Strix Engineering Studio. All rights
            reserved.
          </p>

          <p className="editorial-serif italic text-foreground/70">
            A Prototype Proves an Idea. Production Proves a System.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="transition-colors hover:text-foreground"
            >
              Privacy
            </Link>
            <span>·</span>
            <Link
              href="/terms"
              className="transition-colors hover:text-foreground"
            >
              Terms
            </Link>
            <span>·</span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
