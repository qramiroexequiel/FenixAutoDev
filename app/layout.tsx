import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import "./globals.css";

const ogTitle = "Fénix AutoDev | Software & Automatización 🦅🔥";
const description =
  "Transformamos el caos de tu negocio en sistemas eficientes. Especialistas en Python, automatización de procesos y desarrollo de software a medida en Argentina. ¡Pedí tu auditoría gratuita!";
const ogDescription =
  "Fénix AutoDev es tu partner de software a medida y automatización en La Plata y toda Argentina. Especialistas en Python, Next.js, IA y desarrollo de sistemas para PyMEs, clínicas y profesionales. Transformamos el caos operativo en flujos eficientes: gestión de turnos, control de stock, facturación automatizada, dashboards en tiempo real y más. Servicios: desarrollo web, apps, integraciones API, scraping, reportes automáticos, CRM y ERP a medida. Casos de éxito en salud, retail y servicios. Metodología ágil, soporte post-lanzamiento y facturación formal. Pedí tu auditoría gratuita y empezá a escalar con tecnología que realmente funciona. Contacto por WhatsApp o LinkedIn.";
const keywords = [
  "Software a medida",
  "Automatización PyMEs Argentina",
  "Python Developer",
  "Fénix AutoDev",
  "Desarrollo sistemas La Plata",
];
const ogImage = `${SITE_URL}/og-image.png`;

/** JSON-LD Organization para Knowledge Panel y redes sociales (Schema.org) */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Fénix AutoDev",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  sameAs: [
    "https://www.instagram.com/fenixautodev",
    "https://github.com/fenixautodev",
    "https://www.linkedin.com/in/qramiroexequiel",
  ],
};

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: ogTitle,
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
    title: ogTitle,
    description: ogDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Software a Medida y Automatización para PyMEs en Argentina`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: ogDescription,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "1pvjnUxyTCWmXL_GnFFkIuZf1kaqinyoqQNnL98aJno",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-touch-icon.svg", sizes: "any", type: "image/svg+xml" },
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
          id="schema-org-organization"
          strategy="beforeInteractive"
          type="application/ld+json"
        >
          {JSON.stringify(organizationSchema)}
        </Script>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
