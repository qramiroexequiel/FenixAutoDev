"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ASSETS } from "@/lib/assets";

const MEMBERS = [
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
    image: null,
  },
];

export function TeamSection() {
  return (
    <section
      id="equipo"
      className="py-24 bg-[#020817] border-t border-border"
      aria-labelledby="equipo-heading"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            id="equipo-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Liderazgo con Experiencia Real
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            No solo escribimos código. Entendemos tu negocio porque venimos de
            ahí.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {MEMBERS.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="group flex"
            >
              <div className="flex flex-col w-full rounded-xl border border-white/5 bg-[#020817]/50 backdrop-blur-sm p-8 text-center transition-all duration-500 hover:border-[#F57C00] hover:shadow-[0_8px_30px_rgba(245,124,0,0.12)] hover:-translate-y-1 min-h-[360px]">
                {/* Avatar: foto o iniciales con gradiente */}
                <div className="relative shrink-0 w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden border-2 border-[#F57C00]/40 flex items-center justify-center bg-[#020817]/80">
                  {member.image ? (
                    <div className="absolute inset-0 transition-[filter] duration-300 group-hover:grayscale-0 grayscale">
                      <Image
                        src={member.image}
                        alt={`${member.name} - ${member.role} en Fénix AutoDev`}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center text-white font-semibold text-2xl tracking-tight"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(245,124,0,0.35) 0%, rgba(245,124,0,0.1) 100%)",
                      }}
                    >
                      {member.initials}
                    </div>
                  )}
                </div>

                <h3 className="font-bold text-white text-lg mb-1">
                  {member.name}
                </h3>

                <span className="inline-block font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase mb-4 shrink-0">
                  [ {member.badge} ]
                </span>

                <p className="text-[#F57C00] text-sm font-semibold mb-3 shrink-0">
                  {member.role}
                </p>

                <p className="text-slate-400 text-sm leading-relaxed font-light flex-1">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
