"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2,
  Search,
  Rocket,
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
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AuraCard } from "@/components/AuraCard";
import { TechTicker } from "@/components/TechTicker";
import { FaqSection } from "@/components/FaqSection";
import { FAQ_ITEMS } from "@/lib/faq-data";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { TeamSection } from "@/components/TeamSection";
import { ImpactSection } from "@/components/ImpactSection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const WHATSAPP_URL =
  "https://wa.me/5492216902614?text=Hola%20Fenix%20AutoDev,%20quisiera%20consultar%20por%20sus%20servicios.";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-20 md:pt-24">
      <HeroSection />

      <TechTicker />

      <FeaturedProjects />

      <ImpactSection />

      <section id="servicios" className="relative py-24 bg-card/30 border-t border-border overflow-hidden" aria-labelledby="servicios-heading">
        {/* Spotlight - luz naranja tenue de fondo */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none opacity-[0.08]"
          style={{
            background: "radial-gradient(ellipse at center, rgba(245,124,0,0.4) 0%, transparent 70%)",
          }}
          aria-hidden
        />
        <div className="container relative mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 id="servicios-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Servicios que diseñamos
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Software a Medida para PyMEs en La Plata y toda Argentina.
              Automatización que escala.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <AuraCard key={service.title} delay={i * 0.1}>
                <Card className="bg-transparent border-0 shadow-none h-full min-h-[200px]">
                  <CardHeader className="transition-colors duration-500 h-full">
                    <service.icon className="w-14 h-14 text-[#F57C00] mb-4 drop-shadow-[0_0_12px_rgba(245,124,0,0.5)]" />
                    <CardTitle className="text-foreground text-xl font-bold">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-slate-400">{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </AuraCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#020817] border-t border-border" aria-labelledby="metodologia-heading">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 id="metodologia-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cómo convertimos tu idea en software
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Metodología clara, sin sorpresas.
            </p>
          </motion.div>
          <div className="relative max-w-4xl mx-auto">
            <div className="hidden md:block absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative">
              {[
                {
                  step: 1,
                  title: "Diagnóstico",
                  description:
                    "Analizamos los cuellos de botella de tu negocio. No escribimos una línea de código sin entender el problema.",
                  icon: Search,
                },
                {
                  step: 2,
                  title: "Desarrollo Ágil",
                  description:
                    "Sprints semanales. Vas viendo el avance y ajustamos el rumbo juntos. Sin sorpresas al final.",
                  icon: Code2,
                },
                {
                  step: 3,
                  title: "Despegue",
                  description:
                    "Implementación, capacitación a tu equipo y soporte post-lanzamiento.",
                  icon: Rocket,
                },
              ].map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 w-16 h-16 rounded-full bg-card border-2 border-[#F57C00]/50 flex items-center justify-center mb-6">
                    <step.icon className="h-8 w-8 text-[#F57C00]" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TeamSection />

      <section id="contacto" className="py-24 bg-card/30 border-t border-border" aria-labelledby="contacto-heading">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 id="contacto-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Iniciamos tu transformación digital?
            </h2>
            <p className="text-slate-400 text-lg">
              Analizamos tu caso y te brindamos una hoja de ruta técnica en menos de 24 hs.
            </p>
          </motion.div>
          <ContactForm />
        </div>
      </section>

      <section id="faq" className="py-24 border-t border-white/10 bg-black/30" aria-labelledby="faq-heading">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Inversión Segura
            </h2>
            <p className="text-slate-400">
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
