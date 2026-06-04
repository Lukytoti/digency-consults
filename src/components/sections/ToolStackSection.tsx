import { tools } from "@/data/tools";
import { ToolLogo } from "@/components/icons/BrandIcons";
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
                className="inline-flex items-center gap-2.5 rounded-full glass px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              >
                <ToolLogo name={t.name} className="h-4 w-4 shrink-0" />
                <span>{t.name}</span>
                <span className="text-[11px] text-slate-400 dark:text-slate-500">
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
