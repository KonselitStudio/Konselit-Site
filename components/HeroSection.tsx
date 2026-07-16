"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function HeroSection() {
  const { content } = useLanguage();
  const { hero } = content;

  return (
    <section id="anasayfa" className="relative isolate overflow-hidden pt-32 sm:pt-36 lg:min-h-screen lg:pt-40">
      <div className="hero-glow absolute inset-0 -z-10" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[42rem] bg-grid-soft bg-[length:42px_42px] opacity-[0.18] [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <div className="section-shell grid items-center gap-14 pb-20 lg:grid-cols-[1.02fr_0.98fr] lg:pb-28">
        <div className="fade-up max-w-4xl">
          <p className="mb-6 inline-flex rounded-full border border-border-strong bg-accent-soft px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-accent">
            {hero.eyebrow}
          </p>
          <h1 className="max-w-5xl text-5xl font-black leading-[0.96] text-foreground sm:text-6xl lg:text-7xl xl:text-[5.7rem]">
            {hero.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">{hero.description}</p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={hero.primaryButton.href}
              className="inline-flex h-14 items-center justify-center rounded-full bg-accent px-7 text-sm font-black uppercase tracking-[0.12em] text-accent-fg shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-accent-strong"
            >
              {hero.primaryButton.label}
            </a>
            <a
              href={hero.secondaryButton.href}
              className="inline-flex h-14 items-center justify-center rounded-full border border-border bg-surface px-7 text-sm font-black uppercase tracking-[0.12em] text-foreground transition duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:text-accent"
            >
              {hero.secondaryButton.label}
            </a>
          </div>
        </div>

        <div className="fade-up relative min-h-[30rem] lg:min-h-[42rem]" style={{ animationDelay: "120ms" }}>
          <div className="absolute inset-4 rounded-[2rem] bg-radial-accent blur-3xl" />
          <div className="surface-border relative h-full min-h-[30rem] overflow-hidden rounded-[2rem] p-5 shadow-card-hover lg:min-h-[42rem]">
            <div className="absolute inset-0 bg-grid-soft bg-[length:34px_34px] opacity-[0.18]" />
            <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-accent-soft blur-3xl" />
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[var(--soft-glow)] blur-3xl" />

            <div className="relative flex h-full flex-col justify-between gap-8">
              <div className="grid grid-cols-3 gap-3">
                {hero.visual.cards.map((item) => (
                  <div key={item} className="rounded-2xl border border-border bg-[var(--visual-panel-soft)] p-4 backdrop-blur">
                    <div className="mb-8 h-1.5 w-10 rounded-full bg-accent" />
                    <p className="text-sm font-bold text-foreground">{item}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-[1.5rem] border border-border bg-[var(--visual-panel)] p-6 backdrop-blur-md">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">{hero.visual.eyebrow}</p>
                    <h2 className="mt-2 text-3xl font-black text-foreground">{hero.visual.title}</h2>
                  </div>
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-black text-accent-fg">
                    {hero.visual.year}
                  </span>
                </div>

                <div className="space-y-3">
                  {hero.visual.rows.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center justify-between gap-5 rounded-2xl border border-border bg-surface px-4 py-3"
                    >
                      <div>
                        <p className="font-bold text-foreground">{item.title}</p>
                        <p className="text-sm text-muted">{item.description}</p>
                      </div>
                      <span className="size-2.5 rounded-full bg-accent shadow-glow" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {hero.visual.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className={`rounded-2xl border p-5 ${
                      stat.accent ? "border-border-strong bg-accent-soft" : "border-border bg-surface"
                    }`}
                  >
                    <p className={`text-4xl font-black ${stat.accent ? "text-accent" : "text-foreground"}`}>
                      {stat.value}
                    </p>
                    <p className={`mt-2 text-sm ${stat.accent ? "text-muted-strong" : "text-muted"}`}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
