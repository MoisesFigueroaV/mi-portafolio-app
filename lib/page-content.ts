import type { LocalizedString } from "./content-manager";

// 🎯 CONFIGURACIÓN PERSONAL - Edita aquí tu información
export const personalInfo = {
  // Información básica
  name: "Moisés Esteban Figueroa Valenzuela",
  title: "Desarrollador de Software",
  description: "Creo interfaces sobrias y rápidas. Me interesan los sistemas de diseño, accesibilidad y performance.",

  // URLs y enlaces
  email: "moises.figueroavalenzuela@gmail.com",
  website: "https://tudominio.com",
  github: "https://github.com/MoisesFigueroaV",
  twitter: "https://twitter.com/tu-usuario",
  linkedin: "https://linkedin.com/in/tu-usuario",

  // Ubicación
  location: {
    city: "Concepción",
    country: "Chile",
    timezone: "America/Chile_Santiago", // Consulta https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
    workMode: "Remoto / Híbrido",
  },

  // Archivos
  cv: "/cv.pdf", // Coloca tu CV en la carpeta public/

  // SEO
  seo: {
    keywords: ["desarrollador", "diseñador", "react", "nextjs", "typescript", "frontend"],
    author: "Tu Nombre",
    twitterHandle: "@tu-usuario",
    ogImage: "/og-image.png", // Imagen para redes sociales (1200x630px)
  },
}

// 💻 STACK TECNOLÓGICO - Edita aquí las tecnologías que usas
export type TechStackItem = {
  name: LocalizedString;
  description: LocalizedString;
  tags: string[];
  role: "frontend" | "backend" | "tools" | "content";
};

export const techStackItems: TechStackItem[] = [
  {
    name: { es: "Astro", en: "Astro" },
    description: { es: "Framework web para construir sitios rápidos con menos JavaScript del lado del cliente.", en: "Web framework to build fast sites with less client-side JavaScript. [TRANSLATE]" },
    tags: ["Islands", "MDX", "SSR"],
    role: "frontend",
  },
  {
    name: { es: "Next.js", en: "Next.js" },
    description: { es: "El framework de React para producción. Ofrece renderizado híbrido, rutas basadas en archivos y más.", en: "The React framework for production. It offers hybrid rendering, file-based routing, and more. [TRANSLATE]" },
    tags: ["RSC", "App Router"],
    role: "frontend",
  },
  {
    name: { es: "React + TypeScript", en: "React + TypeScript" },
    description: { es: "Una biblioteca de JavaScript para construir interfaces de usuario, con la seguridad de los tipos de TypeScript.", en: "A JavaScript library for building user interfaces, with the safety of TypeScript types. [TRANSLATE]" },
    tags: ["A11y", "Patterns"],
    role: "frontend",
  },
  {
    name: { es: "Tailwind CSS", en: "Tailwind CSS" },
    description: { es: "Un framework de CSS de utilidad primero para un diseño rápido y personalizado sin salir de tu HTML.", en: "A utility-first CSS framework for rapid, custom design without leaving your HTML. [TRANSLATE]" },
    tags: ["Design System", "Tokens"],
    role: "tools",
  },
  {
    name: { es: "MDX/Markdown", en: "MDX/Markdown" },
    description: { es: "Markdown para la era de los componentes. Permite usar componentes JSX en archivos de markdown.", en: "Markdown for the component era. It allows using JSX components in markdown files. [TRANSLATE]" },
    tags: ["Content"],
    role: "content",
  },
]

// 🕒 EXPERIENCIA LABORAL - Edita aquí tu línea de tiempo
export type TimelineItem = {
  year: string
  title: LocalizedString
  company: LocalizedString
  location: LocalizedString
  description: LocalizedString
  current?: boolean
}

export const timelineData: TimelineItem[] = [
    {
      year: "2025",
      title: { es: "Analista de datos", en: "Data Analyst [TRANSLATE]" },
      company: { es: "Sociedad Pesquera Landes S.A", en: "Sociedad Pesquera Landes S.A [TRANSLATE]" },
      location: { es: "Hibrido", en: "Hybrid [TRANSLATE]" },
      description: { es: "Liderando el desarrollo de interfaces con React, Next.js y sistemas de diseño escalables.", en: "Leading the development of interfaces with React, Next.js and scalable design systems. [TRANSLATE]" },
      current: false,
    },
  ]