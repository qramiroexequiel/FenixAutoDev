"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const WHATSAPP_BASE = "https://wa.me/5492216902614";
const DEFAULT_MSG = "Hola%20Fenix%20AutoDev,%20quisiera%20consultar%20por%20sus%20servicios.";
const SALUD_MSG = "Hola%20Fenix,%20soy%20del%20rubro%20salud%20y%20me%20interesa%20el%20sistema.";
const PYMES_MSG = "Hola%20Fenix,%20tengo%20una%20PyME%2FDeposito%20y%20quiero%20ordenar%20mi%20stock.";

export function WhatsAppButton() {
  const pathname = usePathname();
  const [isContactInView, setIsContactInView] = useState(false);

  useEffect(() => {
    const contactSection = document.getElementById("contacto");
    if (!contactSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsContactInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    observer.observe(contactSection);
    return () => observer.disconnect();
  }, [pathname]);

  const message = pathname?.startsWith("/salud")
    ? SALUD_MSG
    : pathname?.startsWith("/pymes")
      ? PYMES_MSG
      : DEFAULT_MSG;
  const href = `${WHATSAPP_BASE}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed right-6 z-50 flex w-16 h-16 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-500 ease-out",
        isContactInView
          ? "bottom-[calc(1.5rem+80px)] opacity-70"
          : "bottom-6 opacity-100"
      )}
      aria-label="Contactar por WhatsApp"
    >
      <img
        src="https://cdn.simpleicons.org/whatsapp/white"
        alt="Contactar Fénix AutoDev por WhatsApp - Automatización y software a medida"
        className="h-8 w-8"
        width={32}
        height={32}
      />
    </a>
  );
}
