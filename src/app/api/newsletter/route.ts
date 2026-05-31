import { NextRequest, NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validators";
import { getSupabaseAdmin } from "@/lib/supabase";
import { forwardLeadToCRM } from "@/lib/webhook";
import { getResend, FROM, TO } from "@/lib/resend";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const parsed = newsletterSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid input" },
        { status: 400 }
      );
    }
    const data = parsed.data;

    const supabase = getSupabaseAdmin();
    if (supabase) {
      const { error } = await supabase.from("newsletter_subscribers").upsert(
        {
          email: data.email,
          source: data.source || "footer",
          subscribed_at: new Date().toISOString(),
        },
        { onConflict: "email" }
      );
      if (error) console.error("[newsletter] supabase insert error", error);
    }

    await forwardLeadToCRM({
      type: "newsletter_subscribe",
      email: data.email,
      source: data.source || "footer",
    });

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
          subject: `New newsletter signup: ${data.email}`,
          html: `
            <h2>New Newsletter Subscriber</h2>
            <ul>
              <li><strong>Email:</strong> ${escape(data.email)}</li>
              <li><strong>Source page:</strong> ${escape(data.source || "footer")}</li>
              <li><strong>Date/time submitted:</strong> ${submittedAt}</li>
            </ul>
          `,
        });
      } catch (err) {
        console.error("[newsletter] resend error", err);
      }
    } else {
      console.warn("[newsletter] RESEND_API_KEY not set, skipping notification email");
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[newsletter] error", err);
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
