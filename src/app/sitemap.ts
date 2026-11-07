import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://slirendev.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1.0,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${siteUrl}/${l}`])
      ),
    },
  }));
}
