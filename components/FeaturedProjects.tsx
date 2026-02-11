"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Stethoscope, Truck, ShoppingCart } from "lucide-react";
import { ASSETS, USO_IMAGENES } from "@/lib/assets";

const PROJECTS = [
  {
    title: "Gestión Clínica Inteligente",
    description:
      "Sistema integral de turnos, historia clínica y recordatorios por WhatsApp para reducir el ausentismo.",
    impact: "40%",
    impactLabel: "menos ausentismo",
    href: "/salud",
    tag: "Salud & Clínicas",
    icon: Stethoscope,
    image: ASSETS.proyectos.salud,
  },
  {
    title: "Logística & Stock en Tiempo Real",
    description:
      "Plataforma de control de inventario y hojas de ruta para distribuidores y corralones.",
    impact: "24/7",
    impactLabel: "visibilidad operativa",
    href: "/pymes",
    tag: "Industria & PyMEs",
    icon: Truck,
    image: ASSETS.proyectos.pymes,
  },
  {
    title: "E-Commerce Mayorista",
    description:
      "Tienda B2B con listas de precios dinámicas y pedidos directos a WhatsApp.",
    impact: "100%",
    impactLabel: "pedidos digitalizados",
    href: "https://wa.me/5492216902614?text=Hola%20Fenix,%20me%20interesa%20una%20tienda%20B2B.",
    tag: "Comercio Electrónico",
    icon: ShoppingCart,
    external: true,
    image: ASSETS.proyectos.ecommerce,
  },
];

export function FeaturedProjects() {
  return (
    <section
      id="proyectos"
      className="pt-12 sm:pt-16 md:pt-24 pb-12 sm:pb-16 md:pb-20 border-t border-border bg-[#020817]"
      aria-labelledby="proyectos-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12 sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            id="proyectos-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 section-title"
          >
            Proyectos destacados
          </h2>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto px-2 sm:px-0">
            Casos de éxito con resultados medibles.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
            >
              <Link
                href={project.href}
                target={project.external ? "_blank" : undefined}
                rel={project.external ? "noopener noreferrer" : undefined}
                className="block h-full group"
              >
                <div className="h-full rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-orange-500/60 hover:shadow-[0_0_40px_rgba(249,115,22,0.12)]">
                  {USO_IMAGENES.proyectos && (
                    <div className="relative aspect-video w-full overflow-hidden">
                      <Image
                        src={project.image}
                        alt={`${project.title} - ${project.tag} | Fénix AutoDev`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <span className="absolute top-4 left-4 text-[10px] font-semibold uppercase tracking-widest text-orange-500 bg-orange-500/10 px-2.5 py-1 rounded">
                        {project.tag}
                      </span>
                    </div>
                  )}
                  <div className="p-4 sm:p-6 space-y-4">
                    {!USO_IMAGENES.proyectos && (
                      <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-orange-500 bg-orange-500/10 px-2.5 py-1 rounded">
                        {project.tag}
                      </span>
                    )}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        {!USO_IMAGENES.proyectos && (
                          <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                            <project.icon className="h-6 w-6 text-orange-500" />
                          </div>
                        )}
                        <h3 className="text-orange-500 font-bold text-lg mb-2">
                          {project.title}
                        </h3>
                        <p className="text-slate-200 text-sm leading-relaxed font-light">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0 text-right">
                        <span className="block text-2xl md:text-3xl font-bold text-orange-500 tabular-nums">
                          {project.impact}
                        </span>
                        <span className="block text-[10px] font-medium uppercase tracking-widest text-slate-500">
                          {project.impactLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
