"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Github, Instagram, Mail, MessageCircle } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { NAV_LINKS } from "@/lib/navigation";

const EMAIL = "fenixautodev@gmail.com";
const WHATSAPP_URL =
  "https://wa.me/5492216902614?text=Hola%20Fenix%20AutoDev,%20quisiera%20consultar%20por%20sus%20servicios.";
const GITHUB_URL = "https://github.com/fenixautodev";
const INSTAGRAM_URL = "https://instagram.com/fenixautodev";

const sectionTitle =
  "text-[10px] uppercase tracking-[0.2em] text-orange-500 font-bold mb-5";
const linkBase =
  "text-sm text-slate-200 hover:text-orange-500 transition-colors duration-200 inline-flex items-center gap-2 py-2 sm:py-0 min-h-[44px] sm:min-h-0";

interface ContactItem {
  label: string;
  href: string;
  icon: LucideIcon;
  external: boolean;
}

const contactItems: ContactItem[] = [
  {
    label: "fenixautodev@gmail.com",
    href: `mailto:${EMAIL}`,
    icon: Mail,
    external: false,
  },
  {
    label: "+54 9 221 690-2614",
    href: WHATSAPP_URL,
    icon: MessageCircle,
    external: true,
  },
  {
    label: "github.com/fenixautodev",
    href: GITHUB_URL,
    icon: Github,
    external: true,
  },
  {
    label: "@fenixautodev",
    href: INSTAGRAM_URL,
    icon: Instagram,
    external: true,
  },
];

export function Footer() {
  return (
    <footer
      className="bg-[#020817] border-t border-white/5"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* 3 columnas: Identidad, Menú, Contacto & Redes | Mobile: 1 col, Tablet: 2, Desktop: 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-8 mb-10 sm:mb-12">
          {/* Columna 1: Identidad (alineado a la izquierda) */}
          <div className="flex justify-start">
            <BrandLogo
              subtitle="Sistemas de alta precisión para operaciones críticas."
              subtitleAlwaysVisible
            />
          </div>

          {/* Columna 2: Menú */}
          <div>
            <h3 className={sectionTitle}>Menú</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={linkBase}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto & Redes */}
          <div>
            <h3 className={sectionTitle}>Contacto & Redes</h3>
            <ul className="space-y-3">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <Icon className="h-4 w-4 shrink-0" />
                    {item.label}
                  </>
                );
                return (
                  <li key={item.label}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkBase}
                        aria-label={item.label}
                      >
                        {content}
                      </a>
                    ) : (
                      <a href={item.href} className={linkBase}>
                        {content}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 text-[11px] text-slate-600">
          <span>© 2026 Fenix AutoDev. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
