
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  GitBranch,
  Link2,
  Menu,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { SiGithub, SiInstagram, SiLinkerd } from "react-icons/si";

const navigation = [
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Products", href: "/products" },
  { label: "Open Source", href: "/open-source" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/strix-engineering-studio",
    icon: SiGithub,
  },
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
];

function isActiveRoute(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cn(
          "mx-auto w-full rounded-none border-b border-border px-4 py-2",
          "bg-background/95",
          "backdrop-blur-xl",
        )}
      >
        {/* Main header */}
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-3 py-2.5 sm:px-4 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:px-5">
          {/* Brand */}
          <Link
            href="/"
            aria-label="Strix Engineering Studio home"
            className="flex min-w-0 items-center gap-2.5"
          >
            <Image
              src="/strix.svg"
              width={32}
              height={32}
              alt=""
              priority
              className="h-8 w-8 shrink-0"
            />

            <div className="hidden min-w-0 sm:block">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">
                STRIX
              </p>

              <p className="text-xs text-foreground/60">
                System Before Software
              </p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden min-w-0 items-center justify-center gap-0.5 lg:flex"
          >
            {navigation.map((item) => {
              const active = isActiveRoute(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative whitespace-nowrap rounded-sm px-2.5 py-2",
                    "text-[10px] font-medium uppercase tracking-[0.16em]",
                    "transition-colors xl:px-3 xl:text-[11px]",
                    active
                      ? "text-primary after:absolute after:bottom-0 after:left-2.5 after:right-2.5 after:h-px after:bg-primary"
                      : "text-foreground/60 hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop social links */}
          <div className="hidden items-center justify-end gap-1 lg:flex">
            <div
              aria-hidden="true"
              className="mr-2 h-4 w-px bg-border"
            />

            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Strix on ${social.label} (opens in a new tab)`}
                  className={cn(
                    "group relative flex h-8 w-8 items-center justify-center rounded",
                    "text-foreground/50 transition-colors",
                    "hover:bg-primary/10 hover:text-primary",
                  )}
                >
                  <Icon
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-200 group-hover:scale-110"
                  />

                  <span
                    aria-hidden="true"
                    className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-primary transition-all duration-200 group-hover:w-3"
                  />
                </Link>
              );
            })}
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-md border border-border",
              "text-foreground/70 transition-colors",
              "hover:border-primary/40 hover:text-primary",
              "lg:hidden",
            )}
          >
            {open ? (
              <X aria-hidden="true" className="h-4 w-4" />
            ) : (
              <Menu aria-hidden="true" className="h-4 w-4" />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        {open && (
          <div
            id="mobile-navigation"
            className="border-t border-border px-3 py-3 sm:px-4 lg:hidden"
          >
            <nav aria-label="Mobile navigation">
              <div className="flex flex-col gap-0.5">
                {navigation.map((item) => {
                  const active = isActiveRoute(pathname, item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center justify-between rounded-md px-3 py-2.5",
                        "text-[11px] font-medium uppercase tracking-[0.18em]",
                        "transition-colors",
                        active
                          ? "bg-primary/10 text-primary"
                          : "text-foreground/70 hover:bg-muted hover:text-foreground",
                      )}
                    >
                      <span>{item.label}</span>

                      {active && (
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 rounded-full bg-primary"
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* Mobile social links */}
            <div className="mt-3 border-t border-border pt-3">
              <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/40">
                Connect with Strix
              </p>

              <div className="grid grid-cols-3 gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex min-w-0 items-center justify-center gap-1.5 rounded-md",
                        "border border-border px-2 py-2.5",
                        "text-foreground/60 transition-colors",
                        "hover:border-primary/30 hover:bg-primary/5 hover:text-primary",
                      )}
                    >
                      <Icon
                        aria-hidden="true"
                        className="h-3.5 w-3.5 shrink-0"
                      />

                      <span className="truncate text-[9px] font-medium uppercase tracking-wider">
                        {social.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Mobile contact action */}
            <Link
              href="/project-inquiry"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Start a Project
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
