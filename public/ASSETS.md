# Guía de Assets – Fénix AutoDev

## Estructura de /public (actual)

```
public/
├── logo-fenix.png              ← Ya existe (Navbar + Footer)
├── banner-fenix.jpg            ← Ya existe (poster del video)
├── hero-video.mp4              ← Ya existe
├── proyectos/
│   ├── proyecto-salud.webp     ← NUEVO: screenshot Gestión Clínica
│   ├── proyecto-pymes.webp     ← NUEVO: screenshot Logística
│   └── proyecto-ecommerce.webp ← NUEVO: screenshot E-Commerce B2B
├── equipo/
│   ├── equipo-ramiro.webp      ← NUEVO: foto Ramiro Quevedo
│   ├── equipo-jose.webp        ← NUEVO: foto José
│   └── equipo-hernan.webp      ← NUEVO: foto Hernán
└── og/
    └── og-image.jpg            ← NUEVO: para redes sociales (OpenGraph)
```

Las carpetas `proyectos/`, `equipo/` y `og/` ya están creadas. Solo falta subir los archivos.

---

## Listado detallado de assets

### 1. Logo (ya existe)

| Archivo | Dimensiones | Ubicación en código | Formato | Notas |
|---------|-------------|---------------------|---------|-------|
| `logo-fenix.png` | 280×88 px (2x) | `app/page.tsx` L48, L469<br>`app/salud/page.tsx` L21, L244<br>`app/pymes/page.tsx` L21, L235 | PNG | Fondo transparente. Se usa con `width={140}` nav y `width={120}` footer. SVG sería ideal para nitidez en cualquier tamaño. |

---

### 2. Hero / Video

| Archivo | Dimensiones | Ubicación en código | Formato | Notas |
|---------|-------------|---------------------|---------|-------|
| `banner-fenix.jpg` | 1920×1080 px | `app/page.tsx` L68 `poster=` | JPG 80% | Frame estático del video. Debe coincidir con el primer frame o uno representativo. |
| `hero-video.mp4` | 1920×1080 px | `app/page.tsx` L71 `<source>` | MP4 H.264 | Mantener < 5 MB. Comprimir con HandBrake o similar. |

---

### 3. Proyectos destacados (FeaturedProjects) – NUEVOS

| Archivo | Dimensiones | Ubicación en código | Formato | Notas |
|---------|-------------|---------------------|---------|-------|
| `proyecto-salud.webp` | 600×360 px (16:9) | `components/FeaturedProjects.tsx` – tarjeta 1 | WebP | Screenshot de dashboard clínico, turnos, o UI del sistema. Evitar texto muy pequeño. |
| `proyecto-pymes.webp` | 600×360 px (16:9) | `components/FeaturedProjects.tsx` – tarjeta 2 | WebP | Screenshot de stock, logística o hojas de ruta. |
| `proyecto-ecommerce.webp` | 600×360 px (16:9) | `components/FeaturedProjects.tsx` – tarjeta 3 | WebP | Screenshot de tienda B2B o catálogo. Si no hay proyecto real, usar mockup genérico. |

**Formato WebP:** Mejor compresión que JPG/PNG. Next.js lo optimiza automáticamente. Fallback: JPG si no tenés WebP.

---

### 4. Equipo (TeamSection) – NUEVOS

| Archivo | Dimensiones | Ubicación en código | Formato | Notas |
|---------|-------------|---------------------|---------|-------|
| `equipo-ramiro.webp` | 200×200 px | `components/TeamSection.tsx` – avatar Ramiro | WebP | Cuadrada, recorte circular. Fondo neutro o blur. |
| `equipo-jose.webp` | 200×200 px | `components/TeamSection.tsx` – avatar José | WebP | Mismo estilo que Ramiro. |
| `equipo-hernan.webp` | 200×200 px | `components/TeamSection.tsx` – avatar Hernán | WebP | Mismo estilo. |

**Formato WebP/JPG:** Fotos de personas. WebP reduce peso. Si no hay WebP, JPG 85% está bien.

---

### 5. OpenGraph (redes sociales) – NUEVO

| Archivo | Dimensiones | Ubicación en código | Formato | Notas |
|---------|-------------|---------------------|---------|-------|
| `og-image.jpg` | 1200×630 px | `app/layout.tsx` metadata `openGraph.images` | JPG 80% | Imagen que se ve al compartir en WhatsApp, Facebook, LinkedIn. Incluir logo + frase tipo "Automatización y Software a Medida". |

---

## Resumen: qué necesitás preparar

| Prioridad | Asset | Dimensiones | Formato |
|-----------|-------|-------------|---------|
| Alta | Fotos del equipo (3) | 200×200 px | WebP o JPG |
| Alta | Screenshots proyectos (3) | 600×360 px | WebP |
| Media | OG Image | 1200×630 px | JPG |
| Ya tenés | Logo, banner, video | — | — |

---

## Rutas en el código (para actualizar)

**Todo está centralizado en `lib/assets.ts`.** Cuando tengas los archivos:

1. Subilos a la carpeta indicada en la estructura de arriba.
2. En `lib/assets.ts` cambiá `USO_IMAGENES.proyectos = true` y/o `USO_IMAGENES.equipo = true`.
3. Si usás nombres distintos, actualizá las rutas en `ASSETS.proyectos` y `ASSETS.equipo`.

No hace falta tocar los componentes.

---

## Auditoría breve – estado actual

### Lo que funciona bien
- **Estructura:** Hero → TechTicker → Proyectos → Beneficios → Servicios → Proceso → Equipo → FAQ → Contacto → Footer.
- **Espaciado:** `py-24` consistente.
- **Colores:** Naranja `#FF8C00` y `#f97316` coherentes.
- **Responsive:** Grids y layout pensados para móvil.

### Detalles a mejorar cuando subas imágenes reales
- **Proyectos:** Las tarjetas con imagen tendrán un bloque visual 16:9 arriba. Revisar que el texto siga legible y que las imágenes tengan buen contraste.
- **Equipo:** Fotos circulares 80×80 px. Cuidar que el encuadre funcione en círculo (rostro centrado).
- **Logo:** Si tenés versión SVG, reemplazá el PNG en `ASSETS.logo` para mejor nitidez en pantallas retina.
