# Portfolio — Lucas Barberis

Portfolio web personal (Analista en Sistemas / Full Stack Developer).
Diseño dark, estética dev/tech con terminal de estado interactiva en el Hero.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **Tailwind CSS v4**
- **Framer Motion** (animaciones)
- **lucide-react** (iconos)
- TypeScript

## Estructura

```
app/
  layout.tsx            # Root layout, metadata SEO + OpenGraph, fuentes
  page.tsx              # Composición de las secciones
  globals.css           # Tema (tokens), fondo con grid, utilidades
  lib/
    content.ts          # ⬅️ TODO el contenido editable (textos, stack, proyectos, links)
  components/
    header.tsx          # Nav fija, scroll-spy, menú mobile, botón CV
    hero.tsx            # Nombre, rol, tagline, CTAs, badge "Open to Work"
    status-terminal.tsx # Terminal animada + bloque system.status (uptime en vivo)
    about.tsx           # Párrafo de perfil + pilares
    stack.tsx           # Grid de categorías de skills
    projects.tsx        # Cards expandibles (Fast Good) con logros y badges
    contact.tsx         # CTA de contacto (CV / Email / LinkedIn)
    footer.tsx          # Redes, créditos, año
    reveal.tsx          # Wrapper de animación on-scroll (respeta reduced-motion)
    section-heading.tsx # Encabezado de sección con índice tipo terminal
    brand-icons.tsx     # SVG de LinkedIn / GitHub (no vienen en lucide)
public/
  CV_Lucas_Barberis.pdf # ⬅️ PLACEHOLDER — reemplazar por el CV real
```

## Cómo editar el contenido

Casi todo se cambia desde **`app/lib/content.ts`**:

- `SITE`: nombre, rol, ubicación, tagline, texto "Sobre mí", email, LinkedIn, ruta del CV.
- `NAV_LINKS`: ítems del menú (el `id` debe coincidir con el `id` de cada `<section>`).
- `STACK`: categorías de habilidades y sus badges.
- `PROJECTS`: proyectos; cada uno con `tech`, `achievements` y `skills`.

### Reemplazar el CV

Colocá tu PDF real en `public/CV_Lucas_Barberis.pdf` (mismo nombre).
Si cambiás el nombre del archivo, actualizá `SITE.cvPath` en `app/lib/content.ts`.

## Correr localmente

Requisitos: **Node.js 20.9+**.

```bash
npm install
npm run dev
```

Abrir http://localhost:3000

### Build de producción

```bash
npm run build   # genera el sitio (estático)
npm run start   # sirve el build en http://localhost:3000
```

### Lint / type-check

```bash
npm run lint
npx tsc --noEmit
```

## Deploy en Vercel

### Opción A — Dashboard

1. Subí el repo a GitHub.
2. En [vercel.com/new](https://vercel.com/new) → **Import** el repositorio.
3. Vercel detecta Next.js automáticamente. No hace falta configurar nada:
   - Framework preset: **Next.js**
   - Build command: `next build` (default)
   - Output: gestionado por Vercel
4. **Deploy**. Cada push a la rama principal genera un nuevo deploy.

### Opción B — CLI

```bash
npm i -g vercel
vercel        # preview
vercel --prod # producción
```

### Después del deploy

En `app/layout.tsx`, actualizá `siteUrl` con tu dominio final para que
los metadatos de OpenGraph/Twitter apunten a la URL correcta.

## Accesibilidad y detalles

- Dark mode fijo, `color-scheme: dark`.
- Respeta `prefers-reduced-motion` (desactiva animaciones y smooth scroll).
- Navegación por anclas con `scroll-margin-top` y scroll-spy con `IntersectionObserver`.
- HTML semántico, `aria-*` en menú y cards expandibles.
