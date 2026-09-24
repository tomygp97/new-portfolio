# AGENTS.md — Portfolio de Tomás Gutiérrez

Contexto para cualquier agente de IA (Cursor, Claude, etc.) que trabaje en este repo.

## Qué es

Landing personal / portfolio. **Solo frontend estático**: sin backend, sin API routes, sin base de datos, sin variables de entorno. Desplegado en **Netlify** (build automático en cada push a `main`), dominio propio con DNS en Netlify.

## Stack

- Next.js 14 (App Router) + React 18 + TypeScript
- Tailwind CSS 3
- Framer Motion (animaciones)
- `lucide-react` y `react-icons` (íconos)
- `@svgr/webpack` configurado en `next.config.js` (los `.svg` importados se vuelven componentes)

## Estructura

```
app/
  layout.tsx          # layout raíz, <head>, fuente Inter (next/font/google)
  page.tsx            # compone las secciones en orden
  sections/           # Home, Technologies, Projects, WorkExperience(c), Contact
  components/         # layout/ (Header, Footer), projects/ProjectCard, SectionTitle
  constants/index.js  # TODO el contenido: technologies, experiences, contactInfo, projects
  types/project.ts    # tipo Project
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

- `main` = producción (Netlify despliega a tudominio.com). **Nunca commitear ni pushear directo a `main`.**
- `develop` = integración. Netlify publica un preview en `develop--<sitio>.netlify.app`.
- Para cada tarea: partir de `develop` actualizado → rama `feat/...`, `fix/...` o `chore/...` → commits chicos → merge (o PR) a `develop`.
- Pasar `develop` → `main` **solo cuando el usuario lo pida explícitamente**, después de revisar el preview.
- Antes de cambiar de rama, verificar `git status` limpio. No usar `push --force` ni reescribir historia de ramas compartidas.

## Deuda conocida (a resolver en la revisión)

- `app/sections/WorkExperiencec.tsx` tiene un typo en el nombre.
- `app/constants/index.js` es JS con JSX; conviene pasarlo a `.tsx` y tiparlo.
- `constants` usa `next/legacy/image`.
- `assets/projects/botto-background.png` pesa ~4 MB.
- Metadatos pobres: `<title>` "Tomi Portfolio" en `<head>` manual, sin description ni Open Graph (usar la API `metadata` de Next).
- `page.tsx` es `'use client'` completo solo por la animación de entrada.
- Hay dos favicons (`favicon.ico` y `favicon2.ico`) y `public/background.jpg` pesa ~520 KB.