import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/cards/ServiceCard";

export function ServicesSection({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <section className="section relative">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Services</p>
            <h2 className="mt-4 section-title text-slate-900 dark:text-white text-balance">
              Everything you need to capture, qualify and close — in one
              infrastructure stack.
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              CRMs, AI agents, funnels and websites — built and integrated by
              one operator who's actually shipped them in production.
            </p>
          </div>
          <Link
            href="/services"
            className="btn-outline self-start md:self-auto"
          >
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
