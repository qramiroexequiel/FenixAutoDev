"use client";

import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/lib/assets";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  /** Subtítulo debajo del nombre. Si no se pasa, no se muestra. */
  subtitle?: string;
  /** Si es true, el subtítulo siempre se muestra (en footer). Si es false, se oculta en móvil pequeño (en nav). */
  subtitleAlwaysVisible?: boolean;
  /** Handler opcional para el click (ej: scroll to top en home) */
  onClick?: (e: React.MouseEvent) => void;
  /** Clase adicional para el contenedor */
  className?: string;
  /** Prioridad de carga de la imagen (true para logo en header, LCP) */
  priority?: boolean;
}

/**
 * Logo y nombre de marca. Usado en Navbar y Footer para consistencia visual.
 */
export function BrandLogo({
  subtitle,
  subtitleAlwaysVisible = false,
  onClick,
  className,
  priority = false,
}: BrandLogoProps) {
  const content = (
    <>
      <div className="relative shrink-0">
        <Image
          src={ASSETS.logo.nav}
          alt=""
          width={128}
          height={128}
          className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto max-w-[120px] object-contain transition-transform duration-300 group-hover:scale-105"
          priority={priority}
        />
      </div>
      <div className="flex flex-col justify-center min-w-0">
        <span className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
          Fenix <span className="text-orange-500">AutoDev</span>
        </span>
        {subtitle && (
          <span
            className={cn(
              "text-slate-400 font-light leading-snug mt-0.5 text-xs",
              !subtitleAlwaysVisible && "hidden min-[400px]:block"
            )}
          >
            {subtitle}
          </span>
        )}
      </div>
    </>
  );

  return (
    <Link
      href="/"
      className={cn(
        "group flex items-center gap-2 sm:gap-3 md:gap-4 shrink-0 p-0 m-0 min-w-0",
        className
      )}
      onClick={onClick}
      aria-label="Fénix AutoDev - Inicio"
    >
      {content}
    </Link>
  );
}
