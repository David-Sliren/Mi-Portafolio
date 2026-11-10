"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "cookiesAccepted";

export default function CookieBanner() {
  const t = useTranslations("cookies.banner");
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => {
      try {
        if (localStorage.getItem(STORAGE_KEY) !== "true") {
          setVisible(true);
        }
      } catch {
        setVisible(true);
      }
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  if (!visible) return null;

  const locale = pathname?.split("/")[1] || "es";

  return (
    <div className="fixed bottom-4 right-1/2 lg:right-2 z-50 w-[calc(100%-2rem)] max-w-3xl translate-x-1/2 lg:translate-0 rounded-lg border border-white/10 bg-white/5 p-4 shadow-[#0071E3]/20 backdrop-blur-xl">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-on-surface-variant text-white">
          {t("text")}{" "}
          <Link
            href={`/${locale}/cookies-policy`}
            className="text-sky-400 underline hover:text-sky-400/80 transition-colors"
          >
            {t("policyLink")}
          </Link>
        </p>
        <button
          type="button"
          onClick={() => {
            try {
              localStorage.setItem(STORAGE_KEY, "true");
            } catch {
              /* ignore */
            }
            setVisible(false);
          }}
          className="shrink-0 rounded-full bg-gradient-blue px-4 py-2 font-label text-xs uppercase tracking-widest text-white transition-all duration-300 hover:animate-jelly hover:shadow-sky-400/20 active:scale-95 cursor-pointer"
        >
          {t("accept")}
        </button>
      </div>
    </div>
  );
}
