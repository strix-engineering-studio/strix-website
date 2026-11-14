"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/shared/theme-toggle";

const navigation = [
  { label: "Work", href: "/case-studies", index: "01" },
  { label: "Services", href: "/services", index: "02" },
  { label: "How We Work", href: "/#how-we-work", index: "03" },
  { label: "Studio", href: "/about", index: "04" },
  { label: "Insights", href: "/insights", index: "05" },
  { label: "Contact", href: "/contact", index: "06" },
];

function isActiveRoute(pathname: string, href: string) {
  if (href.startsWith("/#")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/95 backdrop-blur-md transition-colors duration-200">
      <div className="strix-container flex h-16 items-center justify-between gap-3 sm:h-[4.5rem]">
        {/* Brand */}
        <Link
          href="/"
          aria-label="Strix Engineering Studio home"
          className="group flex items-center gap-3"
        >
          <div className="relative flex size-9 items-center justify-center rounded-sm border border-border bg-card p-1.5 shadow-sm transition-transform duration-200 group-hover:scale-105">
            <Image
              src="/strix.svg"
              width={26}
              height={26}
              alt="Strix logo"
              priority
              className="size-full object-contain"
            />
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-xs font-semibold tracking-[0.24em] text-foreground transition-colors group-hover:text-primary">
              STRIX
            </span>
            <span className="editorial-serif text-[11px] italic tracking-wider text-muted-foreground">
              Engineering Studio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation — only shown at lg+ */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {navigation.map((item) => {
            const active = isActiveRoute(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] transition-colors",
                  active
                    ? "text-primary"
                    : "text-foreground/70 hover:text-foreground",
                )}
              >
                {item.label}
                {active && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-3 -bottom-[17px] h-[2px] bg-primary"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA & Theme Toggle — only shown at lg+ */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />

          <Link
            href="/contact"
          className="group relative inline-flex min-h-11 items-center gap-2 border border-primary bg-primary px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-colors duration-200 hover:bg-primary/90"
          >
            <span>Start a project</span>
            <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Compact controls for mobile and tablet */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/contact"
            aria-label="Start a project"
            className="inline-flex min-h-11 items-center gap-1.5 border border-primary bg-primary px-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:bg-primary/90 sm:px-4 sm:text-xs"
          >
            <span className="sm:hidden">Start</span>
            <span className="hidden sm:inline">Start a project</span>
            <ArrowUpRight className="size-3.5" />
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-site-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex size-11 shrink-0 items-center justify-center border border-border bg-background text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      <nav id="mobile-site-navigation" hidden={!menuOpen} aria-label="Mobile main navigation" onKeyDown={(event) => { if (event.key === "Escape") setMenuOpen(false); }} className="border-t border-border bg-background px-4 py-4 shadow-[var(--shadow-raised)] lg:hidden">
          <div className="strix-container grid gap-1 sm:grid-cols-2">
            {navigation.map((item) => {
              const active = isActiveRoute(pathname, item.href);
              return <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} onClick={() => setMenuOpen(false)} className={cn("flex min-h-11 items-center justify-between border-b border-border px-2 text-sm transition-colors hover:text-primary sm:border", active ? "text-primary" : "text-foreground")}>
                <span>{item.label}</span><span className="font-mono text-[10px] text-muted-foreground">{item.index}</span>
              </Link>;
            })}
          </div>
          <div className="strix-container mt-4 flex items-center justify-between gap-4">
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Appearance</span>
            <ThemeToggle />
          </div>
      </nav>
    </header>
  );
}
