"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { ASSETS } from "@/lib/assets";

const WHATSAPP_URL =
  "https://wa.me/5492216902614?text=Hola%20Fenix%20AutoDev,%20quisiera%20consultar%20por%20sus%20servicios.";

export function HeroSection() {
  const scrollToContent = () => {
    const hero = document.getElementById("hero-message");
    hero?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full mt-8 md:mt-[3.75rem]" aria-label="Hero">
      {/* Bloque superior: video a pantalla completa de ancho */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={ASSETS.hero.video} type="video/mp4" />
        </video>

        {/* Flecha de scroll guía */}
        <motion.button
          type="button"
          onClick={scrollToContent}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-1 transition-opacity"
          aria-label="Ver más contenido"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="h-10 w-10" strokeWidth={2} />
        </motion.button>
      </div>

      {/* Bloque inferior: mensaje de marca sobre fondo sólido - sin gap */}
      <div id="hero-message" className="bg-[#020817] px-4 py-24">
        <motion.div
          className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-8 text-balance text-white">
            Sistemas de Alta Precisión para Empresas Exigentes
          </h1>

          <p className="text-slate-400 text-xl md:text-2xl font-light max-w-4xl mx-auto mb-12 leading-loose">
            Sistemas a medida para operaciones que no admiten margen de error.
            Diseñamos e implementamos software e inteligencia artificial que
            automatizan procesos críticos, garantizan consistencia operativa y
            permiten escalar con control total.
          </p>

          <div className="flex justify-center">
            <CTAButton href={WHATSAPP_URL} className="px-8 py-3.5 text-base">
              Agendar Consultoría Gratuita
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
