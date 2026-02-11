"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
  const jsonLd = getFaqJsonLd(items);

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
      >
        <Accordion type="single" collapsible className="w-full">
          {items.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border-b border-white/10 last:border-b-0"
            >
              <AccordionTrigger
                className={cn(
                  "flex items-start gap-3 py-4 sm:py-5 min-h-[52px] text-left hover:no-underline",
                  "text-orange-500 font-medium"
                )}
              >
                <CheckCircle2
                  className="h-5 w-5 shrink-0 text-orange-500 mt-0.5"
                  aria-hidden
                />
                <span className="font-medium">{item.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-slate-200 text-base leading-relaxed pl-8 pr-4 pb-5 pt-0">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </>
  );
}
