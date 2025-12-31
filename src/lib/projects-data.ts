import type { Project } from "./content-manager"

// 🎯 PROYECTOS - Agrega/edita aquí tus proyectos
export const projects: Project[] = [
  {
    slug: "mi-portafolio-personal",
    title: { es: "Mi portafolio personal", en: "My Personal Portfolio" },
    subtitle: { es: "Componentes accesibles y rápidos", en: "Accessible and fast components" },
    description: {
      es: `Un proyecto personal para centralizar y mostrar mi trabajo y habilidades en el desarrollo de software. El objetivo era crear una
  plataforma moderna, rápida y accesible donde pudiera documentar mi trayectoria profesional, proyectos destacados y experimentos
  técnicos. Este mismo sitio web es el resultado de ese esfuerzo, sirviendo como una carta de presentación interactiva y un espacio
  para compartir conocimientos a través de artículos de blog.`,
      en: `A personal project to centralize and showcase my work and skills in software development. The goal was to create a
  modern, fast, and accessible platform where I could document my professional career, notable projects, and technical experiments. This website is the result of that effort, serving as an interactive cover letter and a space to share knowledge through blog articles.`
    },
    image: "/projects/portfolio.jpeg",
    width: 1200,
    height: 675,
    repoUrl: "https://github.com/MoisesFigueroaV/mi-portafolio-app",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Radix UI", "Framer Motion", "Vercel"],
    updatedAt: "2025-01-15",
    featured: true,
    body: {
      es: "Contenido del proyecto.",
      en: "Project content."
    },
  },

  // 📝 PLANTILLA PARA NUEVO PROYECTO:
  // {
  //   title: { es: "Nombre del Proyecto", en: "Project Name" },
  //   subtitle: { es: "Descripción corta", en: "Short description" },
  //   description: { es: "Descripción más detallada del proyecto.", en: "More detailed project description." },
  //   image: "/mi-proyecto.png", // Sube la imagen a public/
  //   width: 1200, // Ancho de la imagen
  //   height: 675, // Alto de la imagen
  //   siteUrl: "https://mi-proyecto.com", // URL del sitio (opcional)
  //   repoUrl: "https://github.com/usuario/proyecto", // URL del repo (opcional)
  //   tags: ["React", "Next.js", "TypeScript"], // Tecnologías usadas
  //   updatedAt: "2024-01-15", // Fecha actual
  //   featured: true, // true = aparece en homepage
  // },

]
