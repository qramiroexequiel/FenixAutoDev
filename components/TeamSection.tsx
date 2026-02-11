"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ASSETS } from "@/lib/assets";

const MEMBERS: Array<{
  name: string;
  role: string;
  bio: string;
  initials: string;
  badge: string;
  image: string | null;
}> = [
  {
    name: "Ramiro Quevedo",
    role: "CTO & Co-Founder",
    bio: "Arquitecto de Sistemas de Alta Disponibilidad. Especialista en Ingeniería de Datos y modelos de IA orientados a la eficiencia operativa.",
    initials: "RQ",
    badge: "CORE-ENGINEERING",
    image: ASSETS.equipo.ramiro,
  },
  {
    name: "José",
    role: "CPO & Co-Founder",
    bio: "Estratega de Producto y Optimización de Procesos. Experto en transformar arquitecturas de negocio complejas en soluciones digitales intuitivas.",
    initials: "J",
    badge: "PRODUCT-STRATEGY",
    image: ASSETS.equipo.jose,
  },
  {
    name: "Hernán",
    role: "CDO & Co-Founder",
    bio: "Director de Implementación y Seguridad. Especialista en despliegue de infraestructura crítica, integridad de datos y continuidad de negocio.",
    initials: "H",
    badge: "INFRASTRUCTURE-SECURITY",
    image: ASSETS.equipo.hernan,
  },
];

export function TeamSection() {
  return (
    <section
      id="equipo"
      className="py-12 sm:py-16 md:py-24 bg-[#020817] border-t border-border"
      aria-labelledby="equipo-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            id="equipo-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 px-2 sm:px-0 section-title"
          >
            Liderazgo con Experiencia Real
          </h2>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto px-2 sm:px-0">
            No solo escribimos código. Entendemos tu negocio porque venimos de
            ahí.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto items-stretch">
          {MEMBERS.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="group flex"
            >
              <motion.div
                className="group/card relative flex flex-col w-full rounded-xl border border-white/10 bg-[#020817]/50 backdrop-blur-sm p-6 sm:p-8 text-center min-h-[320px] sm:min-h-[360px] overflow-hidden transition-all duration-300 ease-out hover:border-orange-500/60 hover:shadow-[0_0_40px_rgba(249,115,22,0.15),0_8px_30px_rgba(249,115,22,0.12)]"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Contenedor avatar con glow naranja en hover */}
                <div className="relative shrink-0 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  {/* Glow naranja detrás de la foto (visible en hover) */}
                  <div
                    className="absolute inset-0 rounded-full bg-orange-500/40 blur-xl scale-150 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
                    aria-hidden
                  />
                  {/* Avatar circular - colores originales, borde sutil, scale en hover */}
                  <motion.div
                    className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white/50 flex items-center justify-center bg-[#020817]/80 transition-transform duration-300 ease-out group-hover/card:scale-110"
                  >
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={`${member.name} - ${member.role} en Fénix AutoDev`}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center text-white font-semibold text-2xl tracking-tight"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(249,115,22,0.35) 0%, rgba(249,115,22,0.1) 100%)",
                        }}
                      >
                        {member.initials}
                      </div>
                    )}
                  </motion.div>
                </div>

                <h3 className="font-bold text-orange-500 text-lg mb-1">
                  {member.name}
                </h3>

                {/* Badge tecnológico: fondo oscuro, borde naranja, letra naranja */}
                <span className="inline-block font-mono text-[10px] tracking-[0.2em] uppercase mb-4 shrink-0 px-2.5 py-1 rounded border border-orange-500/60 bg-[#020817]/90 text-orange-500">
                  {member.badge}
                </span>

                <p className="text-orange-500 text-sm font-semibold mb-3 shrink-0">
                  {member.role}
                </p>

                <p className="text-slate-200 text-sm leading-relaxed font-light flex-1">
                  {member.bio}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
