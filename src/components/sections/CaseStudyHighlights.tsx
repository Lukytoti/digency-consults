import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";

export function CaseStudyHighlights() {
  return (
    <section className="section relative">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Case study highlights</p>
            <h2 className="mt-4 section-title text-slate-900 dark:text-white text-balance">
              Receipts. Not promises.
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              A few recent engagements where AI + CRM infrastructure quietly
              moved real revenue numbers.
            </p>
          </div>
          <Link href="/case-studies" className="btn-outline self-start md:self-auto">
            All case studies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {caseStudies.slice(0, 4).map((c) => (
            <CaseStudyCard key={c.slug} caseStudy={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
