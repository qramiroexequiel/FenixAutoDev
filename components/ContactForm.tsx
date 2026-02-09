"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2 } from "lucide-react";
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
  "flex h-11 w-full rounded-md border border-white/10 bg-[#020817] px-3 py-2 text-sm text-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F57C00] focus-visible:shadow-[0_0_12px_rgba(245,124,0,0.25)] disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    problema: "",
    rubro: "",
    contacto: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Error al enviar");
      }

      setStatus("success");
      setFormData({ nombre: "", empresa: "", problema: "", rubro: "", contacto: "" });
    } catch {
      setStatus("error");
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
        className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-12 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F57C00]/20 mb-6"
        >
          <CheckCircle2 className="w-8 h-8 text-[#F57C00]" />
        </motion.div>
        <h3 className="text-xl font-semibold text-white mb-2">
          ¡Solicitud enviada!
        </h3>
        <p className="text-slate-400 mb-6">
          Iniciando proceso de automatización...
        </p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm text-slate-500"
        >
          Nos comunicaremos con vos a la brevedad.
        </motion.p>
      </motion.div>
    );
  }

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:p-10">
      <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="nombre" className="text-slate-300 text-sm font-medium">
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
            <Label htmlFor="empresa" className="text-slate-300 text-sm font-medium">
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
          <Label htmlFor="rubro" className="text-slate-300 text-sm font-medium">
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
          <Label htmlFor="problema" className="text-slate-300 text-sm font-medium">
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
          <Label htmlFor="contacto" className="text-slate-300 text-sm font-medium">
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

        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-amber-500/90"
          >
            Error en la conexión. Por favor, intentá por{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#F57C00] transition-colors"
            >
              WhatsApp
            </a>
            .
          </motion.p>
        )}

        <div className="pt-4">
          <button
            type="submit"
            disabled={status === "sending"}
            className={cn(
              "relative inline-flex justify-center items-center w-full sm:w-auto min-w-[220px] px-8 py-3.5 rounded-xl overflow-hidden font-semibold text-sm tracking-wide text-white transition-all duration-300",
              "bg-[#F57C00] hover:bg-[#e65100]",
              "disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-[#F57C00]"
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
                <Loader2 className="w-5 h-5 animate-spin" />
                Procesando...
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
