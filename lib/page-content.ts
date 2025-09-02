
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
export const techStackItems = [
  {
    name: "Astro",
    description: "Framework web para construir sitios rápidos con menos JavaScript del lado del cliente.",
    tags: ["Islands", "MDX", "SSR"],
    role: "frontend",
  },
  {
    name: "Next.js",
    description: "El framework de React para producción. Ofrece renderizado híbrido, rutas basadas en archivos y más.",
    tags: ["RSC", "App Router"],
    role: "frontend",
  },
  {
    name: "React + TypeScript",
    description: "Una biblioteca de JavaScript para construir interfaces de usuario, con la seguridad de los tipos de TypeScript.",
    tags: ["A11y", "Patterns"],
    role: "frontend",
  },
  {
    name: "Tailwind CSS",
    description: "Un framework de CSS de utilidad primero para un diseño rápido y personalizado sin salir de tu HTML.",
    tags: ["Design System", "Tokens"],
    role: "tools",
  },
  {
    name: "MDX/Markdown",
    description: "Markdown para la era de los componentes. Permite usar componentes JSX en archivos de markdown.",
    tags: ["Content"],
    role: "content",
  },
]

// 🕒 EXPERIENCIA LABORAL - Edita aquí tu línea de tiempo
export type TimelineItem = {
  year: string
  title: string
  company: string
  location: string
  description: string
  current?: boolean
}

export const timelineData: TimelineItem[] = [
    {
      year: "2025",
      title: "Analista de datos",
      company: "Sociedad Pesquera Landes S.A",
      location: "Hibrido",
      description: "Liderando el desarrollo de interfaces con React, Next.js y sistemas de diseño escalables.",
      current: false,
    },
  ]
