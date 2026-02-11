"use client";

import { motion } from "framer-motion";
import {
  SiPython,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiAmazonwebservices,
  SiOpenai,
} from "react-icons/si";
import type { IconType } from "react-icons";

const TECH_LOGOS: Array<{
  name: string;
  slug: string;
  Icon: IconType;
  color: string;
}> = [
  { name: "Python", slug: "python", Icon: SiPython, color: "#3776AB" },
  { name: "Next.js", slug: "nextdotjs", Icon: SiNextdotjs, color: "#ffffff" },
  { name: "React", slug: "react", Icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", slug: "nodedotjs", Icon: SiNodedotjs, color: "#339933" },
  { name: "PostgreSQL", slug: "postgresql", Icon: SiPostgresql, color: "#4169E1" },
  { name: "Docker", slug: "docker", Icon: SiDocker, color: "#2496ED" },
  { name: "AWS", slug: "amazonaws", Icon: SiAmazonwebservices, color: "#FF9900" },
  { name: "OpenAI", slug: "openai", Icon: SiOpenai, color: "#412991" },
];

function TechLogo({
  tech,
  index,
}: {
  tech: (typeof TECH_LOGOS)[number];
  index: number;
}) {
  const { Icon, color, name } = tech;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      className="group relative flex-shrink-0"
    >
      <motion.div
        className="relative flex h-20 w-20 sm:h-[90px] sm:w-[90px] items-center justify-center rounded-full bg-[#0f172a] border-2 border-[#1e293b] overflow-hidden cursor-default"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Resplandor naranja sutil siempre visible - pulsa */}
        <span
          className="absolute inset-0 rounded-full opacity-40 animate-[glow-pulse_3s_ease-in-out_infinite]"
          style={{
            boxShadow: "inset 0 0 20px rgba(249,115,22,0.15)",
          }}
          aria-hidden
        />

        {/* Borde naranja que rota - visible en hover, intensifica */}
        <span
          className="absolute -inset-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-hidden
        >
          <span
            className="absolute inset-0 rounded-full animate-border-beam"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 200deg, rgba(249,115,22,0.5) 250deg, rgba(249,115,22,0.95) 270deg, rgba(249,115,22,0.5) 290deg, transparent 320deg)",
            }}
          />
          <span className="absolute inset-[2px] rounded-full bg-[#0f172a]" />
        </span>

        {/* Glow externo intenso en hover */}
        <span
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            boxShadow:
              "0 0 32px rgba(249,115,22,0.4), 0 0 48px rgba(249,115,22,0.2), inset 0 0 16px rgba(249,115,22,0.08)",
          }}
          aria-hidden
        />

        {/* Contenedor del logo - centrado, carga instantánea (SVG inline) */}
        <span className="relative z-10 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center [&>svg]:shrink-0 [&>svg]:w-10 [&>svg]:h-10 sm:[&>svg]:w-12 sm:[&>svg]:h-12">
          <Icon color={color} aria-label={name} />
        </span>
      </motion.div>
    </motion.div>
  );
}

export function TechStackSection() {
  return (
    <section
      id="tecnologias"
      className="relative py-12 sm:py-16 md:py-24 border-t border-border bg-[#020817] overflow-hidden"
      aria-labelledby="tech-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            id="tech-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 section-title"
          >
            Tecnologías de Vanguardia
          </h2>
          <p className="text-white text-base sm:text-lg">
            Nuestro Stack
          </p>
        </motion.div>

        {/* Hilera horizontal - scroll en mobile, centrado en desktop */}
        <div className="overflow-x-auto overflow-y-hidden pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:pb-0 scrollbar-hide">
          <div className="flex flex-row items-center justify-center gap-6 sm:gap-8 min-w-max sm:min-w-0 sm:flex-wrap sm:justify-center">
            {TECH_LOGOS.map((tech, i) => (
              <TechLogo key={tech.slug} tech={tech} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
