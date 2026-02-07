"use client";

import Image from "next/image";
import { ASSETS } from "@/lib/assets";
import Link from "next/link";
import { motion } from "framer-motion";
import { Package, Truck, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function PymesPage() {
  const whatsappPymes =
    "https://wa.me/5492216902614?text=Hola%20Fenix,%20tengo%20una%20PyME%2FDeposito%20y%20quiero%20ordenar%20mi%20stock.";

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020817] border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={ASSETS.logo.nav}
              alt="Fenix Autodev"
              width={140}
              height={44}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-[#F57C00] transition-colors"
            >
              Inicio
            </Link>
            <Button asChild size="lg" className="bg-[#F57C00] hover:bg-[#FFA726]">
              <a href={whatsappPymes} target="_blank" rel="noopener noreferrer">
                Ver Demo para PyMEs/Depósitos
              </a>
            </Button>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero */}
        <section className="w-full bg-[#020817] py-20 px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#F57C00] text-sm font-medium uppercase tracking-wider mb-4">
              Control y Rentabilidad
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tu Stock y Logística, Controlados al 100%.
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">
              Eliminá las planillas de cálculo y los remitos en papel. Sistema de
              Gestión de Stock, Pedidos y Hojas de Ruta en Tiempo Real.
            </p>
            <Button asChild size="lg" className="bg-[#F57C00] hover:bg-[#FFA726] text-white">
              <a href={whatsappPymes} target="_blank" rel="noopener noreferrer">
                Ver Demo para PyMEs/Depósitos
              </a>
            </Button>
          </motion.div>
        </section>

        {/* Grid de Soluciones - 3 Tarjetas */}
        <section id="soluciones" className="py-20 bg-card/30 border-t border-border">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Soluciones para depósitos y distribuidoras
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Herramientas robustas para corralones, proveedores y operaciones
                logísticas.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Control de Stock",
                  description:
                    "Inventario en Tiempo Real. Sabé exactamente qué tenés y qué falta, sin contar a mano.",
                  icon: Package,
                },
                {
                  title: "Logística Inteligente",
                  description:
                    "Hoja de Ruta Digital. Asigná pedidos a choferes y seguí las entregas desde tu celular.",
                  icon: Truck,
                },
                {
                  title: "Facturación Automática",
                  description:
                    "De Remito a Factura en 1 clic. Integración con AFIP para dejar de perder tiempo cargando datos.",
                  icon: FileText,
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="bg-card border-border hover:border-[#F57C00]/50 transition-colors h-full">
                    <CardHeader>
                      <item.icon className="w-14 h-14 text-[#F57C00] mb-4" />
                      <CardTitle className="text-foreground text-xl">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-slate-300">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cierre de Venta */}
        <section
          id="cta"
          className="py-20 bg-gradient-to-b from-black/90 to-[#020817] border-t-2 border-[#F57C00]/40"
        >
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                ¿Tu depósito es un caos de papeles? Ordenalo hoy mismo.
              </h2>
              <Button asChild size="lg" className="bg-[#F57C00] hover:bg-[#FFA726] text-white text-lg px-10 py-6">
                <a href={whatsappPymes} target="_blank" rel="noopener noreferrer">
                  Solicitar Auditoría de Logística
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-[#F57C00] transition-colors">
                  Inicio
                </Link>
                <Link href="/#servicios" className="hover:text-[#F57C00] transition-colors">
                  Servicios
                </Link>
                <Link href="/#contacto" className="hover:text-[#F57C00] transition-colors">
                  Contacto
                </Link>
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href={whatsappPymes}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <img
                    src="https://cdn.simpleicons.org/whatsapp/25D366"
                    alt="WhatsApp"
                    className="h-8 w-8"
                    width={32}
                    height={32}
                  />
                </a>
                <a
                  href="https://instagram.com/fenixautodev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <img
                    src="https://cdn.simpleicons.org/instagram/E4405F"
                    alt="Instagram"
                    className="h-8 w-8"
                    width={32}
                    height={32}
                  />
                </a>
                <a
                  href="https://github.com/FenixAutoDev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                  aria-label="GitHub"
                >
                  <img
                    src="https://cdn.simpleicons.org/github/white"
                    alt="GitHub"
                    className="h-8 w-8"
                    width={32}
                    height={32}
                  />
                </a>
                <a
                  href="mailto:fenixautodev@gmail.com"
                  className="transition-transform hover:scale-110"
                  aria-label="Email"
                >
                  <img
                    src="https://cdn.simpleicons.org/gmail/EA4335"
                    alt="Gmail"
                    className="h-8 w-8"
                    width={32}
                    height={32}
                  />
                </a>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
              <Link href="/">
                <Image
                  src={ASSETS.logo.footer}
                  alt="Fenix Autodev"
                    width={120}
                    height={38}
                    className="h-8 w-auto object-contain"
                  />
                </Link>
                <p className="text-muted-foreground text-sm">
                  © {new Date().getFullYear()} Fenix Autodev. Software de Stock y
                  Logística para PyMEs.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
