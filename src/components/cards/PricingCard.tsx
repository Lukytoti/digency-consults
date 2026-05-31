import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import type { PricingTier } from "@/data/pricing";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

export function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <div
      className={cn(
        "relative rounded-3xl p-6 md:p-8 transition-all duration-300",
        tier.highlight
          ? "bg-gradient-to-br from-navy-900 via-navy-950 to-black text-white shadow-glow ring-1 ring-electric/40"
          : "glass-card"
      )}
    >
      {tier.highlight && (
        <span className="absolute -top-3 right-6 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-electric to-neon-purple px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
          <Sparkles className="h-3 w-3" /> Most Popular
        </span>
      )}

      <h3
        className={cn(
          "font-display text-xl font-semibold",
          tier.highlight ? "text-white" : "text-slate-900 dark:text-white"
        )}
      >
        {tier.name}
      </h3>
      <p
        className={cn(
          "mt-1 text-sm",
          tier.highlight ? "text-slate-300" : "text-slate-600 dark:text-slate-300"
        )}
      >
        {tier.tagline}
      </p>

      <div className="mt-6 flex items-baseline gap-2">
        <span
          className={cn(
            "font-display text-4xl md:text-5xl font-bold",
            tier.highlight ? "text-white" : "text-slate-900 dark:text-white"
          )}
        >
          {tier.price}
        </span>
        <span
          className={cn(
            "text-sm",
            tier.highlight ? "text-slate-300" : "text-slate-500 dark:text-slate-400"
          )}
        >
          {tier.cadence}
        </span>
      </div>

      <ul className="mt-6 space-y-3">
        {tier.features.map((f) => (
          <li
            key={f}
            className={cn(
              "flex items-start gap-3 text-sm",
              tier.highlight ? "text-slate-200" : "text-slate-700 dark:text-slate-300"
            )}
          >
            <Check
              className={cn(
                "mt-0.5 h-4 w-4 shrink-0",
                tier.highlight ? "text-neon-green" : "text-electric"
              )}
            />
            {f}
          </li>
        ))}
      </ul>

      <Link
        href={siteConfig.contact.calendar}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "mt-8 flex w-full justify-center",
          tier.highlight ? "btn-primary" : "btn-outline"
        )}
      >
        {tier.cta}
      </Link>
    </div>
  );
}
