"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
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

  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/90 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
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
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-primary/40 bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground shadow-sm transition-all duration-200 hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20"
          >
            <span>Start a project</span>
            <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile/Tablet controls — theme toggle only, no hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
