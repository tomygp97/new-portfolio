# AGENTS.md — Portfolio de Tomás Gutiérrez

Contexto para cualquier agente de IA (Cursor, Claude, etc.) que trabaje en este repo.

## Qué es

Landing personal / portfolio. **Solo frontend estático**: sin backend, sin API routes, sin base de datos, sin variables de entorno. Desplegado en **Netlify** (build automático en cada push a `main`), dominio propio con DNS en Netlify.

## Stack

- Next.js 14 (App Router) + React 18 + TypeScript
- Tailwind CSS 3
- Framer Motion (animaciones)
- `lucide-react` y `react-icons` (íconos)
- Metadata con la API `metadata` de Next; `opengraph-image.png`, `apple-icon.png`, `robots.ts` y `sitemap.ts` en `app/`

## Estructura

```
app/
  layout.tsx          # layout raíz, metadata SEO/OG, fuente Inter (next/font/google), MotionProvider
  page.tsx            # server component: compone las secciones en orden
  sections/           # Home, Technologies, Projects, WorkExperience, Contact ('use client' si usan motion)
  components/         # layout/ (Header, Footer), projects/ProjectCard, SectionTitle, MotionProvider
  constants/index.ts  # TODO el contenido (datos, sin JSX): siteConfig, hero, navLinks, technologies, experiences, contactInfo, projects, textos de UI
  types/content.ts    # tipos de todo el contenido
assets/projects/      # imágenes de proyectos (importadas desde constants)
public/               # íconos SVG, foto de perfil, background, CV en PDF
docs/profile.md        # fuente de verdad de los datos personales (crear si no existe)
```

## Comandos

- `npm run dev`: servidor local en http://localhost:3000
- `npm run build`: **tiene que pasar antes de dar cualquier tarea por terminada**
- `npm run lint`

## Reglas

1. **El contenido vive en `app/constants/`**, nunca hardcodeado en componentes. Si encontrás texto de contenido en un componente, movelo a constants.
2. **Los datos personales salen de `docs/profile.md`.** No inventes experiencia, fechas, métricas, tecnologías ni links. Si falta un dato, preguntá.
3. **Mantener el sitio estático.** No agregues API routes, server actions, `getServerSideProps`, middleware ni dependencias de runtime de servidor sin consultar.
4. **No agregues dependencias** sin justificarlo. Preferí lo que ya está instalado.
5. **Imágenes:** usar `next/image` (no `next/legacy/image`), comprimidas (WebP/AVIF, idealmente menos de 300 KB), con `alt` descriptivo.
6. **Responsive primero:** verificar en 375px (móvil), 768px y 1280px+.
7. **Accesibilidad:** HTML semántico, contraste AA, foco visible, `aria-label` en links que son solo íconos.
8. **Cambios chicos y revisables:** un tema por commit, con mensajes claros.
9. **Antes de cambios grandes** (rediseño, reestructura, nuevas secciones), proponer un plan y esperar aprobación.

## Flujo de Git

- `main` = producción (Netlify despliega a https://tomasgdev.com.ar). **Nunca commitear ni pushear directo a `main`.**
- `development` = integración. Netlify publica un preview en `development--<sitio>.netlify.app`.
- Para cada tarea: partir de `development` actualizado → rama `feat/...`, `fix/...` o `chore/...` → commits chicos → merge (o PR) a `development`.
- Pasar `development` → `main` **solo cuando el usuario lo pida explícitamente**, después de revisar el preview.
- Antes de cambiar de rama, verificar `git status` limpio. No usar `push --force` ni reescribir historia de ramas compartidas.

## Deuda conocida

- Next 14.2.x tiene advisories que solo se resuelven con Next 15/16 (cambio de major, pendiente de decisión).
- Los links de proyectos de ComercioSJ y LavApp están caídos hasta migrarlos a Netlify.
- Contenido personal desactualizado hasta completar `docs/profile.md` (fase D de la revisión).
