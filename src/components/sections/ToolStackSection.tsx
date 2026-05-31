import { tools } from "@/data/tools";
import { cn } from "@/lib/utils";

export function ToolStackSection({
  title = "The stack I build with",
  subtitle = "Trusted tools I deploy daily for clients across coaching, real estate, SaaS and B2B.",
  className,
}: {
  title?: string;
  subtitle?: string;
  className?: string;
}) {
  // Duplicate for seamless marquee
  const list = [...tools, ...tools];

  return (
    <section className={cn("py-16 md:py-20", className)}>
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">Trusted tools</p>
          <h2 className="mt-4 section-title text-slate-900 dark:text-white">
            {title}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">{subtitle}</p>
        </div>

        <div className="relative mt-10 overflow-hidden mask-fade-x">
          <div className="flex gap-3 animate-marquee whitespace-nowrap">
            {list.map((t, idx) => (
              <div
                key={`${t.name}-${idx}`}
                className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200"
              >
                <span className="h-2 w-2 rounded-full bg-gradient-to-br from-electric to-neon-purple" />
                {t.name}
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  · {t.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
