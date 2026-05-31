import { Quote, Star } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const initials = testimonial.name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");

  return (
    <article className="relative h-full rounded-2xl glass-card p-6 transition hover:-translate-y-1 hover:shadow-glow">
      <Quote className="h-6 w-6 text-electric/40" />
      <p className="mt-4 text-slate-700 dark:text-slate-200 leading-relaxed">
        “{testimonial.quote}”
      </p>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-electric to-neon-purple text-white text-sm font-bold inline-flex items-center justify-center">
            {initials}
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              {testimonial.name}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center text-amber-500">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-current" />
            ))}
          </div>
          <span className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
            via {testimonial.source}
          </span>
        </div>
      </div>
    </article>
  );
}
