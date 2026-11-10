import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "cookies.page" });

  return {
    title: t("title"),
    alternates: {
      canonical: `/${locale}/cookies-policy`,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `/${l}/cookies-policy`]),
      ),
    },
    robots: { index: true, follow: true },
  };
}

export default async function CookiesPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "cookies.page" });

  return (
    <main className="bg-[#121315] relative mx-auto w-full max-w-3xl h-dvh px-6 py-16 text-white">
      {/* ambient orb */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-sky-500/20 blur-[100px]"
      />

      <div className="mb-8 flex items-center gap-4">
        <h1 className="text-4xl font-bold tracking-tighter font-headline bg-gradient-blue bg-clip-text text-transparent">
          {t("title")}
        </h1>
      </div>

      <p className="mb-8 font-body text-lg leading-relaxed text-on-surface-variant">
        {t("intro")}
      </p>

      <div className="overflow-x-auto rounded-lg border px-1.5 border-white/10 bg-white/5 backdrop-blur-xl">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-white/10 text-left text-xs uppercase tracking-widest text-on-surface-variant font-label">
              <th className="py-3 pr-4">{t("table.name")}</th>
              <th className="py-3 pr-4">{t("table.purpose")}</th>
              <th className="py-3 pr-4">{t("table.duration")}</th>
              <th className="py-3 pr-4">{t("table.type")}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-white/5">
              <td className="py-3 pr-4 font-mono text-xs text-on-surface">
                {t("localeCookie.name")}
              </td>
              <td className="py-3 pr-4 font-body text-on-surface-variant">
                {t("localeCookie.purpose")}
              </td>
              <td className="py-3 pr-4 font-body text-on-surface-variant">
                {t("localeCookie.duration")}
              </td>
              <td className="py-3 pr-4 font-body text-on-surface-variant">
                {t("localeCookie.type")}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-8 font-body text-sm leading-relaxed text-on-surface-variant">
        {t("thirdParty")}
      </p>
      <p className="mt-4 font-body text-sm leading-relaxed text-on-surface-variant">
        {t("manage")}
      </p>
      <p className="mt-4 font-body text-sm leading-relaxed text-on-surface-variant">
        {t("contact")}
      </p>
    </main>
  );
}
