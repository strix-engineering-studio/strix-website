"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Briefcase, Layers, BookOpen, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: Home,
    exact: true,
  },
  {
    label: "Work",
    href: "/case-studies",
    icon: Briefcase,
    exact: false,
  },
  {
    label: "Services",
    href: "/services",
    icon: Layers,
    exact: false,
  },
  {
    label: "Insights",
    href: "/insights",
    icon: BookOpen,
    exact: false,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Mail,
    exact: false,
  },
];

function isActive(pathname: string, href: string, exact: boolean): boolean {
  if (exact) return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileBottomNavigation() {
  const pathname = usePathname();

  // Don't render on admin pages
  if (pathname.startsWith("/admin")) return null;

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed z-50 lg:hidden"
      style={{
        bottom: "calc(0.75rem + env(safe-area-inset-bottom))",
        left: "0.75rem",
        right: "0.75rem",
      }}
    >
      <div className="flex items-center justify-around border border-border bg-background/95 px-2 py-2 shadow-[var(--shadow-raised)] backdrop-blur-md">
        {navItems.map(({ label, href, icon: Icon, exact }) => {
          const active = isActive(pathname, href, exact);
          return (
            <Link
              key={href}
              href={href}
              aria-label={label}
              aria-current={active ? "page" : undefined}
              className={cn(
                "relative flex flex-col items-center gap-1 px-3 py-2 transition-colors duration-150",
                active
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {/* Active indicator dot */}
              {active && (
                <span
                  aria-hidden="true"
                  className="absolute top-1 right-1 size-1 rounded-full bg-primary"
                />
              )}

              <Icon
                aria-hidden="true"
                className={cn(
                  "size-5 transition-transform duration-150",
                  active && "scale-110",
                )}
                strokeWidth={active ? 2.2 : 1.8}
              />
              <span
                className={cn(
                  "font-mono text-[9px] uppercase tracking-[0.12em] transition-colors duration-150",
                  active ? "text-primary font-semibold" : "text-muted-foreground/70",
                )}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

