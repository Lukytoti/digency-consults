import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/cards/ServiceCard";

export function ServicesSection({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <section className="py-16 md:py-20 relative">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-electric">
              Services
            </p>
            <h2 className="mt-3 font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Everything you need to capture, qualify and close — in one
              infrastructure stack.
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              CRMs, AI agents, funnels and websites — built and integrated by
              one operator who&apos;s actually shipped them in production.
            </p>
          </div>
          <Link
            href="/services"
            className="btn-outline self-start md:self-auto text-sm"
          >
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
