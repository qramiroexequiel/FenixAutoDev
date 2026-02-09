"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface AuraCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AuraCard({ children, className, delay = 0 }: AuraCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className={cn("group relative rounded-lg", className)}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      {/* Aura perimetral - activa en hover o en viewport */}
      <span
        className={cn(
          "absolute inset-0 rounded-lg transition-opacity duration-500",
          isInView ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        )}
        style={{
          background: "conic-gradient(from 0deg, #F57C00, #FF9800, #e65100, #F57C00)",
          animation: "aura-rotate 4s linear infinite",
        }}
      />
      {/* Contenido - m-[1.5px] deja ver el aura en el borde */}
      <div className="relative m-[1.5px] rounded-[6px] bg-card border border-border group-hover:border-transparent overflow-hidden transition-all duration-500">
        {children}
      </div>
    </motion.div>
  );
}
