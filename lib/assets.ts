/**
 * Rutas de assets – Actualizá aquí cuando tengas las imágenes reales.
 * Todas las rutas son relativas a /public.
 *
 * USO_IMAGENES: Poné true cuando hayas subido las fotos a /public.
 * Mientras sea false, se muestran íconos/iniciales como fallback.
 */
export const USO_IMAGENES = {
  proyectos: false,
  equipo: false,
} as const;

export const ASSETS = {
  logo: {
    nav: "/logo-fenix.png",
    footer: "/logo-fenix.png",
  },
  hero: {
    poster: "/banner-fenix.jpg",
    video: "/hero-video.mp4",
  },
  proyectos: {
    salud: "/proyectos/proyecto-salud.webp",
    pymes: "/proyectos/proyecto-pymes.webp",
    ecommerce: "/proyectos/proyecto-ecommerce.webp",
  },
  equipo: {
    ramiro: "/foto perfil ramiro.jpeg",
    jose: "/foto perfil jose .jpeg",
    hernan: "/foto perfil de hernan.jpeg",
  },
  og: "/og/og-image.jpg",
} as const;
