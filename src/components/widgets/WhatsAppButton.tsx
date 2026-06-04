"use client";

import { siteConfig } from "@/lib/site-config";
import { WhatsAppLogo } from "@/components/icons/BrandIcons";

export function WhatsAppButton() {
  const url = siteConfig.contact.whatsapp;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 blur-xl group-hover:bg-[#25D366]/60 transition" />
      <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-[0_0_20px_rgba(37,211,102,0.3)] ring-4 ring-[#25D366]/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(37,211,102,0.5)]">
        <WhatsAppLogo className="h-6 w-6" />
      </span>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden sm:inline-flex whitespace-nowrap rounded-lg bg-slate-900 dark:bg-white px-3 py-1.5 text-xs font-medium text-white dark:text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg">
        Chat on WhatsApp
      </span>
    </a>
  );
}
