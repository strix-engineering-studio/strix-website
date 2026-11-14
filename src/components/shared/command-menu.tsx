"use client";

import { MessageCircleDashed } from "lucide-react";
import { usePathname } from "next/navigation";

export function CommandMenu() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <a
      href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-24 right-5 lg:bottom-5 z-50 inline-flex items-center gap-2 border border-primary bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-raised)] transition-colors hover:bg-primary/90"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircleDashed className="size-4" />
      <span>WhatsApp</span>
    </a>
  );
}
