"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import type { SiteContent } from "@/content";

type Project = SiteContent["projects"][number];
type ProjectCardProps = {
  project: Project;
  variant?: "large" | "small" | "standard";
};

export function ProjectsSection() {
  const { content } = useLanguage();
  const showcaseProjects = content.projects.slice(0, 4);
  const remainingProjects = content.projects.slice(4);

  return (
    <section id="projeler" className="section-padding relative overflow-hidden bg-section-alt">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
      <div className="section-shell">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="section-label">{content.projectsSection.label}</p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-foreground sm:text-5xl lg:text-6xl">
              {content.projectsSection.title}
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-muted">{content.projectsSection.description}</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          <ProjectCard project={showcaseProjects[0]} variant="large" />
          <ProjectCard project={showcaseProjects[1]} variant="small" />
          <ProjectCard project={showcaseProjects[2]} variant="small" />
          <ProjectCard project={showcaseProjects[3]} variant="large" />
        </div>

        <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {remainingProjects.map((project) => (
            <ProjectCard key={project.title} project={project} variant="standard" />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, variant = "standard" }: ProjectCardProps) {
  const isLarge = variant === "large";
  const isSmall = variant === "small";
  const storeLinks = [
    project.playStoreUrl ? { label: "Google Play", href: project.playStoreUrl } : null,
    project.appStoreUrl ? { label: "App Store", href: project.appStoreUrl } : null,
  ].filter(Boolean) as Array<{ label: string; href: string }>;

  return (
    <article
      className={`surface-border group relative overflow-hidden rounded-[1.5rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-card-hover ${
        isLarge ? "min-h-[30rem] lg:col-span-2" : "min-h-[25rem]"
      }`}
    >
      <div className={`project-tone-${project.tone} absolute inset-0 opacity-80 transition group-hover:opacity-100`} />
      <div className="absolute inset-0 bg-grid-soft bg-[length:32px_32px] opacity-[0.12]" />
      <div className={`relative flex h-full flex-col justify-between ${variant === "standard" ? "min-h-[24rem]" : "min-h-[22rem]"}`}>
        <div className="flex items-center justify-between gap-4">
          <span className="rounded-full border border-border-strong bg-[var(--visual-panel-soft)] px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-accent backdrop-blur">
            {project.category}
          </span>
          {project.logoSrc ? (
            <Image
              src={project.logoSrc}
              alt={`${project.title} logo`}
              width={48}
              height={48}
              className="size-12 rounded-2xl border border-border bg-surface object-cover shadow-card transition group-hover:border-border-strong"
            />
          ) : (
            <span className="size-10 rounded-full border border-border bg-surface transition group-hover:border-border-strong group-hover:bg-accent-soft" />
          )}
        </div>

        <div
          className={`rounded-[1.25rem] border border-border bg-[var(--project-visual)] p-5 backdrop-blur-sm ${
            isLarge ? "my-12 md:p-6" : "my-9"
          }`}
        >
          <div className="mb-4 flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-accent" />
            <span className="size-2.5 rounded-full bg-[var(--muted-35)]" />
            <span className="size-2.5 rounded-full bg-[var(--muted-20)]" />
          </div>
          <div className="space-y-3">
            <div className="h-3 w-3/4 rounded-full bg-[var(--muted-20)]" />
            <div className="h-3 w-1/2 rounded-full bg-[var(--accent-55)]" />
            {project.logoSrc ? (
              <div
                className={`grid place-items-center rounded-2xl border border-border bg-surface ${
                  isLarge ? "h-28" : "h-20"
                }`}
              >
                <Image
                  src={project.logoSrc}
                  alt={`${project.title} logo`}
                  width={isLarge ? 72 : 56}
                  height={isLarge ? 72 : 56}
                  className={`${isLarge ? "size-[4.5rem]" : "size-14"} rounded-[1.15rem] object-cover shadow-card`}
                />
              </div>
            ) : (
              <div className={`rounded-2xl border border-border bg-surface ${isLarge ? "h-28" : "h-20"}`} />
            )}
          </div>
        </div>

        <div>
          <h3 className={`font-black text-foreground ${isLarge ? "text-4xl" : "text-3xl"}`}>{project.title}</h3>
          <p className={`mt-4 max-w-xl leading-7 text-muted ${isSmall ? "text-sm" : ""}`}>{project.description}</p>
          {storeLinks.length > 0 ? (
            <div className="mt-6 flex flex-wrap gap-3">
              {storeLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex h-11 items-center justify-center rounded-full px-4 text-xs font-black uppercase tracking-[0.12em] transition duration-300 hover:-translate-y-0.5 ${
                    index === 0
                      ? "bg-accent text-accent-fg shadow-glow hover:bg-accent-strong"
                      : "border border-border bg-surface text-foreground hover:border-border-strong hover:text-accent"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
