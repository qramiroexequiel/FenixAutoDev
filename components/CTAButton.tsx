"use client";

import { useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
}

export function CTAButton({
  href,
  children,
  className = "",
  onClick,
  fullWidth = false,
}: CTAButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) / rect.width;
      const deltaY = (e.clientY - centerY) / rect.height;
      const strength = 4;
      x.set(deltaX * strength);
      y.set(deltaY * strength);
    },
    [x, y]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group/cta relative inline-flex justify-center items-center px-5 py-2.5 rounded-xl overflow-hidden ${fullWidth ? "w-full" : ""} ${className}`}
      style={{ x: xSpring, y: ySpring }}
      animate={{
        boxShadow: [
          "0 0 20px rgba(245,124,0,0.15)",
          "0 0 28px rgba(245,124,0,0.25)",
          "0 0 20px rgba(245,124,0,0.15)",
        ],
      }}
      whileHover={{
        boxShadow: "0 0 35px rgba(245,124,0,0.4), 0 0 60px rgba(245,124,0,0.2)",
      }}
      transition={{
        boxShadow: {
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      {/* Aura perimetral - conic gradient animado */}
      <span
        className="absolute inset-0 rounded-xl animate-aura-rotate"
        style={{
          background: "conic-gradient(from 0deg, #F57C00, #FF9800, #e65100, #F57C00)",
        }}
      />

      {/* Fondo cristal profundo + noise - cubre el centro, deja ver el borde */}
      <span className="absolute inset-[1.5px] rounded-[10px] bg-[#0a0a0a] backdrop-blur-md overflow-hidden z-[1]">
        <span
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </span>

      {/* Shine al hover - debajo del texto */}
      <span
        className="absolute inset-0 z-[5] w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/cta:translate-x-[200%] transition-transform duration-700 ease-out pointer-events-none"
        aria-hidden
      />

      {/* Texto con glow */}
      <span className="relative z-10 font-semibold text-sm tracking-wide text-white drop-shadow-[0_0_8px_rgba(245,124,0,0.3)] group-hover/cta:drop-shadow-[0_0_15px_rgba(245,124,0,0.5)] transition-all duration-300">
        {children}
      </span>
    </motion.a>
  );
}
