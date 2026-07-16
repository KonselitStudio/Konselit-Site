"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

type Theme = "dark" | "light";

const STORAGE_KEY = "konselit-theme";

function getInitialTheme(): Theme {
  const storedTheme = window.localStorage.getItem(STORAGE_KEY);

  if (storedTheme === "dark" || storedTheme === "light") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  window.localStorage.setItem(STORAGE_KEY, theme);
}

export function ThemeToggle() {
  const { content } = useLanguage();
  const [theme, setTheme] = useState<Theme>("dark");
  const isLight = theme === "light";

  useEffect(() => {
    const initialTheme = getInitialTheme();
    applyTheme(initialTheme);
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = isLight ? "dark" : "light";
    applyTheme(nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      aria-label={isLight ? content.themeToggle.darkLabel : content.themeToggle.lightLabel}
      aria-pressed={isLight}
      onClick={toggleTheme}
      className="group relative inline-grid h-10 w-[4.75rem] grid-cols-2 items-center rounded-full border border-border bg-surface p-1 text-muted shadow-card outline-none transition duration-300 hover:border-border-strong hover:bg-surface-strong focus-visible:border-border-strong focus-visible:ring-2 focus-visible:ring-accent/35"
    >
      <span className="theme-toggle-thumb absolute left-1 top-1 size-8 rounded-full bg-accent shadow-[0_10px_26px_rgba(0,0,0,0.18)] transition-transform duration-300 ease-out" />
      <span className="theme-toggle-moon relative z-10 grid size-8 place-items-center rounded-full transition-colors duration-300">
        <MoonIcon className="size-[0.95rem]" />
      </span>
      <span className="theme-toggle-sun relative z-10 grid size-8 place-items-center rounded-full transition-colors duration-300">
        <SunIcon className="size-[0.95rem]" />
      </span>
    </button>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 4V2M12 22v-2M4.93 4.93 3.52 3.52M20.48 20.48l-1.41-1.41M4 12H2M22 12h-2M4.93 19.07l-1.41 1.41M20.48 3.52l-1.41 1.41M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M20.7 14.4A7.8 7.8 0 0 1 9.6 3.3 8.9 8.9 0 1 0 20.7 14.4Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
