import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { forwardLeadToCRM } from "@/lib/webhook";
import { getResend, FROM, TO } from "@/lib/resend";

export const runtime = "nodejs";

/**
 * Generic lead-capture webhook.
 *
 * Use this from quizzes, lead magnets, ad form integrations or third-party
 * tools. POST any JSON; we'll persist it in Supabase and forward it to your
 * downstream n8n / GHL webhook.
 *
 * Optional protection: set `LEAD_WEBHOOK_SECRET` in env and pass it as
 * `x-webhook-secret` header.
 */
export async function POST(req: NextRequest) {
  const secret = process.env.LEAD_WEBHOOK_SECRET;
  if (secret && req.headers.get("x-webhook-secret") !== secret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let payload: Record<string, unknown> = {};
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  if (supabase) {
    const { error } = await supabase.from("leads").insert({
      name: (payload.name as string) ?? null,
      email: (payload.email as string) ?? null,
      phone: (payload.phone as string) ?? null,
      company: (payload.company as string) ?? null,
      service: (payload.service as string) ?? null,
      budget: (payload.budget as string) ?? null,
      message: (payload.message as string) ?? null,
      source: (payload.source as string) ?? "lead-webhook",
      raw: payload,
    });
    if (error) console.error("[lead-webhook] supabase insert error", error);
  }

  // Fan out to downstream CRM workflow
  await forwardLeadToCRM(payload);

  // Send notification email via Resend
  const resend = getResend();
  if (resend) {
    try {
      const submittedAt = new Date().toLocaleString("en-GB", {
        dateStyle: "full",
        timeStyle: "short",
      });
      await resend.emails.send({
        from: FROM,
        to: TO,
        subject: `New lead (webhook): ${(payload.name as string) || (payload.email as string) || "Unknown"}`,
        html: `
          <h2>New lead via webhook</h2>
          <ul>
            <li><strong>Name:</strong> ${escape(String(payload.name ?? ""))}</li>
            <li><strong>Email:</strong> ${escape(String(payload.email ?? ""))}</li>
            <li><strong>Phone:</strong> ${escape(String(payload.phone ?? ""))}</li>
            <li><strong>Service needed:</strong> ${escape(String(payload.service ?? ""))}</li>
            <li><strong>Budget:</strong> ${escape(String(payload.budget ?? ""))}</li>
            <li><strong>Message:</strong> ${escape(String(payload.message ?? ""))}</li>
            <li><strong>Source page:</strong> ${escape(String(payload.source ?? "lead-webhook"))}</li>
            <li><strong>Date/time submitted:</strong> ${submittedAt}</li>
          </ul>
        `,
      });
    } catch (err) {
      console.error("[lead-webhook] resend error", err);
    }
  } else {
    console.warn("[lead-webhook] RESEND_API_KEY not set, skipping notification email");
  }

  return NextResponse.json({ ok: true });
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    name: "Digency Consults Lead Webhook",
    methods: ["POST"],
  });
}

function escape(s: string) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
