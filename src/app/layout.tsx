import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://slirendev.vercel.app";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#121315",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "David Sliren | Desarrollador Full Stack Multiplataforma",
    template: "%s | Sliren.dev",
  },
  description:
    "Portafolio profesional de David Sliren (David Salazar), Desarrollador Full Stack y multiplataforma. Explora proyectos en React, Next.js, React Native y Node.js.",
  applicationName: "Sliren.dev",
  authors: [{ name: "David Salazar (Sliren)", url: siteUrl }],
  creator: "David Salazar",
  publisher: "David Salazar",
  keywords: [
    "desarrollador full stack",
    "portafolio",
    "react",
    "react native",
    "next.js",
    "node.js",
    "typescript",
    "tailwind css",
    "david salazar",
    "david sliren",
    "sliren",
    "slirendev",
    "sliren.dev",
    "frontend developer",
    "backend developer",
  ],
  alternates: {
    canonical: "/",
  },
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
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    title: "David Sliren | Desarrollador Full Stack Multiplataforma",
    description:
      "Portafolio profesional de David Sliren: proyectos web y móviles con React, Next.js, React Native y Node.js.",
    siteName: "Sliren.dev",
    images: [
      {
        url: "/apple-touch-icon.png",
        width: 512,
        height: 512,
        alt: "Logotipo del portafolio de David Sliren",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "David Sliren | Desarrollador Full Stack Multiplataforma",
    description:
      "Portafolio profesional de David Sliren: proyectos web y móviles con React, Next.js, React Native y Node.js.",
    images: ["/apple-touch-icon.png"],
    creator: "@slirendev",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "David Sliren",
  alternateName: "David Salazar",
  url: siteUrl,
  jobTitle: "Desarrollador Full Stack Multiplataforma",
  image: `${siteUrl}/apple-touch-icon.png`,
  sameAs: [
    "https://github.com/David-Sliren",
    "https://www.linkedin.com/in/davidsliren/",
    "https://x.com/slirendev",
  ],
  knowsAbout: [
    "React",
    "React Native",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
    "Express",
    "MongoDB",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Sliren.dev",
  url: siteUrl,
  inLanguage: "es",
  author: {
    "@type": "Person",
    name: "David Sliren",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
