import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import "./globals.css";

const title =
  "Fenix AutoDev | Sistemas de Alta Precisión y Automatización Inteligente";
const description =
  "Lideramos la transformación digital de empresas exigentes. Expertos en Automatización con IA, Arquitecturas Elásticas y Migración de Sistemas Críticos. Soluciones robustas con Factura A en Argentina.";
const keywords = [
  "Automatización",
  "Inteligencia Artificial",
  "Software a medida",
  "La Plata",
  "Argentina",
  "Sistemas PyMEs",
  "Eficiencia Operativa",
  "Factura A",
];
const ogImage = `${SITE_URL}/og-image.png`;

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo-fenix.png`,
      founder: [
        {
          "@type": "Person",
          name: "Ramiro Quevedo",
          jobTitle: "CTO & Lead Developer",
        },
        {
          "@type": "Person",
          name: "José",
          jobTitle: "Consultor Especialista en Salud",
        },
        {
          "@type": "Person",
          name: "Hernán",
          jobTitle: "Operaciones & Logística",
        },
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#professionalservice`,
      name: SITE_NAME,
      description,
      url: SITE_URL,
      image: ogImage,
      logo: `${SITE_URL}/logo-fenix.png`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "La Plata",
        addressRegion: "Buenos Aires",
        addressCountry: "AR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "-34.9214",
        longitude: "-57.9545",
      },
      telephone: "+5492216902614",
      sameAs: [
        "https://instagram.com/fenixautodev",
        "https://github.com/FenixAutoDev",
      ],
      areaServed: {
        "@type": "Country",
        name: "Argentina",
      },
      serviceType: [
        "Desarrollo de Software",
        "Automatización",
        "Software para Clínicas",
        "Software para PyMEs",
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
    },
  ],
};

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | ${SITE_NAME}`,
  },
  description,
  keywords,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title,
    description,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Sistemas de Alta Precisión y Automatización Inteligente`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
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
