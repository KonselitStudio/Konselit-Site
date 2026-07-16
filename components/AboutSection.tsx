"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function AboutSection() {
  const { content } = useLanguage();
  const { about } = content;

  return (
    <section id="hakkimizda" className="section-padding relative overflow-hidden">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="max-w-2xl">
          <p className="section-label">{about.label}</p>
          <h2 className="section-title mt-4">{about.title}</h2>
        </div>

        <div className="space-y-5 text-lg leading-8 text-muted">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="section-shell mt-12 grid gap-4 md:grid-cols-3">
        {about.features.map((card) => (
          <article
            key={card.title}
            className="surface-border group rounded-[1.35rem] p-7 transition duration-300 hover:-translate-y-1 hover:border-border-strong hover:bg-surface-strong hover:shadow-card-hover"
          >
            <div className="mb-8 h-1.5 w-14 rounded-full bg-accent transition duration-300 group-hover:w-20" />
            <h3 className="text-2xl font-black text-foreground">{card.title}</h3>
            <p className="mt-4 leading-7 text-muted">{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
