import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "@/components/cards/TestimonialCard";

export function TestimonialsSection({ limit }: { limit?: number }) {
  const list = limit ? testimonials.slice(0, limit) : testimonials;
  return (
    <section className="py-16 md:py-20 relative">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-electric">
            What clients say
          </p>
          <h2 className="mt-3 font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Operators trust me with their CRMs, funnels and AI infrastructure.
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Results-focused feedback from the founders, agencies and operators
            I&apos;ve worked with on LinkedIn, Fiverr, Upwork and direct
            engagements.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
