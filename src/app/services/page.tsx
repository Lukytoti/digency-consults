import type { Metadata } from "next";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { CTASection } from "@/components/sections/CTASection";
import { ToolStackSection } from "@/components/sections/ToolStackSection";
import { FAQ } from "@/components/sections/FAQ";
import { serviceIconMap } from "@/components/icons/ServiceIcons";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services — GoHighLevel, n8n, AI Voice & WhatsApp Automation",
  description:
    "End-to-end AI & CRM infrastructure: GoHighLevel CRM setup, n8n automation, AI voice agents, WhatsApp AI, sales funnels, websites and email/SMS automation.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="glow-orb h-[400px] w-[400px] -left-32 top-0 bg-electric" />
        <div className="glow-orb h-[400px] w-[400px] -right-32 top-32 bg-neon-purple" />
        <div className="absolute inset-0 grid-bg opacity-40" />

        <div className="container relative max-w-4xl">
          <p className="eyebrow">Services</p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance text-slate-900 dark:text-white">
            One operator. One <span className="gradient-text">infrastructure stack</span>.
            Everything your business actually needs.
          </h1>
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-300">
            CRMs, AI agents, funnels, websites and follow-up — designed,
            integrated and shipped end-to-end. Pick the building blocks you
            need or ship the entire revenue engine.
          </p>
        </div>
      </section>

      <section className="pb-12">
        <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container space-y-16">
          {services.map((service) => {
            const IconComponent = serviceIconMap[service.slug];
            const accent =
              service.color === "electric"
                ? "text-electric"
                : service.color === "purple"
                ? "text-neon-purple"
                : "text-neon-green";
            return (
              <div
                key={service.slug}
                id={service.slug}
                className="grid lg:grid-cols-3 gap-8 items-start scroll-mt-28"
              >
                <div className="lg:col-span-1">
                  {IconComponent && (
                    <div className="inline-flex h-12 w-12 items-center justify-center">
                      <IconComponent className="h-10 w-10" />
                    </div>
                  )}
                  <h2 className="mt-4 font-display text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-slate-600 dark:text-slate-300">
                    {service.short}
                  </p>
                </div>
                <div className="lg:col-span-2 rounded-2xl glass-card p-6 md:p-8">
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-6 grid sm:grid-cols-2 gap-3">
                    {service.features.map((f) => (
                      <div
                        key={f}
                        className="rounded-xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 p-4 text-sm text-slate-700 dark:text-slate-200"
                      >
                        <span className={cn("mr-2", accent)}>▸</span>
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <ToolStackSection />
      <FAQ />
      <CTASection />
    </>
  );
}
