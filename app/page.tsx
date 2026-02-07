"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2,
  Search,
  Rocket,
  Zap,
  RefreshCw,
  ShieldCheck,
  Eye,
  Target,
  Monitor,
  ScanSearch,
  Plug,
  BarChart3,
  Server,
  Database,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TechTicker } from "@/components/TechTicker";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { TeamSection } from "@/components/TeamSection";

import { ASSETS } from "@/lib/assets";

const WHATSAPP_URL =
  "https://wa.me/5492216902614?text=Hola%20Fenix%20AutoDev,%20quisiera%20consultar%20por%20sus%20servicios.";

export default function Home() {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020817] border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={ASSETS.logo.nav}
              alt="Fenix Autodev"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <Button asChild size="lg" className="bg-[#F57C00] hover:bg-[#FFA726]">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Agendar Auditoría
            </a>
          </Button>
        </div>
      </nav>

      <section className="relative mt-16 w-full overflow-hidden">
        <div className="relative w-full aspect-video min-h-[280px] md:min-h-[400px] bg-[#020817]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-contain"
          >
            <source src={ASSETS.hero.video} type="video/mp4" />
          </video>
        </div>
        <motion.div
          className="container mx-auto px-4 pt-16 pb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Tu Negocio en Piloto Automático.
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Ayudamos a PyMEs, Clínicas y Profesionales a eliminar el trabajo
            manual y duplicar su facturación con Software a Medida e Inteligencia
            Artificial.
          </p>
          <Button asChild size="lg" className="bg-[#F57C00] hover:bg-[#FFA726] text-white">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Agendar Consultoría Gratuita
            </a>
          </Button>
        </motion.div>
      </section>

      <TechTicker />

      <FeaturedProjects />

      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              El impacto de trabajar con Fenix Autodev
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Menos trabajo manual",
                description: "Automatización que elimina lo repetitivo.",
                icon: RefreshCw,
              },
              {
                title: "Menos errores",
                description: "Eliminamos el factor humano en procesos críticos.",
                icon: ShieldCheck,
              },
              {
                title: "Mejor visibilidad",
                description: "Control total de tu operación.",
                icon: Eye,
              },
              {
                title: "Sistemas que se usan",
                description: "Software diseñado para la realidad de tu negocio.",
                icon: Target,
              },
            ].map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-card border-border hover:border-primary/50 transition-colors h-full">
                  <CardHeader>
                    <benefit.icon className="h-10 w-10 text-primary mb-2" />
                    <CardTitle className="text-foreground text-lg">
                      {benefit.title}
                    </CardTitle>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="py-24 bg-card/30 border-t border-border">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Servicios que diseñamos
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Software a Medida para PyMEs en La Plata y toda Argentina.
              Automatización que escala.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              {
                title: "Webs que Venden 24/7",
                description:
                  "No es solo diseño. Es una sucursal digital que capta clientes mientras dormís.",
                icon: Monitor,
              },
              {
                title: "Adiós al Caos de Excel",
                description:
                  "Centralizá tus datos. Stock, ventas y clientes en un solo lugar, accesible desde tu celular.",
                icon: Database,
              },
              {
                title: "Bots que Trabajan por Vos",
                description:
                  "Respondé consultas, agendá turnos y facturá automáticamente con IA.",
                icon: Zap,
              },
              {
                title: "Web Scraping",
                description: "Recolección de datos de webs y APIs.",
                icon: ScanSearch,
              },
              {
                title: "APIs REST e Integraciones",
                description:
                  "Conectamos tus sistemas actuales con apps modernas.",
                icon: Plug,
              },
              {
                title: "Tableros y Reportes",
                description:
                  "Dashboards en vivo y reportes automáticos (PDF/CSV).",
                icon: BarChart3,
              },
              {
                title: "Infraestructura",
                description:
                  "Despliegue seguro, autenticación y roles de usuario.",
                icon: Server,
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-card border-border hover:border-primary/50 transition-colors h-full">
                  <CardHeader>
                    <service.icon className="w-16 h-16 text-[#F57C00] mb-4 drop-shadow-[0_0_8px_rgba(245,124,0,0.6)]" />
                    <CardTitle className="text-foreground">
                      {service.title}
                    </CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#020817] border-t border-border">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
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

      <section id="faq" className="py-24 border-t border-border">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-muted-foreground">Derribando objeciones</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-foreground hover:text-[#F57C00]">
                  ¿Hacen factura A?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sí. Emitimos factura A para todos nuestros clientes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-foreground hover:text-[#F57C00]">
                  ¿El software es de pago único o mensual?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Depende del proyecto. Ofrecemos desarrollo por encargo (pago
                  único), suscripción mensual para mantenimiento y hosting, o
                  modelos híbridos. Lo adaptamos a tu flujo de caja.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-foreground hover:text-[#F57C00]">
                  ¿Cuánto tarda un desarrollo?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Un MVP funcional suele estar listo en 4 semanas. Proyectos más
                  complejos se dimensionan en la fase de diagnóstico.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      <footer className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <Link href="#servicios" className="hover:text-[#FFA726] transition-colors">
                Servicios
              </Link>
              <Link href="#equipo" className="hover:text-[#FFA726] transition-colors">
                Equipo
              </Link>
              <Link href="#faq" className="hover:text-[#FFA726] transition-colors">
                FAQ
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href={WHATSAPP_URL}
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
                href="mailto:contacto@fenixautodev.com"
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
                © {new Date().getFullYear()} Fenix Autodev. Automatización y
                Software a Medida en La Plata, Argentina.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
