import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface IconProps {
  className?: string;
}

// ─── GoHighLevel Logo (uses uploaded SVG) ────────────────────────────────────
function GHLIcon({ className }: IconProps) {
  return (
    <img
      src="/logos/ghl-logo.svg"
      alt="GoHighLevel"
      className={cn("h-6 w-6 object-contain", className)}
      aria-hidden="true"
    />
  );
}

// ─── GoHighLevel Workflow (uses same GHL logo) ───────────────────────────────
function GHLWorkflowIcon({ className }: IconProps) {
  return (
    <img
      src="/logos/ghl-logo.svg"
      alt="GoHighLevel Workflow"
      className={cn("h-6 w-6 object-contain", className)}
      aria-hidden="true"
    />
  );
}

// ─── n8n Logo (uses uploaded SVG) ────────────────────────────────────────────
function N8nIcon({ className }: IconProps) {
  return (
    <img
      src="/logos/n8n-logo.svg"
      alt="n8n"
      className={cn("h-6 w-6 object-contain", className)}
      aria-hidden="true"
    />
  );
}

// ─── AI Voice / Phone Agent ──────────────────────────────────────────────────
function VoiceAgentIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("h-6 w-6", className)}>
      <rect width="40" height="40" rx="8" fill="#6366F1" />
      <rect x="17" y="11" width="6" height="10" rx="3" fill="white" />
      <path d="M14 19a6 6 0 0012 0" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 25v4M17 29h6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 17a2 2 0 010 4M30 17a2 2 0 000 4" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <path d="M7 15a3 3 0 010 8M33 15a3 3 0 000 8" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}

// ─── WhatsApp Logo (uses uploaded SVG) ───────────────────────────────────────
function WhatsAppServiceIcon({ className }: IconProps) {
  return (
    <img
      src="/logos/whatsapp-logo.svg"
      alt="WhatsApp"
      className={cn("h-6 w-6 object-contain", className)}
      aria-hidden="true"
    />
  );
}

// ─── Sales Funnel ────────────────────────────────────────────────────────────
function FunnelIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("h-6 w-6", className)}>
      <rect width="40" height="40" rx="8" fill="#F59E0B" />
      <path d="M8 11h24l-6 9v8l-6 3v-11L8 11z" fill="white" fillOpacity="0.9" />
      <path d="M10 14h20M13 18h14M16 22h8" stroke="#F59E0B" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <path d="M20 8v3" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

// ─── Website / Browser ───────────────────────────────────────────────────────
function WebsiteIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("h-6 w-6", className)}>
      <rect width="40" height="40" rx="8" fill="#3B82F6" />
      <rect x="7" y="11" width="26" height="18" rx="3" fill="white" />
      <rect x="7" y="11" width="26" height="5" rx="3" fill="white" />
      <path d="M7 16h26" stroke="#3B82F6" strokeWidth="0.5" opacity="0.3" />
      <circle cx="11" cy="13.5" r="1" fill="#FF5F57" />
      <circle cx="14.5" cy="13.5" r="1" fill="#FFBD2E" />
      <circle cx="18" cy="13.5" r="1" fill="#28CA41" />
      <rect x="10" y="19" width="10" height="2" rx="1" fill="#3B82F6" opacity="0.6" />
      <rect x="10" y="23" width="7" height="1.5" rx="0.75" fill="#3B82F6" opacity="0.3" />
      <rect x="24" y="19" width="6" height="6" rx="1.5" fill="#3B82F6" opacity="0.2" />
    </svg>
  );
}

// ─── Email / Gmail-style ─────────────────────────────────────────────────────
function EmailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("h-6 w-6", className)}>
      <rect width="40" height="40" rx="8" fill="#EA4335" />
      <rect x="8" y="12" width="24" height="16" rx="3" fill="white" />
      <path d="M8 14l12 8 12-8" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 28l8-7M32 28l-8-7" stroke="#EA4335" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}

// ─── SMS / Message ───────────────────────────────────────────────────────────
function SMSIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("h-6 w-6", className)}>
      <rect width="40" height="40" rx="8" fill="#10B981" />
      <path d="M8 13a4 4 0 014-4h16a4 4 0 014 4v10a4 4 0 01-4 4H16l-5 4v-4a4 4 0 01-3-4V13z" fill="white" />
      <rect x="14" y="15" width="12" height="2" rx="1" fill="#10B981" opacity="0.6" />
      <rect x="14" y="19" width="8" height="2" rx="1" fill="#10B981" opacity="0.4" />
    </svg>
  );
}

// ─── Lead Generation / Target ────────────────────────────────────────────────
function LeadGenIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("h-6 w-6", className)}>
      <rect width="40" height="40" rx="8" fill="#8B5CF6" />
      <circle cx="20" cy="20" r="10" stroke="white" strokeWidth="2" fill="none" />
      <circle cx="20" cy="20" r="6" stroke="white" strokeWidth="1.5" fill="none" opacity="0.7" />
      <circle cx="20" cy="20" r="2.5" fill="white" />
      <path d="M28 12l-5 5M28 12h-4M28 12v4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Calendar / Appointment ──────────────────────────────────────────────────
function ServiceCalendarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("h-6 w-6", className)}>
      <rect width="40" height="40" rx="8" fill="#0EA5E9" />
      <rect x="9" y="12" width="22" height="18" rx="3" fill="white" />
      <rect x="9" y="12" width="22" height="6" rx="3" fill="white" />
      <path d="M9 18h22" stroke="#0EA5E9" strokeWidth="0.5" opacity="0.4" />
      <path d="M15 10v4M25 10v4" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 24l3 3 5-6" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="14" cy="22" r="1" fill="#0EA5E9" opacity="0.3" />
      <circle cx="26" cy="22" r="1" fill="#0EA5E9" opacity="0.3" />
    </svg>
  );
}

// ─── CRM / Database ──────────────────────────────────────────────────────────
function CRMIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("h-6 w-6", className)}>
      <rect width="40" height="40" rx="8" fill="#14B8A6" />
      <ellipse cx="20" cy="13" rx="9" ry="3" fill="white" />
      <path d="M11 13v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" stroke="white" strokeWidth="1.5" fill="none" />
      <path d="M11 19v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" stroke="white" strokeWidth="1.5" fill="none" />
      <ellipse cx="20" cy="19" rx="9" ry="3" fill="none" stroke="white" strokeWidth="0.75" opacity="0.4" />
      <circle cx="29" cy="27" r="5" fill="white" />
      <path d="M29 24v1M29 30v-1M26 27h1M32 27h-1M27 25l.7.7M31 29l-.7-.7M27 29l.7-.7M31 25l-.7.7" stroke="#14B8A6" strokeWidth="1" strokeLinecap="round" />
      <circle cx="29" cy="27" r="1.5" stroke="#14B8A6" strokeWidth="1" fill="none" />
    </svg>
  );
}

// ─── Default / Fallback ──────────────────────────────────────────────────────
function DefaultServiceIcon({ className }: IconProps) {
  return (
    <div className={cn("h-6 w-6 rounded-lg bg-gradient-to-br from-electric via-neon-purple to-neon-green flex items-center justify-center", className)}>
      <Sparkles className="h-3 w-3 text-white" />
    </div>
  );
}

// ─── ServiceIcon Component (safe for server + client components) ─────────────
export function ServiceIcon({ slug, className }: { slug: string; className?: string }) {
  switch (slug) {
    case "gohighlevel-crm-setup":
      return <GHLIcon className={className} />;
    case "ghl-workflow-automation":
      return <GHLWorkflowIcon className={className} />;
    case "n8n-automation":
      return <N8nIcon className={className} />;
    case "ai-voice-agent":
      return <VoiceAgentIcon className={className} />;
    case "whatsapp-ai-agent":
      return <WhatsAppServiceIcon className={className} />;
    case "sales-funnel-design":
      return <FunnelIcon className={className} />;
    case "website-design":
      return <WebsiteIcon className={className} />;
    case "email-marketing-automation":
      return <EmailIcon className={className} />;
    case "sms-automation":
      return <SMSIcon className={className} />;
    case "lead-generation-systems":
      return <LeadGenIcon className={className} />;
    case "appointment-booking-automation":
      return <ServiceCalendarIcon className={className} />;
    case "crm-cleanup-optimization":
      return <CRMIcon className={className} />;
    default:
      return <DefaultServiceIcon className={className} />;
  }
}
