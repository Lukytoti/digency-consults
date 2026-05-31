import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "@/components/cards/TestimonialCard";

export function TestimonialsSection({ limit }: { limit?: number }) {
  const list = limit ? testimonials.slice(0, limit) : testimonials;
  return (
    <section className="section relative bg-slate-50 dark:bg-navy-900/40">
      <div className="container">
        <div className="max-w-3xl">
          <p className="eyebrow">What clients say</p>
          <h2 className="mt-4 section-title text-slate-900 dark:text-white text-balance">
            Operators trust me with their CRMs, funnels and AI infrastructure.
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Results-focused feedback from the founders, agencies and operators
            I've worked with on LinkedIn, Fiverr, Upwork and direct
            engagements.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
