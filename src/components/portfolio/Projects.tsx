import { useState } from "react";
import { ArrowUpRight, ChevronDown, Github } from "lucide-react";
import { projectsData, Project } from "@/lib/projects";
import { Reveal } from "@/components/ui/Reveal";

export function Projects() {
  return (
    <section id="work" className="border-b border-hairline">
      <SectionHeader
        eyebrow="003 — Selected projects"
        title="Systems, shipped"
        note="A WORKING ARCHIVE OF FULL-STACK SYSTEMS"
      />
      <div className="mx-auto max-w-350 px-6 pb-16 md:px-10">
        <Reveal delay={0.1}>
          <div className="grid auto-rows-[minmax(240px,auto)] grid-cols-1 gap-px bg-hairline md:grid-cols-12">
            {projectsData.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </Reveal>

        {/* Archive CTA */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-hairline pt-12">
          <p className="font-mono-tech text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            / Beyond the featured three
          </p>
          <a
            href="https://github.com/arpansarkar112?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-4 border-2 border-foreground bg-background px-8 py-5 font-mono-tech text-xs uppercase tracking-widest text-foreground transition hover:bg-foreground hover:text-background"
          >
            <Github className="h-5 w-5" />
            View Full Project Archives
            <ArrowUpRight className="h-5 w-5 transition group-hover:rotate-45" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p }: { project: Project }) {
  const tone =
    p.tone === "ink"
      ? "bg-foreground text-background"
      : p.tone === "accent"
      ? "bg-accent text-accent-foreground"
      : "bg-background text-foreground";
  const border = p.tone === "ink" || p.tone === "accent" ? "border-transparent" : "border-hairline";
  return (
    <article
      className={`group relative flex flex-col gap-8 overflow-hidden border ${border} ${tone} p-8 transition duration-500 hover:-translate-y-0.5 ${p.span}`}
    >
      {/* Light transparent hover overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-foreground/0 transition duration-500 group-hover:bg-foreground/5" />

      {p.demo ? (
        <a
          href={p.demo}
          target="_blank"
          rel="noreferrer"
          className="group/preview block overflow-hidden border border-current/20 bg-black/10 transition duration-300 hover:border-accent"
          aria-label={`${p.title} live demo preview`}
        >
          <div className="relative aspect-video w-full bg-neutral-950">
            <iframe
              src={p.demo}
              title={`${p.title} live preview`}
              loading="lazy"
              className="pointer-events-none h-full w-full scale-[1.01]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent transition group-hover/preview:from-black/20" />
            <div className="absolute left-4 top-4 inline-flex items-center gap-2 border border-background/70 bg-background/90 px-3 py-1 font-mono-tech text-[10px] uppercase tracking-widest text-foreground shadow-sm">
              Live preview
              <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </div>
        </a>
      ) : (
        <div className="w-full overflow-hidden border border-current/20 bg-black/10 aspect-video">
          <img src={p.image} alt={p.title} className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition duration-500" />
        </div>
      )}

      <header className="flex items-start justify-between gap-4">
        <span className="font-mono-tech text-[10px] uppercase tracking-widest opacity-70">
          {p.index} / {p.year}
        </span>
      </header>

      <div className="flex-1 flex flex-col">
        <h3 className="font-display text-2xl font-semibold leading-tight md:text-3xl mb-auto">
          {p.title}
        </h3>
        
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`/project/${p.id}`}
            className="group/btn inline-flex items-center gap-2 border border-current px-5 py-2.5 font-mono-tech text-xs uppercase tracking-widest transition hover:bg-current/10"
          >
            View More / Details
            <ArrowUpRight className="h-4 w-4 transition group-hover/btn:rotate-45" />
          </a>
        </div>
      </div>
    </article>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  note,
}: {
  eyebrow: string;
  title: string;
  note?: string;
}) {
  return (
    <Reveal>
      <div className="mx-auto max-w-350 px-6 pb-10 pt-24 md:px-10">
        <div className="grid grid-cols-12 items-end gap-6 border-b border-hairline pb-8">
          <div className="col-span-12 md:col-span-8">
            <p className="font-mono-tech text-[11px] uppercase tracking-[0.28em] text-accent">
              {eyebrow}
            </p>
            <h2 className="mt-4 font-display text-5xl font-bold leading-[0.95] text-foreground md:text-7xl">
              {title}
            </h2>
          </div>
          {note && (
            <p className="col-span-12 max-w-sm font-mono-tech text-xs uppercase tracking-widest text-muted-foreground md:col-span-4 md:text-right">
              {note}
            </p>
          )}
        </div>
      </div>
    </Reveal>
  );
}
