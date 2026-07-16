"use client";

import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/content";

const locales: Locale[] = ["tr", "en"];

export function LanguageSwitcher() {
  const { locale, setLocale, content } = useLanguage();

  return (
    <div
      aria-label={content.languageSwitcher.label}
      className="inline-grid grid-cols-2 rounded-full border border-border bg-surface p-1 text-xs font-black uppercase tracking-[0.12em] text-muted shadow-card"
      role="group"
    >
      {locales.map((item) => {
        const isActive = locale === item;

        return (
          <button
            key={item}
            type="button"
            aria-pressed={isActive}
            onClick={() => setLocale(item)}
            className={`h-8 rounded-full px-3 transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35 ${
              isActive ? "bg-accent text-accent-fg shadow-glow" : "text-muted hover:text-foreground"
            }`}
          >
            {item.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
