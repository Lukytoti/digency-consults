export type SocialProofCard = {
  type: "post" | "review" | "stat" | "cert";
  title: string;
  body: string;
  meta?: string;
  source?: string;
};

export const linkedInPosts: SocialProofCard[] = [
  {
    type: "post",
    title: "Why most agencies fail at GoHighLevel (and how to actually win)",
    body:
      "Most agencies sell GHL like it's just another CRM. It's not. It's an infrastructure platform. Here are 5 things you have to get right before you ever launch a snapshot…",
    meta: "1.2k impressions • 84 reactions",
    source: "LinkedIn",
  },
  {
    type: "post",
    title: "The 8-second WhatsApp AI agent that qualifies my client's leads",
    body:
      "Built this last week with OpenAI + n8n + WhatsApp Business API. Average reply time: 8 seconds. SQLs up 60% in 14 days. Here's the architecture…",
    meta: "2.4k impressions • 137 reactions",
    source: "LinkedIn",
  },
  {
    type: "post",
    title: "AI voice agents are a $20k/mo unlock for local businesses",
    body:
      "Deployed a VAPI agent for a dental clinic last month. They were missing 35% of after-hours calls. Now they capture 92% of them. That's $18k extra MRR…",
    meta: "3.1k impressions • 211 reactions",
    source: "LinkedIn",
  },
  {
    type: "post",
    title: "Stop selling funnels. Start selling systems.",
    body:
      "A funnel is a tactic. A system is infrastructure. Here's how I reframed my offer and 3x'd my close rate without changing a single deliverable…",
    meta: "1.8k impressions • 96 reactions",
    source: "LinkedIn",
  },
];

export const proofStats: SocialProofCard[] = [
  {
    type: "stat",
    title: "40+",
    body: "LinkedIn posts on AI, CRM and automation",
  },
  {
    type: "stat",
    title: "190+",
    body: "LinkedIn followers and growing weekly",
  },
  {
    type: "stat",
    title: "20+",
    body: "Client projects shipped across 3 continents",
  },
  {
    type: "stat",
    title: "8+",
    body: "AI voice & WhatsApp agents in production",
  },
];

export const certifications: SocialProofCard[] = [
  {
    type: "cert",
    title: "GoHighLevel Certified Admin",
    body: "Hands-on certification across pipelines, workflows, calendars and payments.",
  },
  {
    type: "cert",
    title: "n8n Workflow Engineer",
    body: "Production deployments running 100k+ executions / month.",
  },
  {
    type: "cert",
    title: "OpenAI API Builder",
    body: "Custom GPTs, function calling, and agentic workflows.",
  },
  {
    type: "cert",
    title: "Meta WhatsApp Business API",
    body: "Verified API integrations with template approvals and AI flows.",
  },
];

export const proofReviews: SocialProofCard[] = [
  {
    type: "review",
    title: "5.0 ★ — Fiverr",
    body: "“Tobi over-delivered. Our GHL is finally usable, and the AI WhatsApp flow paid for itself in 2 weeks.”",
    source: "Fiverr Buyer",
  },
  {
    type: "review",
    title: "5.0 ★ — Upwork",
    body: "“Production-grade n8n work. Documented, tested and bulletproof. Hired him for one project, kept him on retainer.”",
    source: "Upwork Client",
  },
  {
    type: "review",
    title: "5.0 ★ — Direct",
    body: "“Tobi rebuilt our entire CRM and follow-up. We went from chasing leads to closing them on autopilot.”",
    source: "Realside Properties",
  },
  {
    type: "review",
    title: "5.0 ★ — LinkedIn",
    body: "“Most automation guys talk. Tobi ships. The dashboards alone are worth the engagement.”",
    source: "Northwind SaaS",
  },
];
