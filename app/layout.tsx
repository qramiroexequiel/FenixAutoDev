import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Fénix AutoDev",
  image: "https://fenixautodev.vercel.app/icon.svg",
  description:
    "Agencia de Automatización y Desarrollo de Software en La Plata. Eliminamos el trabajo manual con Python y Next.js.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "La Plata Centro",
    addressLocality: "La Plata",
    addressRegion: "Buenos Aires",
    postalCode: "1900",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-34.9214",
    longitude: "-57.9545",
  },
  url: "https://fenixautodev.vercel.app",
  telephone: "+5492216902614",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
};

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fénix AutoDev | Automatización y Software a Medida",
  description:
    "Ayudamos a empresas y profesionales a eliminar el trabajo manual, gestionar clientes y escalar con tecnología. Desarrollo Web, Apps y Bots con IA.",
  keywords: [
    "Desarrollo Web",
    "Software a Medida",
    "Automatización",
    "Python",
    "Next.js",
    "Agencia Digital",
    "Argentina",
  ],
  openGraph: {
    title: "Fénix AutoDev | Automatización y Software a Medida",
    description:
      "Transformamos tu negocio con tecnología. Eliminá planillas de cálculo y modernizá tu gestión.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-[#020817] antialiased`}>
        <Script
          id="schema-org"
          strategy="beforeInteractive"
          type="application/ld+json"
        >
          {JSON.stringify(schemaOrg)}
        </Script>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
