"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/faq-data";
import { cn } from "@/lib/utils";

export type FaqItem = (typeof FAQ_ITEMS)[number];

interface FaqSectionProps {
  items: readonly FaqItem[];
}

/**
 * Genera el JSON-LD para FAQPage (Schema.org).
 */
function getFaqJsonLd(items: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function FaqSection({ items }: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const jsonLd = getFaqJsonLd(items);
  const openItem = openId ? items.find((i) => i.id === openId) : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        {/* Grid 4 columnas x 2 filas en desktop - coherente con Metodología e Impacto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 items-stretch">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
              className={cn(
                "group flex h-full min-h-[90px] w-full flex-col rounded-xl border bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-md p-4 text-left transition-all duration-300",
                "border-white/10 hover:border-orange-500/70 hover:shadow-[0_0_40px_rgba(249,115,22,0.14)]",
                openId === item.id && "border-orange-500/70 shadow-[0_0_40px_rgba(249,115,22,0.14)]"
              )}
            >
              <div className="flex flex-1 w-full items-start gap-2">
                <CheckCircle2
                  className={cn(
                    "mt-0.5 h-4 w-4 shrink-0 text-orange-500 transition-transform",
                    openId === item.id && "scale-110"
                  )}
                />
                <span className="flex-1 min-w-0 text-sm font-bold leading-snug text-orange-500">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 text-orange-500/70 transition-transform duration-200",
                    openId === item.id && "rotate-180"
                  )}
                />
              </div>
            </button>
          ))}
        </div>

        {/* Fila inferior: contenido desplegable */}
        <AnimatePresence mode="wait">
          {openItem ? (
            <motion.div
              key={openItem.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="rounded-xl border border-orange-500/30 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-md p-5 sm:p-6">
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  {openItem.answer}
                </p>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
