"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { contentByLocale, defaultLocale, type Locale, type SiteContent } from "@/content";

type LanguageContextValue = {
  locale: Locale;
  content: SiteContent;
  setLocale: (locale: Locale) => void;
};

const STORAGE_KEY = "konselit-language";
const LanguageContext = createContext<LanguageContextValue | null>(null);

function getStoredLocale(): Locale {
  if (typeof window === "undefined") {
    return defaultLocale;
  }

  const storedLocale = window.localStorage.getItem(STORAGE_KEY);
  return storedLocale === "en" || storedLocale === "tr" ? storedLocale : defaultLocale;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    setLocaleState(getStoredLocale());
  }, []);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem(STORAGE_KEY, nextLocale);
    document.documentElement.lang = nextLocale;
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      content: contentByLocale[locale],
      setLocale,
    }),
    [locale, setLocale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
