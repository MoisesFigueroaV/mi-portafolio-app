# 📝 Guía para Modificar Contenido

## 🎯 Información Personal

Edita `lib/config.ts` para cambiar:
- ✅ Nombre, título, descripción
- ✅ Email, GitHub, Twitter, LinkedIn
- ✅ Ubicación y modo de trabajo
- ✅ Configuración SEO

## 🚀 Agregar Proyectos

1. **Sube la imagen** a `public/images/nombre-proyecto.png`
2. **Edita** `lib/data.ts` en la sección `projects`
3. **Copia** un proyecto existente y modifica:
   \`\`\`typescript
   {
     title: "Mi Nuevo Proyecto",
     subtitle: "Descripción corta",
     description: "Descripción detallada...",
     image: "/images/mi-proyecto.png", // Tu imagen
     siteUrl: "https://mi-sitio.com", // URL del proyecto
     repoUrl: "https://github.com/usuario/repo", // GitHub
     tags: ["React", "TypeScript"], // Tecnologías
     updatedAt: "2024-01-15", // Fecha actual
     featured: true, // true = aparece en homepage
   }
   \`\`\`

## 📝 Agregar Blog Posts

1. **Edita** `lib/data.ts` en la sección `posts`
2. **Copia** un post existente y modifica:
   \`\`\`typescript
   {
     title: "Mi Nuevo Post",
     readingTime: "5 min",
     excerpt: "Resumen corto...",
     updatedAt: "2024-01-15",
     content: `
   # Mi Post
   
   Contenido en **Markdown**.
   
   \`\`\`javascript
   const codigo = "ejemplo";
   \`\`\`
     `
   }
   \`\`\`

## 📸 Agregar Fotos

1. **Sube la imagen** a `public/photos/mi-foto.jpg`
2. **Edita** `lib/data.ts` en la sección `photos`:
   \`\`\`typescript
   { src: "/photos/mi-foto.jpg", alt: "Descripción de la foto" }
   \`\`\`

## 🔗 Cambiar Enlaces

Todos los enlaces se actualizan automáticamente desde `lib/config.ts`:
- Email en botones de contacto
- GitHub en sidebar y botones
- Links sociales en mobile info
- CV link (sube tu CV a `public/cv.pdf`)

## 🎨 Personalizar Tema

En `lib/config.ts` puedes cambiar:
- Colores principales
- Velocidad de animaciones
- Configuración del fondo animado

## 📊 SEO

El SEO se configura automáticamente desde `lib/config.ts`:
- Títulos y descripciones
- Open Graph para redes sociales
- Structured data (JSON-LD)
- Sitemap automático
- Meta tags optimizados

### Para mejorar SEO:
1. **Sube** `og-image.png` (1200x630px) a `public/`
2. **Actualiza** keywords en `config.ts`
3. **Verifica** Google Search Console (opcional)
