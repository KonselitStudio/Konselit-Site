"use client";

import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/components/LanguageProvider";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const { content } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "border-b border-border bg-header shadow-[var(--header-shadow)] backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="section-shell flex h-20 items-center justify-between">
        <a href="#anasayfa" className="group flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <BrandLogo />
        </a>

        <div className="hidden items-center gap-5 lg:gap-7 md:flex">
          <nav className="flex items-center gap-5 lg:gap-8">
            {content.header.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-muted transition-colors duration-200 hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            type="button"
            aria-label={content.header.menuLabel}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="grid size-11 place-items-center rounded-full border border-border bg-surface text-foreground shadow-card transition hover:border-border-strong hover:text-accent"
          >
            <span className="flex w-5 flex-col gap-1.5">
              <span className={`h-0.5 rounded-full bg-current transition ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 rounded-full bg-current transition ${isOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 rounded-full bg-current transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`mobile-menu-bg overflow-hidden border-border backdrop-blur-xl transition-all duration-300 md:hidden ${
          isOpen ? "max-h-80 border-y" : "max-h-0 border-y-0"
        }`}
      >
        <nav className="section-shell flex flex-col py-4">
          {content.header.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="border-b border-border py-4 text-base font-semibold text-muted-strong transition hover:text-accent last:border-b-0"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
