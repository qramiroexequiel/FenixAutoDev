"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Search, Code2, Rocket } from "lucide-react";

const STEPS = [
  {
    title: "Diagnóstico",
    description:
      "Analizamos los cuellos de botella de tu negocio. No escribimos una línea de código sin entender el problema.",
    icon: Search,
  },
  {
    title: "Desarrollo Ágil",
    description:
      "Sprints semanales. Vas viendo el avance y ajustamos el rumbo juntos. Sin sorpresas al final.",
    icon: Code2,
  },
  {
    title: "Despegue",
    description:
      "Implementación, capacitación a tu equipo y soporte post-lanzamiento.",
    icon: Rocket,
  },
];

function MethodologyCard({
  step,
  index,
}: {
  step: (typeof STEPS)[number];
  index: number;
}) {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMouse({ x, y });
    },
    []
  );

  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="group relative"
    >
      <motion.div
        className={`relative h-full overflow-hidden rounded-xl border bg-gradient-to-br from-white/[0.05] to-transparent p-4 sm:p-6 backdrop-blur-md transition-all duration-500 min-h-[140px] sm:min-h-[160px] ${
          isHovered
            ? "border-orange-500/70 shadow-[0_0_40px_rgba(249,115,22,0.14)]"
            : "border-white/10"
        }`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Luz que sigue al cursor - mismo efecto que Impacto */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden
        >
          <div
            className="absolute h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
            style={{
              left: `${mouse.x}%`,
              top: `${mouse.y}%`,
              background:
                "radial-gradient(circle, rgba(249,115,22,0.4) 0%, rgba(230,81,0,0.15) 45%, transparent 70%)",
              transition: "left 0.15s ease-out, top 0.15s ease-out",
            }}
          />
        </div>

        {/* Icono con glow */}
        <div className="relative mb-4">
          <div className="inline-flex items-center justify-center rounded-full border-2 border-orange-500/60 bg-[#020817]/80 p-2.5 shadow-[0_0_24px_rgba(249,115,22,0.3),inset_0_0_12px_rgba(249,115,22,0.08)]">
            <Icon
              className="h-6 w-6 text-orange-500 group-hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.6)] transition-all duration-300"
              strokeWidth={2}
            />
          </div>
        </div>

        <h3 className="relative text-lg font-bold text-orange-500 mb-2">
          {step.title}
        </h3>
        <p className="relative text-slate-200 text-sm font-light leading-relaxed">
          {step.description}
        </p>
      </motion.div>
    </motion.div>
  );
}

export function MethodologySection() {
  return (
    <section
      className="relative pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-24 border-t border-border bg-[#020817] overflow-hidden"
      aria-labelledby="metodologia-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            id="metodologia-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 px-2 sm:px-0 section-title"
          >
            Cómo convertimos tu idea en software
          </h2>
          <p className="text-slate-200 text-base sm:text-lg max-w-xl mx-auto px-2 sm:px-0">
            Metodología clara, sin sorpresas.
          </p>
        </motion.div>

        {/* Grid idéntico a Impacto: 1 col mobile, 2 tablet, 3 desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-6xl mx-auto">
          {STEPS.map((step, i) => (
            <MethodologyCard key={step.title} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
