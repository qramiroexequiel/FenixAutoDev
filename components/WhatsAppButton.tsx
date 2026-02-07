"use client";

import { usePathname } from "next/navigation";

const WHATSAPP_BASE = "https://wa.me/5492216902614";
const DEFAULT_MSG = "Hola%20Fenix%20AutoDev,%20quisiera%20consultar%20por%20sus%20servicios.";
const SALUD_MSG = "Hola%20Fenix,%20soy%20del%20rubro%20salud%20y%20me%20interesa%20el%20sistema.";
const PYMES_MSG = "Hola%20Fenix,%20tengo%20una%20PyME%2FDeposito%20y%20quiero%20ordenar%20mi%20stock.";

export function WhatsAppButton() {
  const pathname = usePathname();
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
      className="fixed bottom-6 right-6 z-50 flex w-16 h-16 items-center justify-center rounded-full bg-[#25D366] shadow-lg"
      aria-label="Contactar por WhatsApp"
    >
      <img
        src="https://cdn.simpleicons.org/whatsapp/white"
        alt="WhatsApp"
        className="h-8 w-8"
        width={32}
        height={32}
      />
    </a>
  );
}
