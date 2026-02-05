import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fenix Autodev | Automatización Python y Desarrollo a Medida",
  description:
    "Expertos en automatización de procesos y desarrollo de software para PyMEs. Eliminá las tareas manuales que frenan tu empresa. Bots que trabajan 24/7, sistemas a medida y consultoría IT.",
  keywords: [
    "automatización",
    "Python",
    "desarrollo software",
    "PyMEs",
    "bots",
    "procesos",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-[#020817] antialiased`}>
        {children}
      </body>
    </html>
  );
}
