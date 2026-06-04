import { NextResponse } from "next/server";
import { getResend, FROM, TO } from "@/lib/resend";

export const runtime = "nodejs";

export async function GET() {
  const startTime = Date.now();

  // Log environment variable status
  console.log("[test-email] === Environment Check ===");
  console.log("[test-email] RESEND_API_KEY:", process.env.RESEND_API_KEY ? "✅ SET" : "❌ NOT SET");
  console.log("[test-email] FROM_EMAIL:", process.env.FROM_EMAIL ?? "(not set, using fallback)");
  console.log("[test-email] RESEND_FROM_EMAIL:", process.env.RESEND_FROM_EMAIL ?? "(not set)");
  console.log("[test-email] NOTIFICATION_EMAIL:", process.env.NOTIFICATION_EMAIL ?? "(not set, using fallback)");
  console.log("[test-email] CONTACT_TO_EMAIL:", process.env.CONTACT_TO_EMAIL ?? "(not set)");
  console.log("[test-email] Resolved FROM:", FROM);
  console.log("[test-email] Resolved TO:", TO);

  const resend = getResend();

  if (!resend) {
    console.error("[test-email] ❌ FAILED: Resend client is null — RESEND_API_KEY missing");
    return NextResponse.json(
      {
        success: false,
        error: "RESEND_API_KEY is not configured",
        env: {
          RESEND_API_KEY: process.env.RESEND_API_KEY ? "SET" : "NOT SET",
          FROM,
          TO,
        },
      },
      { status: 500 }
    );
  }

  try {
    const sentAt = new Date().toLocaleString("en-GB", {
      dateStyle: "full",
      timeStyle: "medium",
      timeZone: "Africa/Lagos",
    });

    const { data, error } = await resend.emails.send({
      from: FROM,
      to: "lawrence.digenci@gmail.com",
      subject: "✅ Digency Consults — Test Email Working",
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 30px; border-radius: 16px; text-align: center; margin-bottom: 30px;">
            <h1 style="color: white; font-size: 24px; margin: 0;">✅ Email System Working</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0;">Digency Consults</p>
          </div>
          
          <h2 style="color: #1e293b; font-size: 20px;">Test Email Successful</h2>
          <p style="color: #475569; line-height: 1.6;">This confirms that your Resend email integration is working correctly.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 8px 12px; border: 1px solid #e2e8f0; font-weight: 600; color: #334155;">FROM</td>
              <td style="padding: 8px 12px; border: 1px solid #e2e8f0; color: #64748b;">${FROM}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; border: 1px solid #e2e8f0; font-weight: 600; color: #334155;">TO</td>
              <td style="padding: 8px 12px; border: 1px solid #e2e8f0; color: #64748b;">lawrence.digenci@gmail.com</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; border: 1px solid #e2e8f0; font-weight: 600; color: #334155;">NOTIFICATION_EMAIL</td>
              <td style="padding: 8px 12px; border: 1px solid #e2e8f0; color: #64748b;">${TO}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; border: 1px solid #e2e8f0; font-weight: 600; color: #334155;">Sent at</td>
              <td style="padding: 8px 12px; border: 1px solid #e2e8f0; color: #64748b;">${sentAt}</td>
            </tr>
          </table>

          <h3 style="color: #1e293b; font-size: 16px; margin-top: 30px;">Forms that send emails:</h3>
          <ul style="color: #475569; line-height: 2;">
            <li><strong>Contact form</strong> → sends notification to you + confirmation to prospect</li>
            <li><strong>Newsletter form</strong> → sends notification to you</li>
          </ul>

          <p style="color: #94a3b8; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            This is an automated test from digencyconsults.com/api/test-email
          </p>
        </div>
      `,
    });

    const elapsed = Date.now() - startTime;

    if (error) {
      console.error("[test-email] ❌ Resend API error:", JSON.stringify(error));
      return NextResponse.json(
        {
          success: false,
          error: error.message ?? "Resend API returned an error",
          details: error,
          elapsed: `${elapsed}ms`,
        },
        { status: 500 }
      );
    }

    console.log(`[test-email] ✅ Email sent successfully in ${elapsed}ms — ID: ${data?.id}`);

    return NextResponse.json({
      success: true,
      message: "Test email sent successfully to lawrence.digenci@gmail.com",
      emailId: data?.id,
      elapsed: `${elapsed}ms`,
      config: {
        from: FROM,
        to: "lawrence.digenci@gmail.com",
        notificationEmail: TO,
        sentAt,
      },
      forms: {
        contact: "✅ Sends notification email + confirmation to prospect",
        newsletter: "✅ Sends notification email on new signup",
      },
    });
  } catch (err) {
    const elapsed = Date.now() - startTime;
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error(`[test-email] ❌ Unexpected error (${elapsed}ms):`, errorMessage);

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
        elapsed: `${elapsed}ms`,
      },
      { status: 500 }
    );
  }
}
