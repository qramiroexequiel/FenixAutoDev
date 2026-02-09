import { NextResponse } from "next/server";
import { Resend } from "resend";

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
    const { nombre, empresa, problema, rubro, contacto } = body;

    if (!nombre || !contacto) {
      return NextResponse.json(
        { error: "Nombre y contacto son obligatorios" },
        { status: 400 }
      );
    }

    const subject = `[NUEVO PROSPECTO] - Automatización solicitada por ${nombre}`;
    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: system-ui, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto; padding: 24px; }
    h1 { color: #F57C00; font-size: 1.25rem; margin-bottom: 20px; }
    .field { margin-bottom: 16px; padding: 12px; background: #f8fafc; border-radius: 8px; }
    .label { font-weight: 600; color: #64748b; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
    .value { color: #0f172a; }
    .footer { margin-top: 24px; font-size: 0.75rem; color: #94a3b8; }
  </style>
</head>
<body>
  <h1>🚀 Nuevo prospecto desde fenixautodev.com</h1>
  
  <div class="field">
    <div class="label">Nombre</div>
    <div class="value">${nombre}</div>
  </div>
  
  <div class="field">
    <div class="label">Empresa</div>
    <div class="value">${empresa || "—"}</div>
  </div>
  
  <div class="field">
    <div class="label">Problema / Caos que quiere resolver</div>
    <div class="value">${problema || "—"}</div>
  </div>
  
  <div class="field">
    <div class="label">Rubro</div>
    <div class="value">${rubro || "—"}</div>
  </div>
  
  <div class="field">
    <div class="label">Contacto (Email / Teléfono)</div>
    <div class="value">${contacto}</div>
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
