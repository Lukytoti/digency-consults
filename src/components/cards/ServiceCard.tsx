import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";
import { cn } from "@/lib/utils";

const accentMap: Record<Service["color"], string> = {
  electric:
    "from-electric/15 to-electric/5 text-electric ring-electric/20 group-hover:shadow-glow",
  purple:
    "from-neon-purple/15 to-neon-purple/5 text-neon-purple ring-neon-purple/20 group-hover:shadow-glow-purple",
  green:
    "from-neon-green/15 to-neon-green/5 text-neon-green ring-neon-green/20 group-hover:shadow-glow-green",
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link
      href={`/services#${service.slug}`}
      className="group relative block rounded-2xl glass-card p-6 transition-all duration-300 hover:-translate-y-1"
    >
      <div
        className={cn(
          "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ring-1 transition",
          accentMap[service.color]
        )}
      >
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="mt-5 font-display text-lg font-semibold text-slate-900 dark:text-white">
        {service.title}
      </h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
        {service.short}
      </p>

      <ul className="mt-4 space-y-1.5">
        {service.features.slice(0, 3).map((f) => (
          <li
            key={f}
            className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-br from-electric to-neon-purple" />
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-electric">
        Learn more <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}
