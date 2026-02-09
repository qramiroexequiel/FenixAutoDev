import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const title =
    "Automatización y Software para PyMEs en Argentina | Fénix AutoDev";
  const description =
    "Sistemas de gestión de inventario, pedidos y logística en tiempo real. Software a medida para corralones, distribuidoras y depósitos. Control de stock, hojas de ruta y facturación automática.";
  const url = `${SITE_URL}/pymes`;

  return {
    title,
    description,
    keywords: [
      "Software para PyMEs",
      "Automatización PyMEs",
      "Control de stock",
      "Gestión logística",
      "Depósitos",
      "Corralones",
      "Python automation",
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

export default function PymesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
