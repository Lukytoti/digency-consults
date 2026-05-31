import { Compass, Cog, LineChart, Rocket } from "lucide-react";

const steps = [
  {
    icon: Compass,
    title: "1. Audit & Strategy",
    body: "We map your current funnel, CRM and follow-up. I find the highest-leverage automation that will move revenue first.",
  },
  {
    icon: Cog,
    title: "2. Build & Integrate",
    body: "I build the infrastructure — GoHighLevel, n8n, AI agents, funnels, websites — and connect every piece end-to-end.",
  },
  {
    icon: Rocket,
    title: "3. Launch & Optimize",
    body: "We go live, test with real traffic, fix bottlenecks and tune the system until conversion is repeatable.",
  },
  {
    icon: LineChart,
    title: "4. Scale with Confidence",
    body: "Reporting, dashboards and SOPs so your team can run, iterate and scale the system without relying on me forever.",
  },
];

export function HowIHelp() {
  return (
    <section className="section relative bg-slate-50 dark:bg-navy-900/40">
      <div className="container">
        <div className="max-w-3xl">
          <p className="eyebrow">How I help clients</p>
          <h2 className="mt-4 section-title text-slate-900 dark:text-white text-balance">
            A 4-step process built around revenue, not deliverables.
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Most agencies sell hours. I sell outcomes. Here's how a typical
            engagement runs from first call to scaled system.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="relative rounded-2xl glass-card p-6"
              >
                <div className="absolute -top-3 -left-3 h-10 w-10 rounded-xl bg-gradient-to-br from-electric via-neon-purple to-neon-green text-white flex items-center justify-center shadow-glow">
                  <Icon className="h-4 w-4" />
                </div>
                <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Step {i + 1}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold text-slate-900 dark:text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {s.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
