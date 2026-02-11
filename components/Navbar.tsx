"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { CTAButton } from "@/components/CTAButton";
import { NavLink } from "@/components/NavLink";
import { NAV_LINKS } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const WHATSAPP_URL =
  "https://wa.me/5492216902614?text=Hola%20Fenix%20AutoDev,%20quisiera%20consultar%20por%20sus%20servicios.";

const BRAND_DESCRIPTION = "Automatización y Software a Medida";

const SCROLL_THRESHOLD = 50;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  const handleLogoClick = useCallback(
    (e: React.MouseEvent) => {
      closeMenu();
      if (isHome) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    [isHome, closeMenu]
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "border-b border-border/80 bg-[#020817]/90 backdrop-blur-lg shadow-lg shadow-black/5"
          : "border-b border-transparent bg-transparent backdrop-blur-none shadow-none"
      )}
      role="banner"
    >
      <nav
        className="container mx-auto px-4 sm:px-6 h-16 sm:h-20 md:h-24 flex items-center justify-between gap-2 sm:gap-4"
        aria-label="Navegación principal"
      >
        {/* Brand + Nav + CTA - eje central compartido */}
        <div className="flex items-center justify-between gap-4 flex-1 min-w-0">
          <BrandLogo
            subtitle={BRAND_DESCRIPTION}
            onClick={handleLogoClick}
            priority
          />

          {/* Desktop navigation - alineada con el título */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1 shrink-0">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href + link.label}
                href={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            ))}
            <CTAButton href={WHATSAPP_URL} className="ml-2 xl:ml-3">
              Quiero automatizar
            </CTAButton>
          </div>

          {/* Tablet/Mobile: CTA + Hamburger (touch target min 44x44) */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-3 shrink-0">
            <CTAButton href={WHATSAPP_URL} className="px-4 py-3 min-h-[44px] sm:py-2">
              Quiero automatizar
            </CTAButton>
            <button
              type="button"
              onClick={() => setIsOpen((o) => !o)}
              className="min-h-[44px] min-w-[44px] p-3 -mr-1 flex items-center justify-center rounded-lg text-slate-200 hover:text-white hover:bg-white/5 hover:border hover:border-white/10 border border-transparent transition-all duration-500"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isOpen ? (
                <X className="h-6 w-6 shrink-0" aria-hidden />
              ) : (
                <Menu className="h-6 w-6 shrink-0" aria-hidden />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-out",
          isOpen ? "max-h-[340px] opacity-100" : "max-h-0 opacity-0"
        )}
        role="region"
        aria-label="Menú de navegación móvil"
      >
        <div className="border-t border-border bg-[#020817]/95 backdrop-blur-lg px-4 sm:px-6 py-4 space-y-0">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block px-4 py-4 min-h-[48px] text-base"
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-3 mt-3 border-t border-border">
            <CTAButton href={WHATSAPP_URL} onClick={closeMenu} fullWidth>
              Quiero automatizar
            </CTAButton>
          </div>
        </div>
      </div>
    </header>
  );
}
