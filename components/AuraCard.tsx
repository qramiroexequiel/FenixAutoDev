"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface AuraCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/* Sombra naranja para hover - marca Fénix */
const HOVER_SHADOW =
  "0 20px 40px -12px rgba(249, 115, 22, 0.35), 0 0 0 1px rgba(249, 115, 22, 0.2), 0 0 60px -10px rgba(249, 115, 22, 0.15)";

export function AuraCard({ children, className, delay = 0 }: AuraCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      className={cn("group relative rounded-lg", className)}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        delay,
        duration: 0.55,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        y: -8,
        boxShadow: HOVER_SHADOW,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      style={{ willChange: "transform" }}
    >
      {/* Aura perimetral - activa en hover o en viewport */}
      <span
        className={cn(
          "absolute inset-0 rounded-lg transition-opacity duration-500",
          isInView ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        )}
        style={{
          background: "conic-gradient(from 0deg, #f97316, #fb923c, #ea580c, #f97316)",
          animation: "aura-rotate 4s linear infinite",
        }}
      />
      {/* Contenido - m-[1.5px] deja ver el aura en el borde */}
      <div className="relative m-[1.5px] rounded-[6px] bg-card border border-border group-hover:border-orange-500/40 overflow-hidden transition-all duration-300 ease-out">
        {children}
      </div>
    </motion.div>
  );
}
