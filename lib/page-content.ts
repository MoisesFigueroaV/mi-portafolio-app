import type { LocalizedString } from "./content-manager";

// 🎯 CONFIGURACIÓN PERSONAL - Edita aquí tu información
export const personalInfo = {
  // Información básica
  name: { es: "Moisés Esteban Figueroa Valenzuela", en: "Moisés Esteban Figueroa Valenzuela" },
  title: { es: "Analista de Datos y Desarrollador Full-Stack", en: "Data Analyst & Full-Stack Developer" },
  description: "Soy Moisés Figueroa, Analista de Datos y Desarrollador Full-Stack de Concepción, Chile. Me motiva explorar cómo la tecnología puede transformar ideas en soluciones prácticas y resolver problemas complejos. Siempre busco aprender nuevas herramientas y aplicarlas en proyectos reales.",
  description_en: "I am Moisés Figueroa, a Data Analyst and Full-Stack Developer from Concepción, Chile. I am motivated by exploring how technology can transform ideas into practical solutions and solve complex problems. I am always looking to learn new tools and apply them in real projects.",
  intro_2: "Disfruto desarrollando aplicaciones web con Astro, Next.js, React y TypeScript, creando interfaces modernas y funcionales. También diseño tooling ligero que mejora mis flujos de trabajo y la experiencia de desarrollo.",
  intro_2_en: "I enjoy developing web applications with Astro, Next.js, React and TypeScript, creating modern and functional interfaces. I also design lightweight tooling that improves my workflows and the development experience.",
  intro_3: "Actualmente me estoy especializando en análisis de datos a través de la certificación profesional de Google Data Analytics. Mi objetivo es unir esta área con mis conocimientos en desarrollo web, construyendo aplicaciones que integren visualización, datos y usabilidad. Si llegaste hasta aquí, conversemos: mándame un correo y cuéntame tu idea, te responderé pronto.",
  intro_3_en: "I am currently specializing in data analysis through the Google Data Analytics professional certification. My goal is to unite this area with my knowledge in web development, building applications that integrate visualization, data and usability. If you made it this far, let's talk: send me an email and tell me your idea, I'll answer you soon.",

  // URLs y enlaces
  email: "moises.figueroavalenzuela@gmail.com",
  website: "https://tudominio.com",
  github: "https://github.com/MoisesFigueroaV",
  twitter: "https://x.com/Moises_Figue26",
  linkedin: "https://www.linkedin.com/in/moisesfigueroavalen",

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
      title: { es: "Analista de Datos", en: "Data Analyst" },
      company: { es: "Sociedad Pesquera Landes S.A", en: "Sociedad Pesquera Landes S.A" },
      location: { es: "Concepción, Chile", en: "Concepción, Chile" },
      description: { es: "Implementé un proceso completo de ETL para integrar y depurar datos de diversas fuentes. Diseñé y desarrollé un Dashboard integral en Power BI, centralizando KPIs clave que automatizó la generación de reportes y análisis. Realicé análisis de tendencias sobre la rotación de personal, identificando factores clave para proponer estrategias de retención más efectivas.", en: "Implemented a complete ETL process to integrate and debug data from various sources. Designed and developed a comprehensive Power BI Dashboard, centralizing key KPIs that automated report generation and analysis. Performed trend analysis on personnel turnover, identifying key factors to propose more effective retention strategies." },
      current: false,
    },
  ]