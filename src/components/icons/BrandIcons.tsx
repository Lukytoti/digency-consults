// Brand SVG icons for tools, social platforms, and other recognizable logos
// Used site-wide for consistent, professional iconography

interface IconProps {
  className?: string;
}

// ─── WhatsApp (official green) ───────────────────────────────────────────────
export function WhatsAppLogo({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ─── LinkedIn (official) ─────────────────────────────────────────────────────
export function LinkedInLogo({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// ─── Tool brand colors for marquee ───────────────────────────────────────────
export const toolBrandColors: Record<string, string> = {
  GoHighLevel: "#FF6B35",
  n8n: "#EA4B71",
  OpenAI: "#000000",
  Zapier: "#FF4A00",
  Make: "#6D00CC",
  VAPI: "#6366F1",
  Synthflow: "#8B5CF6",
  Bland: "#1E293B",
  Retell: "#3B82F6",
  Twilio: "#F22F46",
  "WhatsApp API": "#25D366",
  Resend: "#000000",
  Supabase: "#3ECF8E",
  "Next.js": "#000000",
  "Tailwind CSS": "#06B6D4",
  Vercel: "#000000",
  Stripe: "#635BFF",
  Calendly: "#006BFF",
  Notion: "#000000",
  Slack: "#4A154B",
  ClickUp: "#7B68EE",
  Airtable: "#18BFFF",
};

// Mini SVG tool logos (simplified for marquee pill use)
export function ToolLogo({ name, className = "h-4 w-4" }: { name: string; className?: string }) {
  const color = toolBrandColors[name] || "#64748b";
  
  switch (name) {
    case "GoHighLevel":
      return (
        <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
          <rect width="16" height="16" rx="3" fill={color} />
          <path d="M4 6h3v1h-2v2h1.5v1H5v2H4V6zm5 0h1v5h2v1H9V6z" fill="white" />
        </svg>
      );
    case "n8n":
      return (
        <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
          <rect width="16" height="16" rx="3" fill={color} />
          <rect x="3" y="6" width="3.5" height="3.5" rx="1" fill="white" />
          <rect x="9.5" y="6" width="3.5" height="3.5" rx="1" fill="white" />
          <path d="M6.5 7.75h3" stroke="white" strokeWidth="1" />
        </svg>
      );
    case "OpenAI":
      return (
        <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
          <rect width="16" height="16" rx="3" fill="#412991" />
          <circle cx="8" cy="8" r="4" stroke="white" strokeWidth="1.2" fill="none" />
          <path d="M8 4v4l2.8 1.6" stroke="white" strokeWidth="1" strokeLinecap="round" fill="none" />
        </svg>
      );
    case "Zapier":
      return (
        <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
          <rect width="16" height="16" rx="3" fill={color} />
          <path d="M8 4v8M4 8h8M5.2 5.2l5.6 5.6M10.8 5.2l-5.6 5.6" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
    case "Make":
      return (
        <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
          <rect width="16" height="16" rx="3" fill={color} />
          <circle cx="5.5" cy="8" r="2" fill="white" />
          <circle cx="10.5" cy="8" r="2" fill="white" />
          <path d="M7.5 8h1" stroke={color} strokeWidth="1" />
        </svg>
      );
    case "Twilio":
      return (
        <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
          <rect width="16" height="16" rx="3" fill={color} />
          <circle cx="8" cy="8" r="5" stroke="white" strokeWidth="1" fill="none" />
          <circle cx="6.5" cy="6.5" r="1" fill="white" />
          <circle cx="9.5" cy="6.5" r="1" fill="white" />
          <circle cx="6.5" cy="9.5" r="1" fill="white" />
          <circle cx="9.5" cy="9.5" r="1" fill="white" />
        </svg>
      );
    case "WhatsApp API":
      return (
        <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
          <rect width="16" height="16" rx="3" fill={color} />
          <path d="M8 3.5a4.5 4.5 0 00-3.9 6.7L3.5 12.5l2.4-.6A4.5 4.5 0 108 3.5z" fill="white" />
          <path d="M6.5 6.5c.5-.3 1-.1 1.2.3l.3.6c.1.2 0 .5-.2.6l-.3.2c.3.7.8 1.2 1.5 1.5l.2-.3c.1-.2.4-.3.6-.2l.6.3c.4.2.5.7.3 1.1-.4.5-1 .7-1.6.5-1.5-.5-2.8-1.8-3.3-3.3-.2-.6 0-1.2.5-1.6z" fill={color} />
        </svg>
      );
    case "Supabase":
      return (
        <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
          <rect width="16" height="16" rx="3" fill="#1C1C1C" />
          <path d="M8.5 12.5l-4-5.5h3.5V3.5l4 5.5H8.5v3.5z" fill={color} />
        </svg>
      );
    case "Next.js":
      return (
        <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
          <rect width="16" height="16" rx="3" fill={color} />
          <circle cx="8" cy="8" r="5" stroke="white" strokeWidth="0.8" fill="none" />
          <path d="M6 5v6l5-6" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M10 5v4" stroke="white" strokeWidth="1" strokeLinecap="round" />
        </svg>
      );
    case "Tailwind CSS":
      return (
        <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
          <rect width="16" height="16" rx="3" fill="#0F172A" />
          <path d="M4 8.5c.7-2.1 2-3 4-3 3 0 3.3 2.1 4.8 2.5 1 .3 1.8 0 2.2-.8-.7 2.1-2 3-4 3-3 0-3.3-2.1-4.8-2.5-1-.3-1.8 0-2.2.8z" fill={color} />
        </svg>
      );
    case "Vercel":
      return (
        <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
          <rect width="16" height="16" rx="3" fill={color} />
          <path d="M8 4l5 8H3z" fill="white" />
        </svg>
      );
    case "Stripe":
      return (
        <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
          <rect width="16" height="16" rx="3" fill={color} />
          <path d="M7.5 6.5c0-.5.4-.8 1.1-.8.8 0 1.7.3 2.4.7V4.5c-.8-.3-1.6-.5-2.4-.5-2 0-3.3 1-3.3 2.7 0 2.6 3.6 2.2 3.6 3.3 0 .6-.5.8-1.2.8-.9 0-2-.4-2.7-.9v1.9c.9.4 1.8.6 2.7.6 2 0 3.4-1 3.4-2.7 0-2.8-3.6-2.3-3.6-3.4z" fill="white" />
        </svg>
      );
    case "Calendly":
      return (
        <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
          <rect width="16" height="16" rx="3" fill={color} />
          <rect x="4" y="4.5" width="8" height="7.5" rx="1.5" stroke="white" strokeWidth="1" fill="none" />
          <path d="M6 3.5v2M10 3.5v2M4 7.5h8" stroke="white" strokeWidth="1" strokeLinecap="round" />
          <path d="M6.5 9.5l1.5 1.5 2-2.5" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );
    case "Slack":
      return (
        <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
          <rect width="16" height="16" rx="3" fill={color} />
          <path d="M6 4a1 1 0 110 2H5a1 1 0 010-2h1zm0 3a1 1 0 011 1v1a1 1 0 01-2 0V8a1 1 0 011-1zm4-3a1 1 0 011 1v1a1 1 0 01-2 0V5a1 1 0 011-1zm0 7a1 1 0 110-2h1a1 1 0 010 2h-1z" fill="white" />
        </svg>
      );
    default:
      // Generic tool icon with first letter
      return (
        <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
          <rect width="16" height="16" rx="3" fill={color} />
          <text x="8" y="11" textAnchor="middle" fontSize="8" fontWeight="bold" fill="white" fontFamily="system-ui">
            {name.charAt(0)}
          </text>
        </svg>
      );
  }
}
