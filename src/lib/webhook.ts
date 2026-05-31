/**
 * Forwards lead data to a downstream webhook (n8n, GoHighLevel, Make, Zapier).
 *
 * Configure with:
 *   LEAD_WEBHOOK_URL    – the inbound webhook URL of your n8n / GHL workflow
 *   LEAD_WEBHOOK_SECRET – optional shared secret sent as `x-webhook-secret`
 *
 * Fails silently in development so missing config doesn't break the form.
 */
export async function forwardLeadToCRM(payload: Record<string, unknown>) {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) {
    console.warn("[webhook] LEAD_WEBHOOK_URL not configured — skipping");
    return { ok: false, skipped: true };
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.LEAD_WEBHOOK_SECRET
          ? { "x-webhook-secret": process.env.LEAD_WEBHOOK_SECRET }
          : {}),
      },
      body: JSON.stringify({
        ...payload,
        forwarded_at: new Date().toISOString(),
        source_app: "digency-consults-website",
      }),
    });

    if (!res.ok) {
      console.error("[webhook] non-200 from CRM webhook:", res.status);
      return { ok: false, status: res.status };
    }
    return { ok: true };
  } catch (err) {
    console.error("[webhook] forwardLeadToCRM failed", err);
    return { ok: false, error: (err as Error).message };
  }
}

/**
 * Placeholder for SMS sending via Twilio or GoHighLevel.
 * Drop in real credentials and uncomment fetch calls in production.
 */
export async function sendSMSPlaceholder(to: string, body: string) {
  // Twilio example (uncomment + add creds)
  // const sid = process.env.TWILIO_ACCOUNT_SID;
  // const token = process.env.TWILIO_AUTH_TOKEN;
  // const from = process.env.TWILIO_FROM_NUMBER;
  // if (!sid || !token || !from) return { ok: false, skipped: true };
  // const url = `https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`;
  // const auth = Buffer.from(`${sid}:${token}`).toString("base64");
  // const params = new URLSearchParams({ From: from, To: to, Body: body });
  // const res = await fetch(url, {
  //   method: "POST",
  //   headers: {
  //     Authorization: `Basic ${auth}`,
  //     "Content-Type": "application/x-www-form-urlencoded",
  //   },
  //   body: params.toString(),
  // });
  // return { ok: res.ok };

  console.info("[sms] placeholder send", { to, body });
  return { ok: true, placeholder: true };
}
