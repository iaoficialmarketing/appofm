import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  instagram?: string;
  age: string;
  experience: string;
  message?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const formData: ContactFormData = await req.json();

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const experienceLabels: Record<string, string> = {
      "sin-experiencia": "Sin experiencia",
      "menos-6-meses": "Menos de 6 meses",
      "6-12-meses": "6-12 meses",
      "mas-1-año": "Más de 1 año",
    };

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #0f172a; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background-color: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #0f172a; margin-bottom: 5px; }
            .value { color: #475569; }
            .footer { text-align: center; margin-top: 20px; color: #94a3b8; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📧 Nueva Solicitud de Contacto</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Nombre:</div>
                <div class="value">${formData.name}</div>
              </div>

              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${formData.email}</div>
              </div>

              ${formData.phone ? `
              <div class="field">
                <div class="label">Teléfono:</div>
                <div class="value">${formData.phone}</div>
              </div>
              ` : ''}

              ${formData.instagram ? `
              <div class="field">
                <div class="label">Instagram / Redes:</div>
                <div class="value">${formData.instagram}</div>
              </div>
              ` : ''}

              <div class="field">
                <div class="label">Edad:</div>
                <div class="value">${formData.age} años</div>
              </div>

              <div class="field">
                <div class="label">Experiencia en OnlyFans:</div>
                <div class="value">${experienceLabels[formData.experience] || formData.experience}</div>
              </div>

              ${formData.message ? `
              <div class="field">
                <div class="label">Mensaje:</div>
                <div class="value">${formData.message}</div>
              </div>
              ` : ''}
            </div>
            <div class="footer">
              <p>Este correo fue enviado desde el formulario de contacto de myonlyfxns.es</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "myonlyfxns <onboarding@resend.dev>",
        to: ["agenciaonlyfxns@gmail.com"],
        subject: `Nueva Solicitud de ${formData.name}`,
        html: emailHtml,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      throw new Error(`Error sending email: ${error}`);
    }

    const data = await res.json();

    return new Response(
      JSON.stringify({ success: true, messageId: data.id }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error"
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
