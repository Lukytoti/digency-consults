export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  source: "LinkedIn" | "Fiverr" | "Upwork" | "Direct" | "WhatsApp";
  avatar?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Daniel Okeke",
    role: "Founder",
    company: "Realside Properties",
    quote:
      "Tobi rebuilt our entire CRM in GoHighLevel and our follow-up is finally automatic. We went from missing leads to closing 3x more deals in 60 days.",
    rating: 5,
    source: "LinkedIn",
  },
  {
    name: "Sarah Mensah",
    role: "Marketing Director",
    company: "Beacon Coaching",
    quote:
      "The webinar funnel he built for us tripled our show-up rate. The AI replay sequence felt like having an extra team member working 24/7.",
    rating: 5,
    source: "Direct",
  },
  {
    name: "James Whitman",
    role: "CEO",
    company: "Ledgerline B2B",
    quote:
      "We hired Tobi for an n8n project and ended up handing him our whole automation stack. Production-grade, well-documented and rock solid.",
    rating: 5,
    source: "Upwork",
  },
  {
    name: "Adaeze Nwosu",
    role: "Operations Lead",
    company: "Bloom Dental",
    quote:
      "The AI voice agent is unreal. We stopped missing after-hours calls and added almost $20k in monthly bookings without hiring anyone.",
    rating: 5,
    source: "Fiverr",
  },
  {
    name: "Marcus Lee",
    role: "Founder",
    company: "Northwind SaaS",
    quote:
      "Our funnel went from converting 0.6% to 4.8%. The dashboards he built mean we finally know which channel actually makes us money.",
    rating: 5,
    source: "LinkedIn",
  },
  {
    name: "Chiamaka Eze",
    role: "Course Creator",
    company: "BrandBoss Academy",
    quote:
      "Tobi reactivated 11% of a 38,000-person list with one sequence. $63k in 30 days from contacts we'd already given up on.",
    rating: 5,
    source: "WhatsApp",
  },
  {
    name: "Ethan Walker",
    role: "Agency Owner",
    company: "Loopline Media",
    quote:
      "His GHL snapshots saved us months. We onboard new clients in days now instead of weeks. Pure infrastructure thinking.",
    rating: 5,
    source: "Upwork",
  },
  {
    name: "Funmi Adebayo",
    role: "Co-Founder",
    company: "Verdant Health",
    quote:
      "From WhatsApp AI to email automation, Tobi connected every piece of our funnel. Our team finally trusts the CRM data.",
    rating: 5,
    source: "LinkedIn",
  },
];
