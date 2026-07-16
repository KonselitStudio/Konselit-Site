"use client";

import { BrandLogo } from "@/components/BrandLogo";
import { useLanguage } from "@/components/LanguageProvider";

export function Footer() {
  const { content } = useLanguage();

  return (
    <footer className="footer-bg border-t border-border">
      <div className="section-shell py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <a href="#anasayfa" className="flex items-center gap-3">
            <BrandLogo />
          </a>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-muted">
            {content.header.nav.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-accent">
                {item.label}
              </a>
            ))}
            {content.contact.links.slice(1).map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-accent">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{content.footer.copyright}</p>
          <p>{content.footer.description}</p>
        </div>
      </div>
    </footer>
  );
}
