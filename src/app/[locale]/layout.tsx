import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import CookieBanner from "@/components/CookieBanner";
import "../globals.css";

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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: "#121315",
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  const keywords = t.raw("keywords") as string[];
  const title = t("title");
  const description = t("description");
  const ogDescription = t("ogDescription");
  const ogLocale = locale === "es" ? "es_ES" : "en_US";
  const alternateLocale = locale === "es" ? "en_US" : "es_ES";

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: "%s | Sliren.dev",
    },
    description,
    applicationName: "Sliren.dev",
    authors: [{ name: "David Salazar (Sliren)", url: siteUrl }],
    creator: "David Salazar",
    publisher: "David Salazar",
    keywords,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        es: "/es",
        en: "/en",
        "x-default": "/es",
      },
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
      locale: ogLocale,
      alternateLocale: [alternateLocale],
      url: `${siteUrl}/${locale}`,
      title,
      description: ogDescription,
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
      title,
      description: ogDescription,
      images: ["/apple-touch-icon.png"],
      creator: "@slirendev",
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
  };
}

export default async function RootLayout({
  children,
}: LayoutProps<"/[locale]">) {
  const locale = await getLocale();
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "metadata" });
  const jobTitle = t("jobTitle");

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "David Sliren",
    alternateName: "David Salazar",
    url: `${siteUrl}/${locale}`,
    jobTitle,
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
    url: `${siteUrl}/${locale}`,
    inLanguage: locale,
    author: {
      "@type": "Person",
      name: "David Sliren",
    },
  };

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#121315]">
        <NextIntlClientProvider messages={messages}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
          />
          {children}
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
