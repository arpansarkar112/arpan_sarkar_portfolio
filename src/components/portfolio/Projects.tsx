import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { PiArrowUpRight, PiGithubLogo } from "react-icons/pi";
import { projectsData, type Project } from "@/lib/projects";
import { Reveal } from "@/components/ui/Reveal";
import { useTranslation } from "react-i18next";

export function Projects() {
  const { t } = useTranslation();
  return (
    <section id="work" className="border-b border-hairline">
      <SectionHeader
        eyebrow={t("projects.eyebrow")}
        title={t("projects.title")}
        note={t("projects.note")}
      />
      <div className="mx-auto max-w-[1400px] px-6 pb-20 md:px-10 md:pb-24">
        <Reveal delay={0.08}>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            {projectsData.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </Reveal>

        {/* Archive CTA */}
        <Reveal delay={0.12}>
          <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-stone p-8 sm:flex-row sm:items-center">
            <div>
              <p className="font-mono-tech text-xs font-medium text-accent">
                {t("projects.beyondThree")}
              </p>
              <p className="mt-1 font-display text-xl font-semibold text-foreground">
                Explore additional repositories, experiments, and coursework on GitHub.
              </p>
            </div>
            <a
              href="https://github.com/arpansarkar112?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 rounded-lg border border-foreground bg-foreground px-3 py-2 text-base font-semibold text-background transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent hover:bg-accent hover:text-accent-foreground active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <PiGithubLogo className="h-5 w-5" />
              {t("projects.viewArchives")}
              <PiArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProjectCard({ project: p }: { project: Project }) {
  const { t } = useTranslation();
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const surface = p.tone === "stone" ? "bg-stone" : "bg-card";
  const isWide = p.span.includes("lg:col-span-12");

  return (
    <article
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border ${surface} p-6 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-foreground/40 md:p-8 ${p.span} ${
        isWide ? "lg:grid lg:grid-cols-12 lg:items-center lg:gap-8" : "gap-6"
      }`}
    >
      {/* Preview Frame */}
      <div className={isWide ? "lg:col-span-7" : "w-full"}>
        {p.demo ? (
          <a
            href={p.demo}
            target="_blank"
            rel="noreferrer"
            className="group/preview relative block aspect-video w-full overflow-hidden rounded-xl border border-border bg-secondary transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label={`${p.title} live preview`}
          >
            {/* Layout-shaped skeleton loader while iframe initializes */}
            {!iframeLoaded && (
              <div
                aria-hidden="true"
                className="absolute inset-0 z-10 flex flex-col justify-between bg-secondary p-4"
              >
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-border" />
                    <span className="h-2.5 w-2.5 rounded-full bg-border" />
                    <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  </div>
                  <span className="h-3 w-28 animate-pulse rounded-sm bg-border" />
                </div>
                <div className="space-y-3 py-4">
                  <div className="h-5 w-2/3 animate-pulse rounded-sm bg-border" />
                  <div className="h-3 w-1/2 animate-pulse rounded-sm bg-border" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-16 animate-pulse rounded-md bg-border" />
                  <div className="h-16 animate-pulse rounded-md bg-border" />
                  <div className="h-16 animate-pulse rounded-md bg-border" />
                </div>
              </div>
            )}
            <iframe
              src={p.demo}
              title={`${p.title} live preview`}
              loading="lazy"
              onLoad={() => setIframeLoaded(true)}
              className={`pointer-events-none h-full w-full transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                iframeLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
            <div className="absolute left-3 top-3 z-20 inline-flex items-center gap-2 rounded-md border border-border bg-background/95 px-3 py-1 font-mono-tech text-xs font-medium text-foreground">
              {t("projects.livePreview")}
              <PiArrowUpRight className="h-3.5 w-3.5 text-accent" />
            </div>
          </a>
        ) : (
          <div className="aspect-video w-full overflow-hidden rounded-xl border border-border bg-secondary">
            <img
              src={p.image}
              alt={`Preview of ${p.title}`}
              className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
            />
          </div>
        )}
      </div>

      {/* Content & Bottom-aligned CTAs */}
      <div
        className={`flex flex-1 flex-col justify-between ${
          isWide ? "mt-6 lg:col-span-5 lg:mt-0 lg:h-full" : ""
        }`}
      >
        <div>
          <div className="flex items-center justify-between gap-4">
            <span className="font-mono-tech text-xs font-medium text-accent tabular-nums">
              {p.index} · {p.year}
            </span>
            <div className="flex flex-wrap gap-1">
              {p.stack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="rounded-sm border border-border bg-background px-2 py-0.5 font-mono-tech text-xs text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground text-balance md:text-3xl">
            {p.title}
          </h3>

          <p className="mt-3 max-w-[65ch] text-base text-muted-foreground text-pretty">
            {p.summary}
          </p>

          <ul className="mt-4 space-y-2 border-t border-hairline pt-4">
            {p.highlights.slice(0, 2).map((h) => (
              <li
                key={h}
                className="flex items-start gap-2 text-sm text-foreground/90 text-pretty"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4 pt-2">
          <Link
            to="/project/$projectId"
            params={{ projectId: p.id }}
            className="group/btn inline-flex items-center gap-2 rounded-lg border border-foreground bg-foreground px-3 py-2 text-base font-semibold text-background transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent hover:bg-accent hover:text-accent-foreground active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {t("projects.viewMore")}
            <PiArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Link>

          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold text-muted-foreground underline-offset-4 transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-foreground hover:underline active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Launch live app
              <PiArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
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
      <div className="mx-auto max-w-[1400px] px-6 pb-10 pt-20 md:px-10">
        <div className="grid grid-cols-12 items-end gap-6 border-b border-hairline pb-8">
          <div className="col-span-12 md:col-span-8">
            <p className="font-mono-tech text-xs font-medium tracking-wider text-accent tabular-nums">
              {eyebrow}
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground text-balance md:text-5xl">
              {title}
            </h2>
          </div>
          {note && (
            <p className="col-span-12 max-w-sm text-sm font-medium text-muted-foreground text-pretty md:col-span-4 md:text-right">
              {note}
            </p>
          )}
        </div>
      </div>
    </Reveal>
  );
}
