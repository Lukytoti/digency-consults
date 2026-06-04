import { Resend } from "resend";

let _resend: Resend | null = null;

export function getResend(): Resend | null {
  if (_resend) return _resend;
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.warn("[resend] RESEND_API_KEY is not set — email sending disabled");
    return null;
  }
  _resend = new Resend(key);
  return _resend;
}

// FROM_EMAIL or RESEND_FROM_EMAIL (supports both naming conventions)
export const FROM =
  process.env.FROM_EMAIL ??
  process.env.RESEND_FROM_EMAIL ??
  "Digency Consults <lawrence.digenci@gmail.com>";

// NOTIFICATION_EMAIL or CONTACT_TO_EMAIL (supports both naming conventions)
export const TO =
  process.env.NOTIFICATION_EMAIL ??
  process.env.CONTACT_TO_EMAIL ??
  "lawrence.digenci@gmail.com";
