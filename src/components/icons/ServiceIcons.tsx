"use client";

import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
}

// ─── GoHighLevel Logo ────────────────────────────────────────────────────────
export function GHLIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-6", className)}
    >
      <rect width="40" height="40" rx="8" fill="#FF6B35" />
      <path
        d="M12 14h6v2h-4v3h3v2h-3v5h-2V14zm10 0h2v10h4v2h-6V14z"
        fill="white"
      />
      <path
        d="M20 28c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"
        stroke="white"
        strokeWidth="1.5"
        fill="none"
        opacity="0.3"
      />
    </svg>
  );
}

// ─── GoHighLevel Workflow ────────────────────────────────────────────────────
export function GHLWorkflowIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-6", className)}
    >
      <rect width="40" height="40" rx="8" fill="#FF6B35" />
      <circle cx="12" cy="14" r="3" fill="white" />
      <circle cx="28" cy="14" r="3" fill="white" />
      <circle cx="20" cy="26" r="3" fill="white" />
      <path
        d="M14.5 15.5L18 23.5M25.5 15.5L22 23.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 18v2a3 3 0 003 3h10a3 3 0 003-3v-2"
        stroke="white"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}

// ─── n8n Logo ────────────────────────────────────────────────────────────────
export function N8nIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-6", className)}
    >
      <rect width="40" height="40" rx="8" fill="#EA4B71" />
      <rect x="8" y="16" width="8" height="8" rx="2" fill="white" />
      <rect x="24" y="16" width="8" height="8" rx="2" fill="white" />
      <rect x="16" y="12" width="8" height="8" rx="2" fill="white" opacity="0.8" />
      <rect x="16" y="20" width="8" height="8" rx="2" fill="white" opacity="0.6" />
      <path d="M16 20h-4M24 20h-4" stroke="#EA4B71" strokeWidth="1.5" />
    </svg>
  );
}

// ─── AI Voice / Phone Agent ──────────────────────────────────────────────────
export function VoiceAgentIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-6", className)}
    >
      <rect width="40" height="40" rx="8" fill="#6366F1" />
      {/* Microphone */}
      <rect x="17" y="11" width="6" height="10" rx="3" fill="white" />
      <path
        d="M14 19a6 6 0 0012 0"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M20 25v4M17 29h6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      {/* Sound waves */}
      <path
        d="M10 17a2 2 0 010 4M30 17a2 2 0 000 4"
        stroke="white"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M7 15a3 3 0 010 8M33 15a3 3 0 000 8"
        stroke="white"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.3"
      />
    </svg>
  );
}

// ─── WhatsApp Logo ───────────────────────────────────────────────────────────
export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-6", className)}
    >
      <rect width="40" height="40" rx="8" fill="#25D366" />
      <path
        d="M20 9c-6.075 0-11 4.925-11 11 0 1.94.504 3.762 1.386 5.346L9 31l5.817-1.527A10.952 10.952 0 0020 31c6.075 0 11-4.925 11-11S26.075 9 20 9z"
        fill="white"
      />
      <path
        d="M16.5 14.5c-.3-.7-.6-.7-.9-.7h-.7c-.3 0-.7.1-1.1.5-.4.4-1.4 1.4-1.4 3.3s1.4 3.8 1.6 4.1c.2.3 2.8 4.3 6.8 6 4 1.7 4 1.1 4.7 1.1.7 0 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.1-.1-.4-.3-.8-.5s-2.3-1.1-2.7-1.3c-.4-.2-.6-.2-.9.2-.3.4-1.1 1.3-1.3 1.5-.2.2-.5.3-.9.1s-1.7-.6-3.2-2c-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.7.2-.3.3-.4.4-.7.1-.3.1-.5 0-.7-.2-.2-1-2.3-1.3-3.1z"
        fill="#25D366"
      />
    </svg>
  );
}

// ─── Sales Funnel ────────────────────────────────────────────────────────────
export function FunnelIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-6", className)}
    >
      <rect width="40" height="40" rx="8" fill="#F59E0B" />
      {/* Funnel shape */}
      <path
        d="M8 11h24l-6 9v8l-6 3v-11L8 11z"
        fill="white"
        fillOpacity="0.9"
      />
      {/* Funnel lines */}
      <path d="M10 14h20M13 18h14M16 22h8" stroke="#F59E0B" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      {/* Arrow coming in */}
      <path d="M20 8v3" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

// ─── Website / Browser ───────────────────────────────────────────────────────
export function WebsiteIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-6", className)}
    >
      <rect width="40" height="40" rx="8" fill="#3B82F6" />
      {/* Browser window */}
      <rect x="7" y="11" width="26" height="18" rx="3" fill="white" />
      {/* Title bar */}
      <rect x="7" y="11" width="26" height="5" rx="3" fill="white" />
      <path d="M7 16h26" stroke="#3B82F6" strokeWidth="0.5" opacity="0.3" />
      {/* Dots */}
      <circle cx="11" cy="13.5" r="1" fill="#FF5F57" />
      <circle cx="14.5" cy="13.5" r="1" fill="#FFBD2E" />
      <circle cx="18" cy="13.5" r="1" fill="#28CA41" />
      {/* Content blocks */}
      <rect x="10" y="19" width="10" height="2" rx="1" fill="#3B82F6" opacity="0.6" />
      <rect x="10" y="23" width="7" height="1.5" rx="0.75" fill="#3B82F6" opacity="0.3" />
      <rect x="24" y="19" width="6" height="6" rx="1.5" fill="#3B82F6" opacity="0.2" />
    </svg>
  );
}

// ─── Email / Gmail-style ─────────────────────────────────────────────────────
export function EmailIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-6", className)}
    >
      <rect width="40" height="40" rx="8" fill="#EA4335" />
      {/* Envelope */}
      <rect x="8" y="12" width="24" height="16" rx="3" fill="white" />
      {/* Letter V for envelope flap */}
      <path
        d="M8 14l12 8 12-8"
        stroke="#EA4335"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 28l8-7M32 28l-8-7"
        stroke="#EA4335"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.3"
      />
    </svg>
  );
}

// ─── SMS / Message ───────────────────────────────────────────────────────────
export function SMSIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-6", className)}
    >
      <rect width="40" height="40" rx="8" fill="#10B981" />
      {/* Chat bubble */}
      <path
        d="M8 13a4 4 0 014-4h16a4 4 0 014 4v10a4 4 0 01-4 4H16l-5 4v-4a4 4 0 01-3-4V13z"
        fill="white"
      />
      {/* SMS text */}
      <text
        x="20"
        y="20"
        textAnchor="middle"
        fontSize="8"
        fontWeight="bold"
        fill="#10B981"
        fontFamily="system-ui"
      >
        SMS
      </text>
    </svg>
  );
}

// ─── Lead Generation / Target ────────────────────────────────────────────────
export function LeadGenIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-6", className)}
    >
      <rect width="40" height="40" rx="8" fill="#8B5CF6" />
      {/* Target rings */}
      <circle cx="20" cy="20" r="10" stroke="white" strokeWidth="2" fill="none" />
      <circle cx="20" cy="20" r="6" stroke="white" strokeWidth="1.5" fill="none" opacity="0.7" />
      <circle cx="20" cy="20" r="2.5" fill="white" />
      {/* Arrow */}
      <path
        d="M28 12l-5 5M28 12h-4M28 12v4"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Calendar / Appointment ──────────────────────────────────────────────────
export function CalendarIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-6", className)}
    >
      <rect width="40" height="40" rx="8" fill="#0EA5E9" />
      {/* Calendar body */}
      <rect x="9" y="12" width="22" height="18" rx="3" fill="white" />
      {/* Header bar */}
      <rect x="9" y="12" width="22" height="6" rx="3" fill="white" />
      <path d="M9 18h22" stroke="#0EA5E9" strokeWidth="0.5" opacity="0.4" />
      {/* Calendar hooks */}
      <path d="M15 10v4M25 10v4" stroke="white" strokeWidth="2" strokeLinecap="round" />
      {/* Check mark */}
      <path
        d="M16 24l3 3 5-6"
        stroke="#0EA5E9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Dots for days */}
      <circle cx="14" cy="22" r="1" fill="#0EA5E9" opacity="0.3" />
      <circle cx="26" cy="22" r="1" fill="#0EA5E9" opacity="0.3" />
    </svg>
  );
}

// ─── CRM / Database ──────────────────────────────────────────────────────────
export function CRMIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-6", className)}
    >
      <rect width="40" height="40" rx="8" fill="#14B8A6" />
      {/* Database cylinders */}
      <ellipse cx="20" cy="13" rx="9" ry="3" fill="white" />
      <path d="M11 13v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" stroke="white" strokeWidth="1.5" fill="none" />
      <path d="M11 19v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" stroke="white" strokeWidth="1.5" fill="none" />
      <ellipse cx="20" cy="19" rx="9" ry="3" fill="none" stroke="white" strokeWidth="0.75" opacity="0.4" />
      {/* Gear overlay */}
      <circle cx="29" cy="27" r="5" fill="white" />
      <path
        d="M29 24v1M29 30v-1M26 27h1M32 27h-1M27 25l.7.7M31 29l-.7-.7M27 29l.7-.7M31 25l-.7.7"
        stroke="#14B8A6"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="29" cy="27" r="1.5" stroke="#14B8A6" strokeWidth="1" fill="none" />
    </svg>
  );
}

// ─── Icon Map ────────────────────────────────────────────────────────────────
export const serviceIconMap: Record<string, React.FC<IconProps>> = {
  "gohighlevel-crm-setup": GHLIcon,
  "ghl-workflow-automation": GHLWorkflowIcon,
  "n8n-automation": N8nIcon,
  "ai-voice-agent": VoiceAgentIcon,
  "whatsapp-ai-agent": WhatsAppIcon,
  "sales-funnel-design": FunnelIcon,
  "website-design": WebsiteIcon,
  "email-marketing-automation": EmailIcon,
  "sms-automation": SMSIcon,
  "lead-generation-systems": LeadGenIcon,
  "appointment-booking-automation": CalendarIcon,
  "crm-cleanup-optimization": CRMIcon,
};
