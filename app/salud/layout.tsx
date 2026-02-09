import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const title =
    "Automatización para Clínicas en Argentina | Fénix AutoDev";
  const description =
    "Sistema de Turnos Inteligente, Historia Clínica Digital y Recordatorios por WhatsApp. Reducí el ausentismo un 40% y cobrá consultas en línea. Software a medida para médicos y clínicas.";
  const url = `${SITE_URL}/salud`;

  return {
    title,
    description,
    keywords: [
      "Software para médicos",
      "Automatización clínicas",
      "Sistema de turnos",
      "Historia clínica digital",
      "Gestión médica",
      "Software a medida salud",
      "IA para clínicas",
      "La Plata",
      "Argentina",
    ],
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "es_AR",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: { canonical: url },
  };
}

export default function SaludLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
