/**
 * Contenido del sitio. Todo texto visible va en inglés (en) y español (es).
 * Para agregar un proyecto, una experiencia o una foto, copia una entrada
 * existente y edítala. Ver CONTENT-GUIDE.md.
 */

export type L = { en: string; es: string };

export const profile = {
  name: "Moisés Figueroa",
  fullName: "Moisés Esteban Figueroa Valenzuela",
  role: { en: "Software Engineer", es: "Ingeniero en Informática" } satisfies L,
  location: "Los Ángeles, Chile",
  email: "moises.figueroavalenzuela@gmail.com",
  cv: "/cv/moises-figueroa-cv.pdf",
  description: {
    en: "Software engineer from Los Ángeles, Chile. Backend, databases, infrastructure and data.",
    es: "Ingeniero en Informática de Los Ángeles, Chile. Backend, bases de datos, infraestructura y datos.",
  } satisfies L,
};

export const about: L[] = [
  {
    en: "I'm Moisés, a software engineer from Los Ángeles, Chile. I build web applications end to end, with a focus on backend, databases and infrastructure: Python and Django, TypeScript with Next.js, Bun and Elysia.js, PostgreSQL, Docker and Linux.",
    es: "Soy Moisés, ingeniero en informática de Los Ángeles, Chile. Construyo aplicaciones web de punta a punta, con foco en backend, bases de datos e infraestructura: Python y Django, TypeScript con Next.js, Bun y Elysia.js, PostgreSQL, Docker y Linux.",
  },
  {
    en: "I also work with data: ETL pipelines, SQL, PySpark, Microsoft Fabric and Power BI dashboards.",
    es: "También trabajo con datos: procesos ETL, SQL, PySpark, Microsoft Fabric y dashboards en Power BI.",
  },
  {
    en: 'Away from the editor I take black-and-white photos (they live in the <a href="/gallery">gallery</a>) and now and then I <a href="/writing">write</a> about what I learn. My <a href="/cv/moises-figueroa-cv.pdf" target="_blank" rel="noopener">CV</a> is here if you need it.',
    es: 'Fuera del editor saco fotos en blanco y negro (están en la <a href="/gallery">galería</a>) y de vez en cuando <a href="/writing">escribo</a> sobre lo que aprendo. Mi <a href="/cv/moises-figueroa-cv.pdf" target="_blank" rel="noopener">CV</a> está aquí por si lo necesitas.',
  },
];

export type Experience = {
  years: string;
  dates: L;
  role: L;
  company: string;
  place: string;
  summary: L;
  stack: string[];
};

export const experience: Experience[] = [
  {
    years: "2026",
    dates: { en: "Apr – Jun 2026", es: "abr – jun 2026" },
    role: { en: "Software Developer", es: "Desarrollador de Software" },
    company: "Retarget S.A.",
    place: "Santiago",
    summary: {
      en: "Migrated and stabilized client WordPress sites across hosting providers, fixed frontend, backend and configuration issues in production, and managed DNS, domains, caching and backups. Wrote a proposal to bring web development and maintenance in-house.",
      es: "Migré y estabilicé sitios WordPress de clientes entre distintos hostings, resolví incidencias de frontend, backend y configuración en producción, y gestioné DNS, dominios, caché y respaldos. Elaboré una propuesta para internalizar el desarrollo y mantenimiento web.",
    },
    stack: ["WordPress", "WooCommerce", "PHP", "JavaScript", "DNS"],
  },
  {
    years: "2025",
    dates: { en: "Apr – Aug 2025", es: "abr – ago 2025" },
    role: { en: "Data Analyst", es: "Analista de Datos" },
    company: "Sociedad Pesquera Landes S.A.",
    place: "Concepción",
    summary: {
      en: "Built ETL processes to integrate and clean data from Excel and Talana, and Power BI dashboards for headcount, diversity, absenteeism and recruiting. Analyzed turnover trends and worked as the technical link between business users and development teams.",
      es: "Implementé procesos ETL para integrar y limpiar datos desde Excel y Talana, y dashboards en Power BI de dotación, diversidad, ausentismo y reclutamiento. Analicé tendencias de rotación y fui el nexo técnico entre usuarios de negocio y equipos de desarrollo.",
    },
    stack: ["Power BI", "SQL", "Python", "Power Query"],
  },
  {
    years: "2025",
    dates: { en: "Mar – Jul 2025", es: "mar – jul 2025" },
    role: { en: "Full-Stack Developer", es: "Desarrollador Full Stack" },
    company: "Duoc UC",
    place: "Concepción",
    summary: {
      en: "Built a platform to manage events, participants, activities and resources: a REST API with Bun and Elysia.js, a relational model in PostgreSQL with Drizzle ORM, and admin panels in Next.js and Tailwind CSS.",
      es: "Desarrollé una plataforma para gestionar eventos, participantes, actividades y recursos: una API REST con Bun y Elysia.js, un modelo relacional en PostgreSQL con Drizzle ORM y paneles administrativos en Next.js y Tailwind CSS.",
    },
    stack: ["TypeScript", "Next.js", "Elysia.js", "PostgreSQL", "Drizzle"],
  },
  {
    years: "2024",
    dates: { en: "Apr – Nov 2024", es: "abr – nov 2024" },
    role: { en: "Database Track Leader", es: "Track Leader de Bases de Datos" },
    company: "Duoc UC",
    place: "Concepción",
    summary: {
      en: "Designed and taught a hands-on NoSQL workshop with MongoDB, ran live demos with Atlas and Compass, and guided students through their own projects.",
      es: "Diseñé e impartí un taller práctico de NoSQL con MongoDB, hice demostraciones en vivo con Atlas y Compass, y guié a estudiantes en sus proyectos individuales.",
    },
    stack: ["MongoDB", "Atlas", "Node.js"],
  },
  {
    years: "2022 – 2024",
    dates: { en: "Jul 2022 – Mar 2024 · part-time", es: "jul 2022 – mar 2024 · part-time" },
    role: { en: "Software Developer", es: "Desarrollador de Software" },
    company: "ACIS LTDA.",
    place: "Concepción",
    summary: {
      en: "Helped build and maintain business systems for rentals, work orders and auto repair shops. Gathered requirements, shipped frontend and backend features such as calendar integrations, and reviewed endpoints and data schemas to track down bugs.",
      es: "Colaboré en el desarrollo y mantenimiento de sistemas para arriendos, órdenes de trabajo y talleres automotrices. Levanté requerimientos, implementé funcionalidades de frontend y backend como integraciones de calendario, y revisé endpoints y esquemas de datos para encontrar errores.",
    },
    stack: ["Python", "Django", "PostgreSQL", "Vue.js", "Docker"],
  },
];

export const education = [
  {
    years: "2021 – 2025",
    title: { en: "Computer Engineering", es: "Ingeniería en Informática" } satisfies L,
    school: "Duoc UC, San Andrés de Concepción",
    note: { en: "Graduated with distinction.", es: "Titulado con distinción." } satisfies L,
  },
];

export type Project = {
  slug: string;
  when: L;
  title: L;
  summary: L;
  stack: string[];
  /** Ícono cuadrado en public/projects/ (svg o png de 64×64) */
  icon: string;
  repo?: string;
  url?: string;
  /** Contenido de la página de detalle */
  overview: L;
  features: L[];
  decisions?: L[];
};

export const projects: Project[] = [
  {
    slug: "portfolio",
    when: { en: "Ongoing", es: "En curso" },
    title: { en: "This portfolio", es: "Este portafolio" },
    summary: {
      en: "My personal site, rebuilt from scratch: one column, two languages, light and dark modes, and a background inspired by the PlayStation 2 boot screen.",
      es: "Mi sitio personal, rehecho desde cero: una columna, dos idiomas, modo claro y oscuro, y un fondo inspirado en la pantalla de arranque de la PlayStation 2.",
    },
    stack: ["Astro 7", "TypeScript", "Canvas 2D", "CSS"],
    icon: "/projects/portfolio.svg",
    repo: "https://github.com/MoisesFigueroaV/mi-portafolio-app",
    overview: {
      en: "The previous version started from a Next.js template and grew to almost seventy dependencies. This one is a static Astro site with a single runtime dependency and no UI framework. Everything interactive is a few hundred lines of plain TypeScript.",
      es: "La versión anterior partió de una plantilla de Next.js y llegó a casi setenta dependencias. Esta es un sitio estático en Astro con una sola dependencia de ejecución y sin framework de UI. Todo lo interactivo son unos cientos de líneas de TypeScript.",
    },
    features: [
      {
        en: "An endless descent through columns of cubes, drawn on a 2D canvas with depth fog, a blue glow at the bottom and small lights traveling between columns.",
        es: "Un descenso infinito entre columnas de cubos, dibujado en un canvas 2D con niebla de profundidad, un resplandor azul al fondo y lucecitas que viajan entre columnas.",
      },
      {
        en: "English and Spanish with an eye-blink transition. Both languages are rendered at build time, so switching needs no reload.",
        es: "Inglés y español con una transición de parpadeo. Ambos idiomas se generan al compilar, así que cambiar no recarga la página.",
      },
      {
        en: "Light and dark modes, each with its own version of the background.",
        es: "Modo claro y oscuro, cada uno con su propia versión del fondo.",
      },
      {
        en: "A 16-bit pixel-art avatar with a black cat on top. The cat blinks.",
        es: "Un avatar en pixel art de 16 bits con una gatita negra encima. La gatita parpadea.",
      },
      {
        en: "Writing in Markdown through Astro content collections, with a typed schema.",
        es: "Artículos en Markdown con content collections de Astro y un esquema tipado.",
      },
    ],
    decisions: [
      {
        en: "The animation pauses when the tab is hidden and stays still for people who prefer reduced motion.",
        es: "La animación se pausa cuando la pestaña no está visible y queda quieta para quienes prefieren reducir el movimiento.",
      },
      {
        en: "Language and theme are saved in the browser and applied before the first paint, so there is no flash on load.",
        es: "El idioma y el tema se guardan en el navegador y se aplican antes del primer pintado, así no hay parpadeo al cargar.",
      },
    ],
  },
];

export type Photo = { src: string; width: number; height: number; alt: L };

export const photos: Photo[] = [
  { src: "/photos/p1.webp", width: 686, height: 1024, alt: { en: "Black-and-white street", es: "Calle en blanco y negro" } },
  { src: "/photos/p2.webp", width: 1024, height: 709, alt: { en: "Minimal architecture", es: "Arquitectura minimal" } },
  { src: "/photos/p3.webp", width: 681, height: 1024, alt: { en: "Light and shadow", es: "Sombra y luz" } },
  { src: "/photos/p4.webp", width: 1024, height: 572, alt: { en: "Urban textures", es: "Texturas urbanas" } },
  { src: "/photos/p5.webp", width: 730, height: 1024, alt: { en: "Monochrome portrait", es: "Retrato monocromo" } },
  { src: "/photos/p6.webp", width: 1024, height: 509, alt: { en: "Horizon", es: "Horizonte" } },
];

export const social = [
  { label: "GitHub", handle: "@MoisesFigueroaV", url: "https://github.com/MoisesFigueroaV" },
  { label: "LinkedIn", handle: "in/moisesfigueroavalen", url: "https://www.linkedin.com/in/moisesfigueroavalen" },
  { label: "X", handle: "@Moises_Figue26", url: "https://x.com/Moises_Figue26" },
];
