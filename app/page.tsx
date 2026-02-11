"use client";

import { motion } from "framer-motion";
import {
  Zap,
  BarChart3,
  Monitor,
  ScanSearch,
  Plug,
  Server,
  Database,
  SearchCode,
  RefreshCcw,
} from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServiceCard } from "@/components/ServiceCard";
import { TechTicker } from "@/components/TechTicker";
import { FaqSection } from "@/components/FaqSection";
import { FAQ_ITEMS } from "@/lib/faq-data";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { TeamSection } from "@/components/TeamSection";
import { ImpactSection } from "@/components/ImpactSection";
import { MethodologySection } from "@/components/MethodologySection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const WHATSAPP_URL =
  "https://wa.me/5492216902614?text=Hola%20Fenix%20AutoDev,%20quisiera%20consultar%20por%20sus%20servicios.";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-16 sm:pt-20 md:pt-24">
      <HeroSection />

      <TechTicker />

      <FeaturedProjects />

      <ImpactSection />

      <section id="servicios" className="relative py-12 sm:py-16 md:py-24 bg-card/30 border-t border-border overflow-hidden" aria-labelledby="servicios-heading">
        {/* Spotlight - luz naranja tenue de fondo */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none opacity-[0.08]"
          style={{
            background: "radial-gradient(ellipse at center, rgba(249,115,22,0.25) 0%, transparent 65%)",
          }}
          aria-hidden
        />
        <div className="container relative mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 id="servicios-heading" className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 section-title">
              Servicios que diseñamos
            </h2>
            <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto px-2 sm:px-0">
              Software a Medida para PyMEs en La Plata y toda Argentina.
              Automatización que escala.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: "Webs que Venden 24/7",
                description:
                  "Tu sucursal digital que capta clientes mientras dormís.",
                icon: Monitor,
              },
              {
                title: "Adiós al Caos de Excel",
                description:
                  "Stock, ventas y clientes en un solo lugar. Accesible desde tu celular.",
                icon: Database,
              },
              {
                title: "Bots que Trabajan por Vos",
                description:
                  "IA que responde consultas, agenda turnos y factura automáticamente.",
                icon: Zap,
              },
              {
                title: "Web Scraping",
                description:
                  "Datos de webs y APIs listos para tomar decisiones.",
                icon: ScanSearch,
              },
              {
                title: "APIs e Integraciones",
                description:
                  "Conectamos tus sistemas con apps modernas. Sin fricciones.",
                icon: Plug,
              },
              {
                title: "Tableros y Reportes",
                description:
                  "Dashboards en vivo y reportes automáticos. Control total.",
                icon: BarChart3,
              },
              {
                title: "Infraestructura",
                description:
                  "Despliegue seguro, autenticación y roles. Listo para escalar.",
                icon: Server,
              },
              {
                title: "Auditoría de Sistemas",
                description:
                  "Revisamos y optimizamos lo que tenés. Más velocidad, menos errores.",
                icon: SearchCode,
              },
              {
                title: "Soporte & Evolución",
                description:
                  "Tu sistema crece con tu negocio. Acompañamiento continuo.",
                icon: RefreshCcw,
              },
            ].map((service, i) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={i * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      <MethodologySection />

      <TeamSection />

      <section id="contacto" className="py-12 sm:py-16 md:py-24 bg-card/30 border-t border-border" aria-labelledby="contacto-heading">
        <div className="container mx-auto px-4 sm:px-6 max-w-2xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 id="contacto-heading" className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 section-title">
              ¿Iniciamos tu transformación digital?
            </h2>
            <p className="text-slate-200 text-base sm:text-lg">
              Analizamos tu caso y te brindamos una hoja de ruta técnica en menos de 24 hs.
            </p>
          </motion.div>
          <ContactForm />
        </div>
      </section>

      <section id="faq" className="py-12 sm:py-16 md:py-24 border-t border-white/10 bg-black/30" aria-labelledby="faq-heading">
        <div className="container mx-auto px-4 sm:px-6 max-w-2xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 id="faq-heading" className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 section-title">
              Inversión Segura
            </h2>
            <p className="text-slate-200">
              Respondemos tus dudas para que el único foco sea el crecimiento de tu negocio.
            </p>
          </motion.div>
          <FaqSection items={FAQ_ITEMS} />
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}
