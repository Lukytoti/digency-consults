import {
  Building2,
  GraduationCap,
  HeartPulse,
  Home,
  Rocket,
  Store,
} from "lucide-react";

const businesses = [
  {
    icon: Rocket,
    name: "Agencies & Consultants",
    description: "Scale service delivery with CRM infrastructure, AI agents and automated follow-up systems.",
  },
  {
    icon: GraduationCap,
    name: "Coaches & Course Creators",
    description: "Webinar funnels, booking automations and AI nurture sequences that fill your calendar.",
  },
  {
    icon: Building2,
    name: "B2B & SaaS Companies",
    description: "Pipeline automation, lead scoring, n8n integrations and reporting dashboards.",
  },
  {
    icon: Home,
    name: "Real Estate",
    description: "Instant lead response, AI qualification on WhatsApp, and round-robin agent assignment.",
  },
  {
    icon: HeartPulse,
    name: "Healthcare & Clinics",
    description: "AI voice receptionists, appointment booking, reminder systems and no-show recovery.",
  },
  {
    icon: Store,
    name: "E-Commerce & Local Business",
    description: "Abandoned cart recovery, SMS/WhatsApp campaigns, review automation and loyalty flows.",
  },
];

export function BusinessesIHelp() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-electric">
            Who I work with
          </p>
          <h2 className="mt-3 font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Businesses I Help
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            I work with operators who have product-market fit and need
            infrastructure to scale — not another freelancer building pages.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {businesses.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.name}
                className="group rounded-2xl border border-slate-200/60 dark:border-white/8 bg-white/50 dark:bg-navy-900/40 p-5 hover:border-electric/40 dark:hover:border-electric/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-electric/10 to-neon-purple/10 text-electric">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 font-display text-base font-semibold text-slate-900 dark:text-white">
                  {b.name}
                </h3>
                <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {b.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
