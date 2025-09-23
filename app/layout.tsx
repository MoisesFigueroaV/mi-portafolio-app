import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { LanguageProvider } from "@/components/language-provider"
import { personalInfo } from "@/lib/page-content"

// 🚀 SEO OPTIMIZADO
export const metadata: Metadata = {
  metadataBase: new URL(personalInfo.website),
  title: {
    default: `${personalInfo.name} - ${personalInfo.title}`,
    template: `%s | ${personalInfo.name}`,
  },
  description: personalInfo.description,
  icons: [{ rel: 'icon', url: '/image-mesh-grandient.png' }],
  keywords: personalInfo.seo.keywords,
  authors: [{ name: personalInfo.seo.author }],
  creator: personalInfo.seo.author,

  // Open Graph para redes sociales
  openGraph: {
    type: "website",
    locale: "es_ES",
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.description,
    siteName: personalInfo.name,
    images: [
      {
        url: personalInfo.seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} - Portfolio`,
      },
    ],
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.description,
    creator: personalInfo.seo.twitterHandle,
    images: [personalInfo.seo.ogImage],
  },

  // Robots y indexación
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verificación y otros
  verification: {
    google: "tu-codigo-de-verificacion-google", // Opcional
  },

  // Canonical URL
  alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/",
      // "en-US": "/en-US", // Si tienes versión en inglés
    },
  },
  generator: "v0.app",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: personalInfo.name,
              jobTitle: personalInfo.title,
              description: personalInfo.description,
              url: personalInfo.website,
              email: personalInfo.email,
              sameAs: [personalInfo.github, personalInfo.twitter, personalInfo.linkedin].filter(Boolean),
              address: {
                "@type": "PostalAddress",
                addressLocality: personalInfo.location.city,
                addressCountry: personalInfo.location.country,
              },
            }),
          }}
        />
      </head>
      <body className="bg-black text-white antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
