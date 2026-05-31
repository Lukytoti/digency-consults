"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function WhatsAppButton() {
  const number = siteConfig.contact.whatsapp;
  const text = encodeURIComponent(
    "Hey Tobi, I'd like to talk about a CRM / automation project."
  );

  return (
    <a
      href={`https://wa.me/${number}?text=${text}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-500/40 blur-xl group-hover:bg-emerald-500/60 transition" />
      <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-glow-green ring-4 ring-emerald-500/20 transition group-hover:scale-105">
        <MessageCircle className="h-6 w-6" />
      </span>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden sm:inline-flex whitespace-nowrap rounded-lg bg-slate-900 dark:bg-white px-3 py-1.5 text-xs font-medium text-white dark:text-slate-900 opacity-0 group-hover:opacity-100 transition">
        Chat on WhatsApp
      </span>
    </a>
  );
}
