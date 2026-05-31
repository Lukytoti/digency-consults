import { NextRequest, NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validators";
import { getSupabaseAdmin } from "@/lib/supabase";
import { forwardLeadToCRM } from "@/lib/webhook";

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

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[newsletter] error", err);
    return NextResponse.json(
      { error: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
