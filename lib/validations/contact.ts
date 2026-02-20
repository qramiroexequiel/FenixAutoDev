import { z } from "zod";

/** Rubros permitidos (whitelist para evitar inyección) */
export const RUBRO_OPTIONS = [
  "",
  "Salud & Clínicas",
  "Industria & PyMEs",
  "Comercio & Retail",
  "Servicios Profesionales",
  "Logística & Distribución",
  "Otro",
] as const;

/** Schema Zod para el formulario de contacto (validación cliente y servidor) */
export const contactFormSchema = z.object({
  nombre: z
    .string()
    .min(1, "El nombre es obligatorio")
    .transform((s) => s.trim())
    .pipe(z.string().min(2, "El nombre debe tener al menos 2 caracteres"))
    .pipe(z.string().max(120, "Nombre demasiado largo")),
  empresa: z
    .string()
    .transform((s) => (s ?? "").trim())
    .pipe(z.string().max(200).optional())
    .default(""),
  problema: z
    .string()
    .min(1, "Describí tu desafío técnico")
    .transform((s) => s.trim())
    .pipe(z.string().min(10, "Al menos 10 caracteres para el mensaje"))
    .pipe(z.string().max(3000, "Mensaje demasiado largo")),
  rubro: z.string().max(80).refine((v) => RUBRO_OPTIONS.includes(v as (typeof RUBRO_OPTIONS)[number]), { message: "Rubro no válido" }).default(""),
  contacto: z
    .string()
    .min(1, "El contacto es obligatorio")
    .transform((s) => s.trim())
    .pipe(
      z.string().refine(
        (val) => {
          if (val.includes("@")) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
          }
          return val.length >= 8 && /^[\d\s+()-]+$/.test(val);
        },
        { message: "Email o WhatsApp (mín. 8 caracteres) válido" }
      )
    )
    .pipe(z.string().max(120)),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Sanitiza texto para evitar XSS: elimina/escapa caracteres peligrosos.
 * Usar antes de mostrar en HTML o guardar.
 */
function stripHtmlAndControlChars(value: string): string {
  return value
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "") // control chars
    .replace(/<[^>]*>/g, "") // tags HTML
    .replace(/javascript:/gi, "")
    .replace(/on\w+=/gi, "")
    .trim();
}

/**
 * Escapa HTML para inserción segura en contenido (ej. email body).
 */
export function escapeHtml(s: string): string {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Sanitiza y recorta campos para el payload del formulario.
 * Aplica después de Zod parse para defensa en profundidad.
 */
const RUBRO_SET = new Set(RUBRO_OPTIONS);

export function sanitizeContactPayload(
  data: ContactFormData
): ContactFormData {
  return {
    nombre: stripHtmlAndControlChars(data.nombre).slice(0, 120),
    empresa: stripHtmlAndControlChars(data.empresa ?? "").slice(0, 200),
    problema: stripHtmlAndControlChars(data.problema).slice(0, 3000),
    rubro: RUBRO_SET.has(data.rubro as (typeof RUBRO_OPTIONS)[number]) ? data.rubro : "",
    contacto: stripHtmlAndControlChars(data.contacto).slice(0, 120),
  };
}
