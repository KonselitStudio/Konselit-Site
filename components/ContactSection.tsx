"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function ContactSection() {
  const { content } = useLanguage();
  const { contact } = content;

  return (
    <section id="iletisim" className="section-padding relative overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-80 bg-radial-accent opacity-90" />
      <div className="section-shell relative">
        <div className="overflow-hidden rounded-[2rem] border border-border-strong bg-gradient-to-br from-surface-strong via-surface to-accent-soft p-7 shadow-card-hover sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="section-label">{contact.label}</p>
              <h2 className="mt-4 text-4xl font-black leading-tight text-foreground sm:text-5xl lg:text-6xl">
                {contact.title}
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted">{contact.description}</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:min-w-72 lg:grid-cols-1">
              {contact.links.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`inline-flex h-14 items-center justify-center rounded-full px-6 text-sm font-black uppercase tracking-[0.14em] transition duration-300 hover:-translate-y-0.5 ${
                    index === 0
                      ? "bg-accent text-accent-fg shadow-glow hover:bg-accent-strong"
                      : "border border-border bg-surface text-foreground hover:border-border-strong hover:text-accent"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
