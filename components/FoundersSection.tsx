"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function FoundersSection() {
  const { content } = useLanguage();
  const { founders } = content;

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="section-shell">
        <div className="mb-12 max-w-3xl">
          <p className="section-label">{founders.label}</p>
          <h2 className="section-title mt-4">{founders.title}</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {founders.people.map((person) => (
            <article
              key={person.name}
              className="surface-border group rounded-[1.5rem] p-8 transition duration-300 hover:-translate-y-1 hover:border-border-strong hover:bg-surface-strong hover:shadow-card-hover"
            >
              <div className="mb-10 flex items-center gap-4">
                <span className="grid size-14 place-items-center rounded-full bg-accent text-lg font-black text-accent-fg shadow-glow">
                  {person.name
                    .split(" ")
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-border-strong to-transparent" />
              </div>
              <h3 className="text-3xl font-black text-foreground">{person.name}</h3>
              <p className="mt-3 text-base font-semibold text-muted">{person.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
