import { Resend } from "npm:resend@4.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const NOTIFICATION_EMAIL = "d.jazmin223@gmail.com";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { name, contact, service, date, notes } = await req.json();

    if (!name || !contact || !service || !date) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    const resend = new Resend(resendApiKey);

    const formattedDate = new Date(date).toLocaleString("hu-HU", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/Budapest",
    });

    const html = `
      <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; background: #fdf9f8; padding: 40px; border-radius: 16px; border: 1px solid #f5d3cd;">
        <h1 style="color: #d27b6d; font-size: 24px; margin-bottom: 24px; font-family: Georgia, serif;">Új időpontfoglalás érkezett</h1>
        <div style="background: white; padding: 28px; border-radius: 12px; border: 1px solid #f5d3cd;">
          <table style="width: 100%; font-family: Arial, sans-serif; font-size: 14px; color: #2a2320;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #d27b6d; width: 120px;">Név:</td>
              <td style="padding: 8px 0;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #d27b6d;">Kapcsolat:</td>
              <td style="padding: 8px 0;">${escapeHtml(contact)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #d27b6d;">Szolgáltatás:</td>
              <td style="padding: 8px 0;">${escapeHtml(service)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #d27b6d;">Időpont:</td>
              <td style="padding: 8px 0;">${escapeHtml(formattedDate)}</td>
            </tr>
            ${notes ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #d27b6d; vertical-align: top;">Megjegyzés:</td>
              <td style="padding: 8px 0;">${escapeHtml(notes)}</td>
            </tr>
            ` : ""}
          </table>
        </div>
        <p style="font-family: Georgia, serif; color: #2a2320; font-size: 13px; margin-top: 24px; opacity: 0.6;">
          Bea Masszázsterápia — automatikus értesítés
        </p>
      </div>
    `;

    const { error: sendError } = await resend.emails.send({
      from: "Bea Masszázsterápia <onboarding@resend.dev>",
      to: [NOTIFICATION_EMAIL],
      subject: `Új időpontfoglalás — ${name} — ${formattedDate}`,
      html,
    });

    if (sendError) {
      return new Response(
        JSON.stringify({ error: "Failed to send email" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message || "Internal error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
