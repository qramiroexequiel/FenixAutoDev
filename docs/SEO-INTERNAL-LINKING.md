# Estrategia de Internal Linking - Fénix AutoDev

Este documento describe la estrategia de enlaces internos implementada para distribuir autoridad desde la home hacia las subpáginas y reforzar la arquitectura de la información.

## Objetivo

- Mejorar la **autoridad de las subpáginas** (/pymes, /salud) mediante links desde la página principal.
- Facilitar el **crawleo** de Google a todas las secciones relevantes.
- Reforzar la **relevancia temática** entre servicios relacionados (PyMEs ↔ Clínicas).

---

## Mapa de Enlaces Implementado

### Desde la Home (/)

| Enlace | Destino | Ubicación |
|--------|---------|-----------|
| Servicios | /#servicios | Footer, Navbar |
| Software para PyMEs | /pymes | Footer, Proyectos Destacados |
| Software para Clínicas | /salud | Footer, Proyectos Destacados |
| Equipo | /#equipo | Footer |
| FAQ | /#faq | Footer |

### Desde PyMEs (/pymes)

| Enlace | Destino | Ubicación |
|--------|---------|-----------|
| Inicio | / | Navbar |
| Servicios | /#servicios | Navbar |
| Software Clínicas | /salud | Navbar |
| FAQ | /#faq | Footer |
| Software para Clínicas | /salud | Footer |

### Desde Salud (/salud)

| Enlace | Destino | Ubicación |
|--------|---------|-----------|
| Inicio | / | Navbar |
| Servicios | /#servicios | Navbar |
| Software PyMEs | /pymes | Navbar |
| FAQ | /#faq | Footer |
| Software para PyMEs | /pymes | Footer |

---

## Patrones Aplicados

1. **Hub-and-Spoke**: La home actúa como hub central; todas las subpáginas enlazan de vuelta a / y a /#servicios.
2. **Cross-linking entre servicios**: PyMEs ↔ Salud se enlazan mutuamente para usuarios que buscan soluciones complementarias.
3. **Footer consistente**: Cada página incluye los mismos enlaces clave para coherencia y crawl.
4. **Anchor links**: Enlaces a secciones específicas (#servicios, #equipo, #faq) mejoran la UX y mantienen al usuario en la home cuando es relevante.

---

## Recomendaciones Futuras

- Si se agregan más páginas de servicios (ej. /ecommerce), incluirlas en el footer de la home y en el navbar de las demás.
- Considerar un breadcrumb en subpáginas: Inicio > PyMEs (o Salud).
- Mantener 2-4 enlaces contextuales por página para no diluir el PageRank.
