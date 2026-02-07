"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Stethoscope, Truck, ShoppingCart } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ASSETS, USO_IMAGENES } from "@/lib/assets";

const PROJECTS = [
  {
    title: "Gestión Clínica Inteligente",
    description:
      "Sistema integral de turnos, historia clínica y recordatorios por WhatsApp para reducir el ausentismo un 40%.",
    href: "/salud",
    tag: "Salud & Clínicas",
    icon: Stethoscope,
    image: ASSETS.proyectos.salud,
  },
  {
    title: "Logística & Stock en Tiempo Real",
    description:
      "Plataforma de control de inventario y hojas de ruta para distribuidores y corralones.",
    href: "/pymes",
    tag: "Industria & PyMEs",
    icon: Truck,
    image: ASSETS.proyectos.pymes,
  },
  {
    title: "E-Commerce Mayorista",
    description:
      "Tienda B2B con listas de precios dinámicas y pedidos directos a WhatsApp.",
    href: "https://wa.me/5492216902614?text=Hola%20Fenix,%20me%20interesa%20una%20tienda%20B2B.",
    tag: "Comercio Electrónico",
    icon: ShoppingCart,
    external: true,
    image: ASSETS.proyectos.ecommerce,
  },
];

export function FeaturedProjects() {
  return (
    <section className="py-24 border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Proyectos destacados
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluciones reales para problemas reales.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={project.href}
                target={project.external ? "_blank" : undefined}
                rel={project.external ? "noopener noreferrer" : undefined}
                className="block h-full"
              >
                <Card className="h-full bg-card border-border hover:border-[#F57C00]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,124,0,0.08)] group overflow-hidden">
                  {USO_IMAGENES.proyectos && (
                    <div className="relative aspect-video w-full overflow-hidden bg-muted">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <span className="absolute top-3 left-3 text-xs font-medium uppercase tracking-wider text-[#F57C00] bg-[#020817]/80 px-2 py-1 rounded">
                        {project.tag}
                      </span>
                    </div>
                  )}
                  <CardHeader className="space-y-4">
                    {!USO_IMAGENES.proyectos && (
                      <>
                        <span className="text-xs font-medium uppercase tracking-wider text-[#F57C00]">
                          {project.tag}
                        </span>
                        <div className="w-14 h-14 rounded-xl bg-[#F57C00]/10 flex items-center justify-center group-hover:bg-[#F57C00]/20 transition-colors">
                          <project.icon className="h-7 w-7 text-[#F57C00]" />
                        </div>
                      </>
                    )}
                    <CardTitle className="text-foreground text-xl group-hover:text-[#F57C00] transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-slate-300 leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
