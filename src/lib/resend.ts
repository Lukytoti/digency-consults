import { Resend } from "resend";

let _resend: Resend | null = null;

export function getResend(): Resend | null {
  if (_resend) return _resend;
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  _resend = new Resend(key);
  return _resend;
}

export const FROM =
  process.env.RESEND_FROM_EMAIL ?? "Digency Consults <hello@digencyconsults.com>";
export const TO = process.env.CONTACT_TO_EMAIL ?? "hello@digencyconsults.com";
