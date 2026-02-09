"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  Activity,
  Layers,
  Timer,
  Lock,
} from "lucide-react";

const BENEFITS = [
  {
    title: "Eficiencia Autónoma",
    description: "Eliminamos el trabajo manual y lo repetitivo.",
    icon: Zap,
  },
  {
    title: "Integridad de Datos",
    description: "Procesos críticos sin factor humano.",
    icon: ShieldCheck,
  },
  {
    title: "Visibilidad Operativa",
    description: "Control total de tu operación en tiempo real.",
    icon: Activity,
  },
  {
    title: "Arquitectura Elástica",
    description: "Sistemas diseñados para escalar con tu negocio.",
    icon: Layers,
  },
  {
    title: "Velocidad de Respuesta",
    description: "Optimizamos los tiempos de ejecución para una ventaja competitiva.",
    icon: Timer,
  },
  {
    title: "Seguridad Blindada",
    description: "Protocolos de protección de datos de grado industrial.",
    icon: Lock,
  },
];

function ImpactCard({
  benefit,
  index,
}: {
  benefit: (typeof BENEFITS)[number];
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

  const Icon = benefit.icon;

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
        className={`relative h-full overflow-hidden rounded-xl border bg-gradient-to-br from-white/[0.05] to-transparent p-6 backdrop-blur-md transition-all duration-500 min-h-[160px] ${
          isHovered
            ? "border-[#F57C00] border-opacity-100 shadow-[0_0_40px_rgba(245,124,0,0.12)]"
            : "border-white/10"
        }`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Luz que sigue al cursor */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden
        >
          <div
            className="absolute h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
            style={{
              left: `${mouse.x}%`,
              top: `${mouse.y}%`,
              background: "radial-gradient(circle, rgba(245,124,0,0.4) 0%, transparent 70%)",
              transition: "left 0.15s ease-out, top 0.15s ease-out",
            }}
          />
        </div>

        {/* Icono con glow */}
        <div className="relative mb-4">
          <div className="inline-flex items-center justify-center rounded-full border-2 border-[#F57C00] bg-[#020817]/80 p-2.5 shadow-[0_0_24px_rgba(245,124,0,0.35),inset_0_0_12px_rgba(245,124,0,0.1)]">
            <Icon className="h-6 w-6 text-[#F57C00]" strokeWidth={2} />
          </div>
        </div>

        <h3 className="relative text-lg font-bold text-white mb-2">
          {benefit.title}
        </h3>
        <p className="relative text-slate-400 text-sm font-light leading-relaxed">
          {benefit.description}
        </p>
      </motion.div>
    </motion.div>
  );
}

export function ImpactSection() {
  return (
    <section
      className="relative pt-20 pb-24 border-t border-border bg-[#020817] overflow-hidden"
      aria-labelledby="impacto-heading"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            id="impacto-heading"
            className="text-3xl md:text-4xl font-black text-white mb-4"
          >
            El impacto de trabajar con Fenix AutoDev
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Métricas y beneficios reales.
          </p>
        </motion.div>

        {/* Bento Grid 3x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {BENEFITS.map((benefit, i) => (
            <ImpactCard key={benefit.title} benefit={benefit} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
