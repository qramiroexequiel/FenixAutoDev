import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software para Médicos y Clínicas | Fénix AutoDev",
  description:
    "Sistema de Turnos Inteligente y Gestión Médica. Reducí el ausentismo, digitalizá tu Historia Clínica y cobrá consultas en línea. Soluciones para profesionales de la salud.",
  keywords: [
    "Software para médicos",
    "Sistema de turnos",
    "Historia clínica digital",
    "Gestión médica",
    "Clínicas",
    "La Plata",
    "Argentina",
  ],
};

export default function SaludLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
