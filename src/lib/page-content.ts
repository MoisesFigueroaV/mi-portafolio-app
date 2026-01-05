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
    workMode: "Remoto / Presencial",
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
    name: { es: "Next.js + React + TypeScript", en: "Next.js + React + TypeScript" },
    description: {
      es: "Construcción de aplicaciones web full-stack con interfaces modernas, tipado estricto y patrones reutilizables.",
      en: "Building full-stack web applications with modern interfaces, strict typing, and reusable patterns."
    },
    tags: ["Full-stack", "UI", "App Router", "TypeScript"],
    role: "frontend",
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
    name: { es: "Supabase + PostgreSQL", en: "Supabase + PostgreSQL" },
    description: {
      es: "Plataforma backend con base de datos relacional para autenticación, APIs en tiempo real y almacenamiento.",
      en: "Backend platform with a relational database for authentication, real-time APIs, and storage."
    },
    tags: ["Auth", "Realtime", "Storage", "SQL"],
    role: "database",
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
  {
    name: { es: "Tailwind CSS", en: "Tailwind CSS" },
    description: {
      es: "Framework de utilidades CSS para crear sistemas de diseño rápidos, consistentes y escalables.",
      en: "Utility-first CSS framework to create fast, consistent and scalable design systems."
    },
    tags: ["Design System", "Tokens", "Variants"],
    role: "tools",
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
  technologies?: string[]
}

export const timelineData: TimelineItem[] = [
  {
    year: "2025",
    title: { es: "Analista de Datos", en: "Data Analyst" },
    company: { es: "Sociedad Pesquera Landes S.A", en: "Sociedad Pesquera Landes S.A" },
    location: { es: "Concepción, Chile", en: "Concepción, Chile" },
    description: {
      es: "Implementé procesos ETL para integración y limpieza de datos desde Excel y Talana. Diseñé dashboards en Power BI centralizando KPIs clave de gestión de personas, reduciendo significativamente el tiempo de generación de reportes.",
      en: "Implemented ETL processes for data integration and cleansing from Excel and Talana. Designed Power BI dashboards centralizing key people management KPIs, significantly reducing report generation time."
    },
    current: false,
    technologies: ["Power BI", "SQL", "Excel", "Python"]
  },
  {
    year: "2025",
    title: { es: "Desarrollador Full-Stack", en: "Full-Stack Developer" },
    company: { es: "Proyecto Capstone", en: "Capstone Project" },
    location: { es: "Concepción, Chile", en: "Concepción, Chile" },
    description: {
      es: "Desarrollé completamente una plataforma web de gestión de eventos. Backend con Bun y Elysia.js (PostgreSQL + Drizzle ORM, autenticación JWT). Frontend con Next.js (App Router) y Tailwind CSS, creando un sistema de componentes reutilizables.",
      en: "Fully developed a web platform for event management. Backend with Bun and Elysia.js (PostgreSQL + Drizzle ORM, JWT auth). Frontend with Next.js (App Router) and Tailwind CSS, creating a reusable component system."
    },
    current: false,
    technologies: ["Next.js", "Bun", "Elysia.js", "PostgreSQL", "Drizzle ORM", "Tailwind CSS"]
  },
  {
    year: "2024",
    title: { es: "Freelance", en: "Freelance" },
    company: { es: "Fullstack Dev", en: "Fullstack Dev" },
    location: { es: "Remoto", en: "Remote" },
    description: {
      es: "Desarrollo de aplicaciones web a medida.",
      en: "Custom web application development."
    },
    current: false,
    technologies: ["React", "Next.js", "TypeScript"]
  },
  {
    year: "2022",
    title: { es: "Track Leader Base de Datos", en: "Track Leader Database Track" },
    company: { es: "CITT Duoc UC", en: "CITT Duoc UC" },
    location: { es: "Concepción, Chile", en: "Concepción, Chile" },
    description: {
      es: "Diseñé y dicté un taller práctico sobre fundamentos de bases de datos NoSQL. Realicé demostraciones en vivo sobre configuración y gestión de MongoDB (Atlas y Compass), guiando a estudiantes en proyectos individuales.",
      en: "Designed and delivered a hands-on workshop on NoSQL database fundamentals. Conducted live demonstrations on MongoDB configuration and management (Atlas and Compass), guiding students in individual projects."
    },
    current: false,
    technologies: ["MongoDB", "NoSQL", "Atlas", "Compass"]
  }
]