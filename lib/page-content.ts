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
  role: "frontend" | "backend" | "tools" | "content" | "database" | "data";
};

export const techStackItems: TechStackItem[] = [
  {
    name: { es: "Next.js", en: "Next.js" },
    description: { 
      es: "Framework de React para construir aplicaciones web full-stack con App Router y Server Actions.", 
      en: "React framework to build full-stack web apps with App Router and Server Actions." 
    },
    tags: ["Full-stack", "App Router", "RSC"],
    role: "frontend",
  },
  {
    name: { es: "React + TypeScript", en: "React + TypeScript" },
    description: { 
      es: "Biblioteca para construir interfaces modernas con tipado estricto y patrones reutilizables.", 
      en: "Library for building modern interfaces with strict typing and reusable patterns." 
    },
    tags: ["UI", "Patterns", "A11y"],
    role: "frontend",
  },
  {
    name: { es: "Tailwind CSS", en: "Tailwind CSS" },
    description: { 
      es: "Framework de utilidades CSS para crear sistemas de diseño rápidos, consistentes y escalables.", 
      en: "Utility-first CSS framework to create fast, consistent and scalable design systems." 
    },
    tags: ["Design System", "Tokens", "Variants"],
    role: "tools",
  },
  {
    name: { es: "Bun + Elysia.js", en: "Bun + Elysia.js" },
    description: { 
      es: "Entorno y framework ligero para construir APIs rápidas, seguras y tipadas con TypeScript.", 
      en: "Runtime and lightweight framework to build fast, secure, and typed APIs with TypeScript." 
    },
    tags: ["Backend", "APIs", "TypeScript"],
    role: "backend",
  },
  {
    name: { es: "PostgreSQL + Drizzle ORM", en: "PostgreSQL + Drizzle ORM" },
    description: { 
      es: "Base de datos relacional con modelado de esquemas tipados y consultas optimizadas.", 
      en: "Relational database with typed schema modeling and optimized queries." 
    },
    tags: ["SQL", "Schemas", "ORM"],
    role: "database",
  },
  {
    name: { es: "Supabase", en: "Supabase" },
    description: { 
      es: "Plataforma backend para autenticación, APIs en tiempo real y almacenamiento escalable.", 
      en: "Backend platform for authentication, real-time APIs, and scalable storage." 
    },
    tags: ["Auth", "Realtime", "Storage"],
    role: "backend",
  },
  {
    name: { es: "Power BI + Python", en: "Power BI + Python" },
    description: { 
      es: "Herramientas para procesos ETL, análisis de datos y dashboards interactivos.", 
      en: "Tools for ETL processes, data analysis, and interactive dashboards." 
    },
    tags: ["ETL", "Analytics", "Dashboards"],
    role: "data",
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