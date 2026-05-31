import {
  AlertTriangle,
  Clock,
  Database,
  PhoneOff,
  Repeat,
  TrendingDown,
} from "lucide-react";

const problems = [
  {
    icon: PhoneOff,
    title: "Leads go cold before you even reply",
    body: "Most businesses respond to inbound leads in hours, not seconds. By then the prospect has moved on to a competitor that replied first.",
  },
  {
    icon: Repeat,
    title: "Manual follow-up that never actually happens",
    body: "Your team promises to nurture and reactivate leads. In reality, life gets in the way and 80% of opportunities die in the gap.",
  },
  {
    icon: Database,
    title: "A messy CRM that nobody trusts",
    body: "Tags everywhere, duplicate contacts, inconsistent stages. Your reporting is fiction and your forecasting is a guess.",
  },
  {
    icon: Clock,
    title: "Hours wasted on tasks AI can do",
    body: "Qualifying leads, sending reminders, chasing no-shows, posting updates — you're paying humans to do robot work.",
  },
  {
    icon: TrendingDown,
    title: "Funnels that don't convert",
    body: "Pretty pages, weak strategy. Most funnels leak revenue at every step because nobody mapped the system end-to-end.",
  },
  {
    icon: AlertTriangle,
    title: "Tool sprawl with no infrastructure",
    body: "10 SaaS subscriptions, 0 integration. Data lives in silos and your team copy-pastes between tools all day.",
  },
];

export function ProblemsSection() {
  return (
    <section className="section relative">
      <div className="container">
        <div className="max-w-3xl">
          <p className="eyebrow">Problems I solve</p>
          <h2 className="mt-4 section-title text-slate-900 dark:text-white text-balance">
            If your business has any of these, you're losing revenue every day.
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            I've seen the same six problems kill growth across coaching,
            agencies, real estate and B2B. The good news: they're all
            infrastructure problems — and infrastructure is fixable.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group relative rounded-2xl glass-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500/10 to-amber-500/10 text-rose-500">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-slate-900 dark:text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {p.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
