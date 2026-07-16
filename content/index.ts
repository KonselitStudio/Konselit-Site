import { enContent } from "@/content/en";
import { trContent } from "@/content/tr";
import type { Locale, SiteContent } from "@/content/types";

export const contentByLocale: Record<Locale, SiteContent> = {
  tr: trContent,
  en: enContent,
};

export const defaultLocale: Locale = "tr";

export type { Locale, SiteContent };
