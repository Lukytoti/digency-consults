export type PricingTier = {
  name: string;
  tagline: string;
  price: string;
  cadence: string;
  highlight?: boolean;
  features: string[];
  cta: string;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter Sprint",
    tagline: "For founders that need ONE system fixed fast.",
    price: "$1,500",
    cadence: "one-time",
    features: [
      "1 funnel OR CRM workflow build",
      "GoHighLevel sub-account setup",
      "Up to 3 automations",
      "Basic email + SMS sequences",
      "1 strategy call + Loom walkthrough",
      "14-day support",
    ],
    cta: "Start Sprint",
  },
  {
    name: "Growth System",
    tagline: "Most popular — full CRM + automation infrastructure.",
    price: "$4,500",
    cadence: "one-time",
    highlight: true,
    features: [
      "Complete GHL build (pipelines, calendars, payments)",
      "Up to 12 multi-channel automations",
      "Sales funnel + website design",
      "Email + SMS + WhatsApp sequences",
      "AI voice OR WhatsApp agent",
      "Reporting dashboards",
      "30-day support + team training",
    ],
    cta: "Book Strategy Call",
  },
  {
    name: "Revenue Engine",
    tagline: "Done-for-you AI + CRM infrastructure for serious operators.",
    price: "From $2,500",
    cadence: "/ month",
    features: [
      "Everything in Growth System",
      "Ongoing optimization & A/B testing",
      "AI voice + WhatsApp + email agents",
      "Custom n8n integrations & dashboards",
      "Weekly reporting & strategy calls",
      "Priority Slack/WhatsApp support",
      "Conversion + retention sprints",
    ],
    cta: "Apply for Engine",
  },
];
