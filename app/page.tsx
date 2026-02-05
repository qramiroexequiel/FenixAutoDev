"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FileSpreadsheet,
  Cloud,
  Bot,
  ChevronRight,
  FileCheck,
  FileText,
  Code2,
  X,
  Check,
  Zap,
  MessageCircle,
  TrendingUp,
  RefreshCw,
  ShieldCheck,
  Eye,
  Target,
  Layout,
  LayoutGrid,
  ScanSearch,
  Plug,
  BarChart3,
  Server,
  Wrench,
  Quote,
  Package,
  BarChart2,
  User,
  Database,
  Box,
  ImageIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020817] border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-fenix.png"
              alt="Fenix Autodev"
              width={140}
              height={44}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <Button asChild size="lg" className="bg-[#FF8C00] hover:bg-[#FF8C00]/90">
            <Link href="#contacto">Agendar Auditoría</Link>
          </Button>
        </div>
      </nav>

      {/* Hero - Dos bloques hermanos: Video arriba, Texto abajo */}
      {/* BLOQUE 1: El Video - ancho completo, sin bordes laterales */}
      <div className="w-full relative mt-16 px-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/banner-fenix.jpg"
          className="w-full h-auto block"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      {/* BLOQUE 2: El Texto (debajo del video) */}
      <div className="w-full bg-[#020817] py-12 px-4 text-center">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Sistemas a Medida, Sitios Web y Automatización de Negocios.
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Ayudamos a empresas a eliminar el trabajo manual, reemplazar
            planillas de cálculo y construir presencia digital sólida con Python
            y Next.js.
          </p>
          <Button asChild size="lg" className="bg-[#FF8C00] hover:bg-[#FF8C00]/90 text-white">
            <Link href="#contacto">Contanos tu Caso</Link>
          </Button>
        </motion.div>
      </div>

      {/* Trust Bar - Stack Tecnológico (15 logos) */}
      <section className="py-10 border-y border-border bg-card/50">
        <div className="container mx-auto px-4">
          <motion.p
            className="text-center text-muted-foreground mb-8 text-sm font-medium uppercase tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Stack tecnológico que dominamos
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-6 md:gap-8 items-center text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {[
              { name: "Python", src: "https://cdn.simpleicons.org/python/3776AB" },
              { name: "Next.js", src: "https://cdn.simpleicons.org/nextdotjs/white" },
              { name: "React", src: "https://cdn.simpleicons.org/react/61DAFB" },
              { name: "TypeScript", src: "https://cdn.simpleicons.org/typescript/3178C6" },
              { name: "Node.js", src: "https://cdn.simpleicons.org/nodedotjs/339933" },
              { name: "AWS", src: "https://cdn.simpleicons.org/amazonaws/FF9900" },
              { name: "Docker", src: "https://cdn.simpleicons.org/docker/2496ED" },
              { name: "PostgreSQL", src: "https://cdn.simpleicons.org/postgresql/4169E1" },
              { name: "MongoDB", src: "https://cdn.simpleicons.org/mongodb/47A248" },
              { name: "Redis", src: "https://cdn.simpleicons.org/redis/DC382D" },
              { name: "Tailwind", src: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
              { name: "Vercel", src: "https://cdn.simpleicons.org/vercel/white" },
              { name: "Excel", src: "https://cdn.simpleicons.org/microsoftexcel/217346" },
              { name: "Google Sheets", src: "https://cdn.simpleicons.org/googlesheets/34A853" },
              { name: "FastAPI", src: "https://cdn.simpleicons.org/fastapi/009688" },
            ].map((tech) => (
              <div key={tech.name} className="flex flex-col items-center gap-1">
                <img
                  src={tech.src}
                  alt={tech.name}
                  className="h-10 w-10 object-contain"
                  width={40}
                  height={40}
                />
                <span className="text-xs font-medium">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section - Impacto */}
      <section className="py-20">
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
                description: "Automatizamos lo repetitivo.",
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

      {/* Solution Section - Bento Grid */}
      <section id="servicios" className="py-20 bg-card/30">
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
              Ayudamos a empresas a digitalizar y escalar sus operaciones
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: "Desarrollo Web y Landing Pages",
                description:
                  "Sitios institucionales modernos, rápidos y optimizados para convertir visitas en clientes.",
                icon: Layout,
              },
              {
                title: "Sistemas de Gestión",
                description:
                  "Ventas, clientes, inventario y proveedores.",
                icon: LayoutGrid,
              },
              {
                title: "Automatización y Bots",
                description:
                  "Procesamiento de datos y tareas repetitivas 24/7.",
                icon: Bot,
              },
              {
                title: "Web Scraping",
                description:
                  "Recolección de datos de webs y APIs.",
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
                    <service.icon className="h-12 w-12 text-primary mb-2" />
                    <CardTitle className="text-foreground">
                      {service.title}
                    </CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* The Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              Metodología ágil
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: 1,
                  title: "Descubrimiento",
                  description: "Entendemos tu flujo manual actual.",
                  icon: FileCheck,
                },
                {
                  step: 2,
                  title: "MVP Funcional",
                  description: "Primera versión usable rápida.",
                  icon: FileText,
                },
                {
                  step: 3,
                  title: "Iteración",
                  description: "Mejoras basadas en el uso real.",
                  icon: Code2,
                },
                {
                  step: 4,
                  title: "Mantenimiento",
                  description: "Soporte a largo plazo.",
                  icon: Wrench,
                },
              ].map((process, i) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex items-center gap-2 w-full justify-center">
                    {i > 0 && (
                      <ChevronRight className="h-6 w-6 text-muted-foreground hidden md:block" />
                    )}
                    <div className="rounded-full bg-primary/20 text-primary w-12 h-12 flex items-center justify-center font-bold">
                      {process.step}
                    </div>
                    {i < 3 && (
                      <ChevronRight className="h-6 w-6 text-muted-foreground hidden md:block" />
                    )}
                  </div>
                  <h4 className="font-semibold text-foreground mt-4">
                    {process.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    {process.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ¿Por qué elegir Fenix Autodev? - Garantía de Calidad */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              ¿Por qué elegir Fenix Autodev?
            </h2>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="rounded-full bg-primary/20 p-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Velocidad</h3>
              <p className="text-muted-foreground text-sm">
                Sprints de desarrollo ágiles. Tu MVP listo en semanas, no meses.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="rounded-full bg-primary/20 p-4">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Soporte Dedicado</h3>
              <p className="text-muted-foreground text-sm">
                Hablás directo con los desarrolladores, sin intermediarios.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="rounded-full bg-primary/20 p-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Escalabilidad</h3>
              <p className="text-muted-foreground text-sm">
                Código robusto diseñado para crecer con tu facturación.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Proyectos de Fenix Autodev */}
      <section id="proyectos" className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Proyectos de Fenix Autodev
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "Sistema de Gestión de Stock",
                description: "Control de inventario en tiempo real con alertas y reportes automáticos.",
                icon: Package,
                gallery: [1, 2, 3],
              },
              {
                title: "Dashboard de Ventas",
                description: "Visualización de métricas y KPIs con exportación a PDF/CSV.",
                icon: BarChart2,
                gallery: [1, 2, 3],
              },
            ].map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-card border-border hover:border-[#FF8C00]/50 transition-colors h-full overflow-hidden">
                  <div className="grid grid-cols-3 gap-1 p-2 bg-muted/30">
                    {project.gallery.map((img) => (
                      <div
                        key={img}
                        className="aspect-video rounded bg-muted flex items-center justify-center"
                      >
                        <ImageIcon className="h-8 w-8 text-muted-foreground/50" />
                      </div>
                    ))}
                  </div>
                  <CardHeader>
                    <project.icon className="h-12 w-12 text-[#FF8C00] mb-2" />
                    <CardTitle className="text-foreground">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-900/50 border-border">
              <CardHeader>
                <Quote className="h-8 w-8 text-primary mb-2" />
                <CardDescription className="italic">
                  &quot;El equipo de Fenix Autodev nos entregó un sistema que
                  redujo las horas de trabajo administrativo a la mitad. Muy
                  profesionales.&quot;
                </CardDescription>
                <p className="text-sm text-muted-foreground mt-2">— Cliente, PyME</p>
              </CardHeader>
            </Card>
            <Card className="bg-slate-900/50 border-border">
              <CardHeader>
                <Quote className="h-8 w-8 text-primary mb-2" />
                <CardDescription className="italic">
                  &quot;La eficiencia del equipo es notable. Comunicación clara,
                  entregas a tiempo y un producto que realmente usamos todos los
                  días.&quot;
                </CardDescription>
                <p className="text-sm text-muted-foreground mt-2">— Cliente, Comercio</p>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* El Equipo de Fenix Autodev */}
      <section id="equipo" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              El Equipo de Fenix Autodev
            </h2>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              {
                name: "Ramiro",
                role: "Co-Founder & Tech Lead",
                bio: "Arquitectura de Software y Automatización.",
              },
              {
                name: "Hernán",
                role: "Co-Founder & Operations",
                bio: "Estrategia de Negocio y Gestión de Proyectos.",
              },
              {
                name: "José",
                role: "Co-Founder & Developer",
                bio: "Desarrollo Full Stack e Integraciones.",
              },
            ].map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-card border-border hover:border-[#FF8C00]/50 transition-colors h-full text-center">
                  <CardHeader>
                    <div className="w-28 h-28 rounded-full bg-muted border-2 border-[#FF8C00]/30 flex items-center justify-center mx-auto mb-4 overflow-hidden">
                      <User className="h-14 w-14 text-[#FF8C00]/70" />
                    </div>
                    <CardTitle className="text-foreground">{member.name}</CardTitle>
                    <CardDescription className="font-medium text-[#FF8C00]">
                      {member.role}
                    </CardDescription>
                    <CardDescription>{member.bio}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* La Diferencia Fenix Autodev - Comparativa Visual */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              La Diferencia Fenix Autodev
            </h2>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {/* Tu día a día actual - Gris apagado */}
            <Card className="bg-muted/30 border-muted-foreground/20 opacity-90">
              <CardHeader>
                <CardTitle className="text-muted-foreground text-xl">
                  Tu día a día actual
                </CardTitle>
                <ul className="space-y-3 mt-4">
                  {["Planillas rotas", "Data vieja", "Estrés"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground">
                      <X className="h-5 w-5 text-red-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardHeader>
            </Card>
            {/* Con Fenix Autodev - Borde naranja + glow */}
            <Card className="bg-card border-2 border-[#FF8C00] shadow-[0_0_30px_rgba(255,140,0,0.2)]">
              <CardHeader>
                <CardTitle className="text-foreground text-xl">
                  Con Fenix Autodev
                </CardTitle>
                <ul className="space-y-3 mt-4">
                  {[
                    "Reportes automáticos",
                    "Control total",
                    "Escalabilidad",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-foreground">
                      <Check className="h-5 w-5 text-green-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ - Derribando Objeciones */}
      <section className="py-20 border-t border-border">
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
            <p className="text-muted-foreground">
              Derribando objeciones
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  ¿Tengo que saber programar?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No. Nuestro equipo te entrega el sistema llave en mano.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  ¿Sirve para mi PyME?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sí. En Fenix Autodev automatizamos desde pequeños comercios
                  hasta grandes logísticas.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  ¿Cómo es el pago?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Por proyecto o por hora. La agencia se adapta a tu flujo de caja.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Form */}
      <section
        id="contacto"
        className="py-20 border-t border-border"
      >
        <div className="container mx-auto px-4 max-w-xl">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              ¿Tenés un proceso manual, necesitás una web nueva o tu sistema actual ya no escala?
            </h2>
            <p className="text-muted-foreground">
              Dejanos tus datos y te contactamos para una auditoría gratuita.
            </p>
          </motion.div>
          {/* Formspree: reemplazá ID_DE_FORMSPREE por tu ID real de formspree.io */}
          <motion.form
            action="https://formspree.io/f/ID_DE_FORMSPREE"
            method="POST"
            onSubmit={() => setIsSubmitting(true)}
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <Label htmlFor="name">Nombre</Label>
              <Input
                id="name"
                name="name"
                placeholder="Tu nombre"
                className="bg-background border-border"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                className="bg-background border-border"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Mensaje</Label>
              <textarea
                id="message"
                name="message"
                placeholder="Contanos brevemente tu caso..."
                rows={4}
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Contanos tu Caso"}
            </Button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <Link href="#servicios" className="hover:text-[#FF8C00] transition-colors">Servicios</Link>
              <Link href="#proyectos" className="hover:text-[#FF8C00] transition-colors">Proyectos</Link>
              <Link href="#equipo" className="hover:text-[#FF8C00] transition-colors">Equipo</Link>
              <Link href="#contacto" className="hover:text-[#FF8C00] transition-colors">Contacto</Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="https://wa.me/5492216902614"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
                aria-label="WhatsApp"
              >
                <img
                  src="https://cdn.simpleicons.org/whatsapp/25D366"
                  alt="WhatsApp"
                  className="h-6 w-6"
                  width={24}
                  height={24}
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
                  className="h-6 w-6"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://linkedin.com/company/fenix-autodev"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <img
                  src="https://cdn.simpleicons.org/linkedin/0077B5"
                  alt="LinkedIn"
                  className="h-6 w-6"
                  width={24}
                  height={24}
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
                  className="h-6 w-6"
                  width={24}
                  height={24}
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
                  className="h-6 w-6"
                  width={24}
                  height={24}
                />
              </a>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
              <Link href="/">
                <Image
                  src="/logo-fenix.png"
                  alt="Fenix Autodev"
                  width={120}
                  height={38}
                  className="h-8 w-auto object-contain"
                />
              </Link>
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} Fenix Autodev. Automatización y Desarrollo a Medida.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Botón flotante WhatsApp */}
      <a
        href="https://wa.me/5492216902614"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110 hover:shadow-xl"
        aria-label="Contactar por WhatsApp"
      >
        <img
          src="https://cdn.simpleicons.org/whatsapp/white"
          alt="WhatsApp"
          className="h-8 w-8"
          width={32}
          height={32}
        />
      </a>
    </div>
  );
}
