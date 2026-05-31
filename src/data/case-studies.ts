export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  challenge: string;
  approach: string[];
  outcome: string;
  metrics: { label: string; value: string }[];
  tools: string[];
  duration: string;
  accent: "electric" | "purple" | "green";
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "real-estate-3x-bookings",
    title: "How a Real Estate Brokerage 3x'd Booked Viewings in 60 Days",
    client: "Realside Properties",
    industry: "Real Estate",
    summary:
      "Replaced manual lead handling with a GHL + WhatsApp AI follow-up engine — sub-60-second response time and 3.2x more booked viewings.",
    challenge:
      "Agents were responding to Facebook leads 4+ hours late, and no nurture happened after the first message. Most leads went cold.",
    approach: [
      "Audited the existing CRM and ad funnel",
      "Designed a 14-day cross-channel follow-up cadence",
      "Built an AI WhatsApp qualifier and round-robin assignment",
      "Set up reporting dashboards for the broker",
    ],
    outcome:
      "Within 60 days, response time dropped to under a minute and booked viewings tripled. Cost per booked appointment fell 41%.",
    metrics: [
      { label: "Response Time", value: "4 hrs → <60s" },
      { label: "Booked Viewings", value: "+220%" },
      { label: "Cost / Booking", value: "-41%" },
    ],
    tools: ["GoHighLevel", "n8n", "OpenAI", "WhatsApp API", "Twilio"],
    duration: "6 weeks",
    accent: "electric",
  },
  {
    slug: "webinar-funnel-5x-revenue",
    title: "5x Webinar Revenue with a Smart Reminder + AI Replay System",
    client: "Beacon Coaching",
    industry: "Coaching / Education",
    summary:
      "Rebuilt the webinar funnel and added an AI-driven replay sequence. Show-up rate jumped from 12% to 41% and revenue per launch grew 5x.",
    challenge:
      "Webinars were the main acquisition channel but show-up was only 12% and replays barely converted. Manual follow-up was inconsistent.",
    approach: [
      "Rebuilt registration with VSL + social proof",
      "6-step reminder sequence across email, SMS, WhatsApp",
      "AI-personalized replay follow-up emails",
      "High-ticket application funnel post-webinar",
    ],
    outcome:
      "Show-up rate went from 12% to 41%, applications grew 4.5x, and one launch produced 5x the revenue of the previous best.",
    metrics: [
      { label: "Show-Up Rate", value: "12% → 41%" },
      { label: "Applications", value: "+350%" },
      { label: "Revenue / Launch", value: "+5x" },
    ],
    tools: ["GoHighLevel", "Resend", "Twilio", "Stripe"],
    duration: "5 weeks",
    accent: "purple",
  },
  {
    slug: "whatsapp-ai-saves-20hrs",
    title: "WhatsApp AI Saves an Agency 20+ Hours/Week",
    client: "Ledgerline B2B",
    industry: "B2B Services",
    summary:
      "A custom WhatsApp AI agent + n8n pipeline qualified leads, booked calls and tagged contacts in GHL — saving 20 hours/week and lifting SQLs 60%.",
    challenge:
      "Inbound leads on WhatsApp consumed half of an account manager's day. Hot leads were being missed.",
    approach: [
      "Designed qualification logic with sales leadership",
      "Built an OpenAI-powered WhatsApp agent in n8n",
      "Integrated Calendly and GoHighLevel",
      "Slack alerts for hot leads only",
    ],
    outcome:
      "20+ hours/week saved, 60% more SQLs, and an 8-second average reply time.",
    metrics: [
      { label: "Time Saved", value: "20 hrs/wk" },
      { label: "Qualified Leads", value: "+60%" },
      { label: "Avg Reply", value: "8s" },
    ],
    tools: ["OpenAI", "n8n", "WhatsApp API", "GoHighLevel", "Slack"],
    duration: "4 weeks",
    accent: "green",
  },
  {
    slug: "dental-ai-voice-receptionist",
    title: "AI Voice Receptionist Adds $18k/mo to a Dental Clinic",
    client: "Bloom Dental",
    industry: "Healthcare",
    summary:
      "Deployed an AI voice agent to answer after-hours calls and book appointments. 92% call capture, $18k extra monthly bookings.",
    challenge:
      "35% of after-hours calls went unanswered, sending high-value patients to competing clinics.",
    approach: [
      "Mapped call types and emergency rules",
      "Built a VAPI agent with custom prompts and guardrails",
      "Integrated GHL calendar and SMS confirmations",
      "Forwarded emergencies to on-call dentist",
    ],
    outcome:
      "92% of after-hours calls captured. Roughly $18,000 in extra monthly bookings, with no extra staff.",
    metrics: [
      { label: "Calls Captured", value: "92%" },
      { label: "Extra Revenue", value: "$18k/mo" },
      { label: "Setup", value: "8 days" },
    ],
    tools: ["VAPI", "OpenAI", "GoHighLevel", "Twilio"],
    duration: "8 days",
    accent: "purple",
  },
];
