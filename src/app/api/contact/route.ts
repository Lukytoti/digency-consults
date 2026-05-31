import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validators";
import { getSupabaseAdmin } from "@/lib/supabase";
import { forwardLeadToCRM } from "@/lib/webhook";
import { getResend, FROM, TO } from "@/lib/resend";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const parsed = contactSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid input" },
        { status: 400 }
      );
    }
    const data = parsed.data;
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      req.headers.get("x-real-ip") ??
      null;

    // 1. Save to Supabase if configured
    const supabase = getSupabaseAdmin();
    if (supabase) {
      const { error } = await supabase.from("leads").insert({
        name: data.name,
        email: data.email,
        company: data.company || null,
        phone: data.phone || null,
        service: data.service || null,
        budget: data.budget || null,
        message: data.message,
        source: data.source || "contact_form",
        ip,
        user_agent: req.headers.get("user-agent") ?? null,
      });
      if (error) console.error("[contact] supabase insert error", error);
    }

    // 2. Forward to n8n / GoHighLevel webhook
    await forwardLeadToCRM({ ...data, ip });

    // 3. Send notification email via Resend
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
          replyTo: data.email,
          subject: `New lead: ${data.name} - ${data.service || "General"}`,
          html: `
            <h2>New lead from digencyconsults.com</h2>
            <ul>
              <li><strong>Name:</strong> ${escape(data.name)}</li>
              <li><strong>Email:</strong> ${escape(data.email)}</li>
              <li><strong>Phone:</strong> ${escape(data.phone ?? "")}</li>
              <li><strong>Service needed:</strong> ${escape(data.service ?? "")}</li>
              <li><strong>Budget:</strong> ${escape(data.budget ?? "")}</li>
              <li><strong>Source page:</strong> ${escape(data.source ?? "")}</li>
              <li><strong>Date/time submitted:</strong> ${submittedAt}</li>
            </ul>
            <p><strong>Message:</strong></p>
            <p>${escape(data.message).replace(/\n/g, "<br/>")}</p>
          `,
        });

        // Confirmation to the prospect
        await resend.emails.send({
          from: FROM,
          to: data.email,
          subject: "Thanks — I'll reply within 24 hours",
          html: `
            <p>Hey ${escape(data.name.split(" ")[0])},</p>
            <p>Thanks for reaching out to Digency Consults. I personally read every message and reply within 24 hours, usually faster.</p>
            <p>While you wait, you can grab a strategy slot directly here:<br/>
            <a href="${process.env.NEXT_PUBLIC_CALENDAR_URL ?? "#"}">Book a Strategy Call</a></p>
            <p>— Tobi<br/>AI &amp; CRM Infrastructure Engineer</p>
          `,
        });
      } catch (err) {
        console.error("[contact] resend error", err);
      }
    } else {
      console.warn("[contact] RESEND_API_KEY not set, skipping notification email");
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] error", err);
    return NextResponse.json(
      { error: "Server error. Please try again." },
      { status: 500 }
    );
  }
}

function escape(s: string) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
