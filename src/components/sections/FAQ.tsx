"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { faqs } from "@/data/faq";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section relative">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 section-title text-slate-900 dark:text-white text-balance">
            Common questions, answered.
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            If you don't see your question here, just reach out — I usually
            reply on WhatsApp the same day.
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={cn(
                  "rounded-2xl glass-card transition",
                  isOpen && "shadow-glow"
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-slate-900 dark:text-white">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-slate-500 transition-transform",
                      isOpen && "rotate-180 text-electric"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-slate-600 dark:text-slate-300">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
