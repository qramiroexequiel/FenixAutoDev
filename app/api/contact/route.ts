import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  contactFormSchema,
  sanitizeContactPayload,
  escapeHtml,
} from "@/lib/validations/contact";

const TO_EMAIL = "fenixautodev@gmail.com";
const FROM_EMAIL =
  process.env.RESEND_FROM || "Fénix AutoDev <onboarding@resend.dev>";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY no configurada en .env.local");
    return NextResponse.json(
      { error: "Servicio de email no configurado" },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      const first = parsed.error.flatten().fieldErrors;
      const msg =
        first.nombre?.[0] ??
        first.problema?.[0] ??
        first.contacto?.[0] ??
        "Datos del formulario inválidos.";
      return NextResponse.json({ error: msg }, { status: 400 });
    }

    const data = sanitizeContactPayload(parsed.data);
    const { nombre, empresa, problema, rubro, contacto } = data;

    const subject = `NUEVO LEAD: [${escapeHtml(nombre)}] - Fénix AutoDev`;
    const n = escapeHtml(nombre);
    const e = escapeHtml(empresa || "—");
    const p = escapeHtml(problema);
    const r = escapeHtml(rubro || "—");
    const c = escapeHtml(contacto);

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="color-scheme" content="dark">
  <style>
    body { font-family: system-ui, sans-serif; line-height: 1.6; color: #e2e8f0; background: #020817; max-width: 600px; margin: 0 auto; padding: 24px; }
    h1 { color: #f97316; font-size: 1.25rem; margin-bottom: 20px; }
    .field { margin-bottom: 16px; padding: 12px; background: #0f172a; border-radius: 8px; border-left: 3px solid #f97316; }
    .label { font-weight: 600; color: #f97316; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
    .value { color: #e2e8f0; }
    .footer { margin-top: 24px; font-size: 0.75rem; color: #94a3b8; }
  </style>
</head>
<body>
  <h1>NUEVO LEAD desde fenixautodev.com</h1>
  
  <div class="field">
    <div class="label">Nombre</div>
    <div class="value">${n}</div>
  </div>
  
  <div class="field">
    <div class="label">Email / Contacto</div>
    <div class="value">${c}</div>
  </div>
  
  <div class="field">
    <div class="label">Empresa</div>
    <div class="value">${e}</div>
  </div>
  
  <div class="field">
    <div class="label">Servicio solicitado</div>
    <div class="value">${r}</div>
  </div>
  
  <div class="field">
    <div class="label">Mensaje</div>
    <div class="value">${p}</div>
  </div>
  
  <p class="footer">Enviado desde el formulario de contacto de Fénix AutoDev.</p>
</body>
</html>
    `.trim();

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}
