"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function ProcessSection() {
  const { content } = useLanguage();
  const { process } = content;

  return (
    <section id="yaklasim" className="section-padding" aria-labelledby="process-title">
      <div className="section-shell">
        <div className="mb-12 max-w-3xl">
          <p className="section-label">{process.label}</p>
          <h2 id="process-title" className="section-title mt-4">
            {process.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted">{process.description}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {process.steps.map((item) => (
            <article
              key={item.step}
              className="surface-border relative overflow-hidden rounded-[1.35rem] p-7 transition duration-300 hover:-translate-y-1 hover:border-border-strong hover:bg-surface-strong"
            >
              <div className="absolute right-5 top-5 text-7xl font-black leading-none text-[var(--muted-08)]">
                {item.step}
              </div>
              <div className="relative">
                <span className="grid size-12 place-items-center rounded-full bg-accent text-sm font-black text-accent-fg shadow-glow">
                  {item.step}
                </span>
                <h3 className="mt-10 text-3xl font-black text-foreground">{item.title}</h3>
                <p className="mt-4 leading-7 text-muted">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
