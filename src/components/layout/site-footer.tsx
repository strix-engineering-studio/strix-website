
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ThemeToggle } from "@/components/shared/theme-toggle";
import { FooterWordmark } from "./footer-wordmark";
import { Mail, MapPin, Phone } from "lucide-react";

const studioLinks = [
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Open Source", href: "/open-source" },
  { label: "Case Studies", href: "/case-studies" },
];

const companyLinks = [
  { label: "Careers", href: "https://wellfound.com/company/strix-engineering-studio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "Github", href: "https://github.com/strix-engineering-studio" },
  { label: "Linkedin", href: "https://www.linkedin.com/company/strix-engineering-studio" },
  { label: "Instagram", href: "https://www.instagram.com/strix.website" },
  { label: "Discord", href: "https://discord.gg/QfXFpYvJ" },
];

const legalLinks = [
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
];

function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-foreground/70">
        {title}
      </h2>

      <ul className="flex flex-col items-start gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-foreground/60 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="relative z-20 border-t border-black/10 bg-background dark:border-white/10">
      {/* Navigation */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
          {/* Brand */}
<div className="col-span-2 sm:col-span-1">
  <Link
    href="/"
    aria-label="Strix Engineering Studio home"
    className="group inline-flex items-center"
  >
    <span className="text-base font-bold tracking-[0.2em] text-foreground transition-colors group-hover:text-primary">
      STRIX ENGINEERING STUDIO
    </span>
  </Link>

  <p className="mt-2 text-xs font-medium tracking-wide text-foreground/70">
    System Before Software
  </p>

  <div className="mt-4 space-y-2.5 text-sm text-foreground/60">
    <p className="flex items-start gap-2">
      <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
      India
    </p>

    <a
      href="mailto:team@strix.website"
      className="flex items-center gap-2 transition-colors hover:text-foreground"
    >
      <Mail className="size-4 shrink-0" aria-hidden="true" />
      team@strix.website
    </a>

    <a
      href="tel:+918421334187"
      className="flex items-center gap-2 transition-colors hover:text-foreground"
    >
      <Phone className="size-4 shrink-0" aria-hidden="true" />
      +91 84213 34187
    </a>
  </div>
</div>

          <FooterLinkGroup title="Studio" links={studioLinks} />

          <FooterLinkGroup title="Company" links={companyLinks} />

          <FooterLinkGroup title="Follow Us" links={socialLinks} />
        </div>
      </div>

      {/* Copyright and legal links */}
      <div className="border-t border-black/10 dark:border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 text-xs text-foreground/60 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Strix Engineering Studio</p>

          <p>Built with care in India</p>

          <div className="flex flex-wrap items-center gap-3">
            {legalLinks.map((link, index) => (
              <div key={link.href} className="flex items-center gap-3">
                {index > 0 && (
                  <span aria-hidden="true" className="text-foreground/30">
                    ·
                  </span>
                )}

                <Link
                  href={link.href}
                  className="transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </div>
            ))}

            <span aria-hidden="true" className="text-foreground/30">
              ·
            </span>

            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Decorative Wordmark */}

      <FooterWordmark />
      
    </footer>
  );
}
