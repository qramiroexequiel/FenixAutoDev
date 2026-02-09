"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function NavLink({ href, children, onClick, className = "" }: NavLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [spot, setSpot] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setSpot({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Link
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      className={`group/link relative px-3 py-2 text-sm font-medium rounded-lg overflow-hidden transition-all duration-500 ${className}`}
    >
      {/* Texto con blur reveal - desenfocado por defecto, enfocado al hover */}
      <span className="relative z-10 block text-slate-200/80 blur-[0.5px] group-hover/link:text-white group-hover/link:blur-none transition-all duration-500">
        {children}
      </span>

      {/* Punto de luz naranja que sigue el cursor por debajo */}
      <motion.span
        className="absolute h-6 w-6 rounded-full bg-[#F57C00]/50 blur-md pointer-events-none opacity-0 group-hover/link:opacity-100 -z-0"
        style={{
          left: spot.x,
          top: spot.y,
          transform: "translate(-50%, -50%)",
        }}
        transition={{
          left: { type: "spring", damping: 35, stiffness: 350 },
          top: { type: "spring", damping: 35, stiffness: 350 },
          opacity: { duration: 0.25 },
        }}
      />
    </Link>
  );
}
