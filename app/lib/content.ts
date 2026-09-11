/**
 * Contenido central del portfolio.
 * Editá este archivo para actualizar textos, stack, proyectos y enlaces:
 * los componentes leen todo desde acá.
 */

export const SITE = {
  name: "Lucas Barberis",
  role: "Analista en Sistemas",
  altRole: "Full Stack Developer",
  location: "Córdoba, Argentina",
  tagline:
    "Análisis, desarrollo y optimización de soluciones de software a medida.",
  about:
    "Enfocado en el ciclo completo del desarrollo de software, desde el levantamiento de requerimientos y diseño de arquitectura relacional hasta la resolución de problemas complejos en producción. Mi enfoque se centra en entender las reglas de negocio para construir soluciones robustas, escalables y orientadas a la eficiencia operativa.",
  status: "Open to Work",
  email: "lucasbarberis0500@gmail.com",
  linkedin: "https://www.linkedin.com/in/lucas-barberis-a4844539b",
  cvPath: "/CV_Lucas_Barberis.pdf",
} as const;

export const NAV_LINKS = [
  { id: "inicio", label: "Inicio" },
  { id: "perfil", label: "Perfil" },
  { id: "stack", label: "Stack" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" },
] as const;

export type SkillCategory = {
  id: string;
  title: string;
  icon: "Server" | "Database" | "Code2" | "Workflow";
  blurb: string;
  skills: string[];
};

export const STACK: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend & APIs",
    icon: "Server",
    blurb: "Lógica de servidor, contratos REST y reglas de negocio.",
    skills: [
      "Node.js",
      "Express.js",
      "API REST Architecture",
      "Middleware Design",
      "Reglas de Negocio",
    ],
  },
  {
    id: "data",
    title: "Bases de Datos & Relacional",
    icon: "Database",
    blurb: "Modelado relacional y consultas orientadas a rendimiento.",
    skills: [
      "PostgreSQL",
      "Supabase",
      "SQL Query Optimization",
      "Data Modeling",
    ],
  },
  {
    id: "frontend",
    title: "Frontend & UI",
    icon: "Code2",
    blurb: "Interfaces claras, componibles y mantenibles.",
    skills: [
      "JavaScript (ES6+)",
      "React",
      "Next.js",
      "HTML5 / CSS3",
      "Tailwind CSS",
    ],
  },
  {
    id: "analysis",
    title: "Análisis & Metodologías",
    icon: "Workflow",
    blurb: "Del relevamiento al proceso documentado y versionado.",
    skills: [
      "Análisis de Sistemas",
      "Diagramado de Procesos",
      "Debugging en Producción",
      "Git / GitHub",
      "Scrum / Agile",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  period?: string;
  context: string;
  tech: string[];
  achievements: { title: string; detail: string }[];
  skills: string[];
  links?: { label: string; href: string }[];
};

export const PROJECTS: Project[] = [
  {
    id: "fast-good",
    title: "Fast Good",
    subtitle: "Sistema de Gestión de Pedidos y Stock",
    summary:
      "Sistema web full-stack para un negocio real de viandas saludables: pedidos, planes, cocina y control de inventario.",
    period: "Proyecto Final / Tesis",
    context:
      "Aplicación en producción para un negocio real. Abarca el ciclo completo: relevamiento de reglas de negocio, diseño de la base relacional, API REST por capas y una interfaz operativa para administración y cocina.",
    tech: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Supabase",
      "JavaScript",
      "Tailwind CSS",
      "REST API",
    ],
    achievements: [
      {
        title: "Autenticación y registro con username único",
        detail:
          "Campo username único con validaciones insensibles a mayúsculas y espacios, replicadas en Frontend y Backend para evitar colisiones de cuentas.",
      },
      {
        title: "Debugging en producción — cadena de relaciones",
        detail:
          "Diagnóstico y resolución de una falla crítica en la cadena producto → plan → cocinero → pedido que impedía visualizar los pedidos «En Preparación» en la pantalla de cocina.",
      },
      {
        title: "Lógica de negocio y reglas de producción",
        detail:
          "Ventana de visualización automatizada a 48 hs para cocina con filtros configurables para auditoría, y actualización automática del estado de pago según el método seleccionado.",
      },
      {
        title: "Normalización de datos y zonas horarias",
        detail:
          "Solución al desfase horario en columnas tipo date (UTC vs. horario local) y motor de conversión unificada de unidades de medida (g/kg, ml/l) para el inventario.",
      },
    ],
    skills: [
      "Diseño de APIs REST",
      "Modelado relacional",
      "Arquitectura de capas",
      "Debugging de integraciones",
      "Normalización de stock",
    ],
    links: [
      {
        label: "Repositorio de la tesis",
        href: "https://github.com/mauri0098/Tesis-Fast-Good",
      },
    ],
  },
  {
    id: "sintega",
    title: "Sintega S.A.",
    subtitle: "Sitio Corporativo — Servicios Industriales",
    summary:
      "Sitio web institucional de punta a punta para empresa cordobesa certificada ISO 9001:2015, con galería fotográfica, SEO técnico y flujo de contacto dual orientado a conversión.",
    period: "Proyecto Freelance",
    context:
      "Diseñé y desarrollé el sitio corporativo de Sintega S.A., empresa de Córdoba dedicada a Obras Civiles, Mantenimiento Industrial, Limpieza Industrial, Gestión Ambiental y Movimiento de Suelos. El sitio funciona como vidriera institucional y canal de captación de leads: presenta la empresa, detalla sus cinco líneas de servicio, exhibe una cartera de más de 25 clientes públicos y privados (municipios, EPEC, FAdeA, Lockheed Martin, Ministerios provinciales) y ofrece dos vías de conversión diferenciadas: solicitud de presupuesto y envío de currículum.",
    tech: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "App Router",
      "IntersectionObserver API",
      "Metadata API",
      "Netlify / Vercel",
    ],
    achievements: [
      {
        title: "Arquitectura de componentes por secciones",
        detail:
          "Landing de una sola página con navegación por anclas (Inicio, Sobre Nosotros, Servicios, Clientes, Trabajos, Por qué elegirnos, Contacto) y ruta dedicada /galeria con App Router.",
      },
      {
        title: "Sistema de design tokens y theming corporativo",
        detail:
          "Tokens de color vía CSS custom properties (--primary, --accent, --dark-green) consumidos por Tailwind, con paleta de verdes corporativa y tipografía variable Plus Jakarta Sans.",
      },
      {
        title: "Galería fotográfica con 88 imágenes en 7 grupos temáticos",
        detail:
          "Curaduría y organización de imágenes por línea de servicio, con layouts de grilla adaptativos (aspect-video, object-cover) y carga optimizada con next/image.",
      },
      {
        title: "Flujo de contacto dual orientado a conversión",
        detail:
          "Rediseño de la sección de Contacto a dos columnas independientes (Currículum / Presupuesto) con datos de contacto, íconos, mapa y botón flotante de WhatsApp con mensaje predefinido.",
      },
      {
        title: "SEO técnico completo",
        detail:
          "Metadata dinámica con Metadata API de Next.js, sitemap.ts y robots.ts generados dinámicamente, alt descriptivo en cada imagen y metadataBase configurable por entorno.",
      },
    ],
    skills: [
      "Next.js App Router",
      "Design tokens / Theming",
      "Animaciones con IntersectionObserver",
      "SEO técnico",
      "Responsive & mobile-first",
      "Accesibilidad básica",
      "Despliegue en Vercel / Netlify",
    ],
    links: [
      {
        label: "Repositorio del proyecto",
        href: "https://github.com/LucasBarberis04/sintega",
      },
    ],
  },
];
