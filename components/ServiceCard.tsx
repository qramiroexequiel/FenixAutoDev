"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  delay = 0,
}: ServiceCardProps) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMouse({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    },
    []
  );

  const shakeTransition = isHovered
    ? { repeat: Infinity, duration: 0.2, ease: "linear" }
    : { duration: 0.12, ease: "easeOut" };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        delay,
        duration: 0.55,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="group relative rounded-xl overflow-hidden"
    >
      {/* Wrapper para micro-shake: solo en hover, no interfiere con entrada */}
      <motion.div
        animate={{
          x: isHovered ? [0, -1, 1, -1, 0] : 0,
          y: isHovered ? [0, 1, -1, 0, 0] : 0,
        }}
        transition={{
          x: shakeTransition,
          y: shakeTransition,
        }}
        className="relative w-full h-full"
        style={{ willChange: "transform" }}
      >
      {/* Border beam: gradiente naranja a blanco */}
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <div
          className="absolute -inset-[50%] animate-border-beam"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 230deg, #f97316 260deg, #fb923c 275deg, #ffffff 290deg, #f97316 310deg, transparent 330deg)",
          }}
        />
        <div className="absolute inset-[1px] rounded-[11px] bg-[#020817]/95" />
      </div>

      {/* Contenido interior */}
      <div className="relative flex flex-col h-full min-h-[200px] p-6 rounded-xl overflow-hidden">
        {/* Glassmorphism: fondo oscuro que se aclara ligeramente al hover */}
        <motion.div
          className="absolute inset-0 backdrop-blur-sm"
          animate={{
            backgroundColor: isHovered
              ? "rgba(30, 41, 59, 0.6)"
              : "rgba(15, 23, 42, 0.85)",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />

        {/* Spotlight: resplandor naranja cálido */}
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden transition-opacity duration-200"
          style={{ opacity: isHovered ? 1 : 0 }}
          aria-hidden
        >
          <div
            className="absolute left-0 top-0 w-64 h-64 rounded-full blur-2xl will-change-transform"
            style={{
              transform: `translate(${mouse.x}px, ${mouse.y}px) translate(-50%, -50%)`,
              background:
                "radial-gradient(circle, rgba(249, 115, 22, 0.28) 0%, rgba(230, 81, 0, 0.14) 40%, transparent 70%)",
            }}
          />
        </div>

        {/* Contenido con z-index para legibilidad */}
        <div className="relative z-10 flex flex-col h-full">
          <div
            className={cn(
              "inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 transition-all duration-300 ease-out",
              "bg-white/5 border border-white/20",
              "group-hover:shadow-[0_0_24px_rgba(249,115,22,0.4)] group-hover:border-orange-500/50"
            )}
          >
            <Icon
              className={cn(
                "w-7 h-7 text-white transition-all duration-300",
                "group-hover:text-orange-400 group-hover:drop-shadow-[0_0_12px_rgba(249,115,22,0.8)]"
              )}
              strokeWidth={2}
            />
          </div>
          <h3 className="text-orange-500 text-xl font-bold mb-2">{title}</h3>
          <p className="text-slate-200 text-sm leading-relaxed flex-1">
            {description}
          </p>
        </div>
      </div>
      </motion.div>
    </motion.div>
  );
}
