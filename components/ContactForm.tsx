"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const WHATSAPP_URL =
  "https://wa.me/5492216902614?text=Hola%20Fenix%20AutoDev,%20quisiera%20consultar%20por%20sus%20servicios.";

const RUBRO_OPTIONS = [
  "",
  "Salud & Clínicas",
  "Industria & PyMEs",
  "Comercio & Retail",
  "Servicios Profesionales",
  "Logística & Distribución",
  "Otro",
];

type FormStatus = "idle" | "sending" | "success" | "error";

const INPUT_STYLE =
  "flex min-h-[44px] h-11 w-full rounded-md border border-white/10 bg-[#020817] px-3 py-3 sm:py-2 text-base sm:text-sm text-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-500 focus-visible:shadow-[0_0_12px_rgba(249,115,22,0.25)] disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300";

/** Regex para validar formato de email */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Valida si el contacto parece email y tiene formato válido */
function isValidContacto(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;
  if (trimmed.includes("@")) {
    return EMAIL_REGEX.test(trimmed);
  }
  return trimmed.length >= 8;
}

/** Valida que nombre tenga al menos 2 caracteres */
function isValidNombre(value: string): boolean {
  return value.trim().length >= 2;
}

/** Valida que el mensaje tenga contenido */
function isValidProblema(value: string): boolean {
  return value.trim().length >= 10;
}

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    problema: "",
    rubro: "",
    contacto: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!isValidNombre(formData.nombre)) {
      setErrorMessage("El nombre debe tener al menos 2 caracteres.");
      setStatus("error");
      return;
    }
    if (!isValidProblema(formData.problema)) {
      setErrorMessage("Describí tu desafío técnico con al menos 10 caracteres.");
      setStatus("error");
      return;
    }
    if (!isValidContacto(formData.contacto)) {
      setErrorMessage(
        formData.contacto.includes("@")
          ? "Ingresá un email válido (ej: nombre@empresa.com)."
          : "Ingresá un email o WhatsApp válido para contacto."
      );
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const apiUrl =
        process.env.NEXT_PUBLIC_CONTACT_API_URL || "/api/contact";

      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Error al enviar");
      }

      setStatus("success");
      setFormData({
        nombre: "",
        empresa: "",
        problema: "",
        rubro: "",
        contacto: "",
      });
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Error de conexión. Intentá de nuevo."
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 sm:p-12 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/20 mb-6"
        >
          <CheckCircle2 className="w-8 h-8 text-orange-500" />
        </motion.div>
        <h3 className="text-xl font-bold text-orange-500 mb-2">
          ¡Mensaje enviado con éxito!
        </h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-slate-200"
        >
          Nos contactaremos pronto.
        </motion.p>
      </motion.div>
    );
  }

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 sm:p-8 md:p-10">
      <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 max-w-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          <div className="space-y-2">
            <Label htmlFor="nombre" className="text-slate-200 text-sm font-medium">
              Nombre *
            </Label>
            <Input
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Tu nombre completo"
              required
              disabled={status === "sending"}
              className={INPUT_STYLE}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="empresa" className="text-slate-200 text-sm font-medium">
              Empresa
            </Label>
            <Input
              id="empresa"
              name="empresa"
              value={formData.empresa}
              onChange={handleChange}
              placeholder="Nombre de tu organización"
              disabled={status === "sending"}
              className={INPUT_STYLE}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="rubro" className="text-slate-200 text-sm font-medium">
            Rubro
          </Label>
          <select
            id="rubro"
            name="rubro"
            value={formData.rubro}
            onChange={handleChange}
            disabled={status === "sending"}
            className={cn(INPUT_STYLE, "cursor-pointer")}
          >
            {RUBRO_OPTIONS.map((opt) => (
              <option key={opt || "empty"} value={opt}>
                {opt || "Seleccionar rubro"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="problema" className="text-slate-200 text-sm font-medium">
            Desafío técnico o cuello de botella a resolver *
          </Label>
          <textarea
            id="problema"
            name="problema"
            value={formData.problema}
            onChange={handleChange}
            placeholder="Describí brevemente el problema que querés resolver..."
            rows={4}
            required
            disabled={status === "sending"}
            className={cn(INPUT_STYLE, "min-h-[100px] resize-none")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="contacto" className="text-slate-200 text-sm font-medium">
            Contacto *
          </Label>
          <Input
            id="contacto"
            name="contacto"
            type="text"
            value={formData.contacto}
            onChange={handleChange}
            placeholder="Email o WhatsApp corporativo"
            required
            disabled={status === "sending"}
            className={INPUT_STYLE}
          />
        </div>

        {status === "error" && errorMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-2 p-4 rounded-lg bg-amber-500/10 border border-amber-500/20"
          >
            <AlertCircle className="w-5 h-5 shrink-0 text-amber-500 mt-0.5" />
            <div className="text-sm text-amber-200">
              <p className="font-medium text-amber-400">{errorMessage}</p>
              <p className="mt-2 text-amber-200/80">
                También podés escribirnos por{" "}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-orange-500 transition-colors"
                >
                  WhatsApp
                </a>
                .
              </p>
            </div>
          </motion.div>
        )}

        <div className="pt-4">
          <button
            type="submit"
            disabled={status === "sending"}
            className={cn(
              "relative inline-flex justify-center items-center w-full sm:w-auto min-w-[220px] min-h-[48px] px-8 py-3.5 rounded-xl overflow-hidden font-semibold text-sm tracking-wide text-white transition-all duration-300",
              "bg-orange-500 hover:bg-orange-600",
              "disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-orange-500"
            )}
          >
            {/* Shimmer effect */}
            <span
              className="absolute inset-0 -translate-x-full animate-shimmer pointer-events-none"
              aria-hidden
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)",
                width: "60%",
              }}
            />
            {status === "sending" ? (
              <span className="relative flex items-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" aria-hidden />
                Enviando...
              </span>
            ) : (
              <span className="relative">Enviar Solicitud de Diagnóstico</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
