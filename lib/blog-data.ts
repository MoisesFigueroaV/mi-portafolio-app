
import type { Post } from "./content-manager"

// 📝 BLOG POSTS - Agrega/edita aquí tus artículos
export const posts: Post[] = [
  {
    title: "Interfaces sin ruido visual",
    readingTime: "3 min",
    excerpt: "Equilibra jerarquías: color, peso, ritmo.",
    updatedAt: "2024-12-28",
    content: "\n# Interfaces sin ruido visual\n\nReducir el ruido visual no es quitar todo. Es encontrar el equilibrio perfecto.\n\n## Principios clave\n\n1. **Un color por rol** - No mezcles colores sin propósito\n2. **Un peso por nivel** - Jerarquía clara con tipografía\n3. **Un ritmo por sección** - Espaciado consistente\n\n```css\n:focus-visible { \n  outline: 2px solid #4d4d4d; \n}\n```\n\nLa clave está en la **restricción consciente**.\n    ",
  },

  // 📝 PLANTILLA PARA NUEVO POST:
  // {
  //   title: "Título del Post",
  //   readingTime: "5 min", // Tiempo estimado de lectura
  //   excerpt: "Resumen corto que aparece en las cards", // Opcional
  //   updatedAt: "2024-01-15", // Fecha actual
  //   content: "\n# Mi Nuevo Post\n\nContenido en **Markdown**.\n\n## Subtítulo\n\n- Lista de elementos\n- Otro elemento\n\n```javascript\nconst codigo = \"ejemplo\";\n```\n  "
  // },

  {
    title: "Diseño con restricciones",
    readingTime: "4 min",
    excerpt: "Las restricciones guían la creatividad.",
    updatedAt: "2024-12-10",
    content: "\n# Diseño con restricciones\n\nTres restricciones útiles para mejores interfaces:\n\n1. **Paleta limitada** - Máximo 3-4 colores\n2. **Tipografía definida** - Una familia, pocos pesos\n3. **Un grid y ya** - Sistema de espaciado consistente\n\n```tsx\nexport function Grid({ children }) {\n  return <div className=\"grid gap-4 md:grid-cols-2\">{children}</div>\n}\n```\n    ",
  },
]
