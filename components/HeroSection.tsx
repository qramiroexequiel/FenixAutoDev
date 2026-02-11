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
    <section className="w-full mt-4 sm:mt-6 md:mt-[3.75rem]" aria-label="Hero">
      {/* Bloque superior: video a pantalla completa de ancho */}
      <div className="relative w-full h-[50vh] min-h-[280px] sm:h-[60vh] md:h-[70vh] overflow-hidden">
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
      <div id="hero-message" className="bg-[#020817] px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        <motion.div
          className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 sm:mb-8 text-balance text-orange-500">
            Sistemas de Alta Precisión para Empresas Exigentes
          </h1>

          <p className="text-slate-200 text-base sm:text-lg md:text-xl lg:text-2xl font-light max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed md:leading-loose">
            Sistemas a medida para operaciones que no admiten margen de error.
            Diseñamos e implementamos software e inteligencia artificial que
            automatizan procesos críticos, garantizan consistencia operativa y
            permiten escalar con control total.
          </p>

          <div className="flex justify-center w-full sm:w-auto">
            <CTAButton href={WHATSAPP_URL} className="w-full sm:w-auto px-8 py-3.5 text-base min-h-[48px] justify-center">
              Agendar Consultoría Gratuita
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
