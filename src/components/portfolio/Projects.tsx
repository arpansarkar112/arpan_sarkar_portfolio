import { useState } from "react";
import { ArrowUpRight, ChevronDown, Github, ExternalLink } from "lucide-react";

type Project = {
  index: string;
  title: string;
  summary: string;
  highlights: string[];
  stack: string[];
  demo?: string;
  repo?: string;
  span: string;
  tone: "ink" | "stone" | "accent";
  year: string;
};

const projects: Project[] = [
  {
    index: "P01",
    title: "Echo — Full-Stack AI Chat Application",
    summary:
      "Echo is a web-based AI agent designed to automate repetitive tasks (such as handling CSV files) and make intelligent decisions using natural language. I built Echo to explore how large language models (LLMs) and Agentic AI can work together to solve real-world problems.",
    highlights: [
      "Agentic AI & Robotic Process Automation (RPA)",
      "Automated CSV processing workflows",
      "LLM-driven natural language decision engine",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
    demo: "https://echo-ai-agent.vercel.app/",
    repo: "https://github.com/arpansarkar112/Full_Stack_AI_chat_Application",
    span: "md:col-span-8",
    tone: "ink",
    year: "'26",
  },
  {
    index: "P02",
    title: "SaaS Landing Page",
    summary:
      "Highly responsive frontend application — a marketing surface built as a component system rather than a page.",
    highlights: ["Fluid type & spacing scale", "Composable section primitives"],
    stack: ["React", "TypeScript", "Tailwind"],
    demo: "https://bucolic-lily-8ee23b.netlify.app/",
    repo: "https://github.com/arpansarkar112/frontend_coursework.git",
    span: "md:col-span-4",
    tone: "stone",
    year: "'26",
  },
  {
    index: "P03",
    title: "Manchester City Dashboard",
    summary:
      "Custom-built interactive dashboard themed around Manchester City FC",
    highlights: ["Live data streams", "Themed visual system"],
    stack: ["React", "Node", "REST APIs"],
    demo: "https://super-sunflower-8a5321.netlify.app/",
    repo: "https://github.com/arpansarkar112/frontend_coursework.git",
    span: "md:col-span-4",
    tone: "accent",
    year: "'25",
  },
];

const featuredProjects = projects.filter((project) => project.index !== "P03");
const moreProjects = projects.filter((project) => project.index === "P03");

export function Projects() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="work" className="border-b border-hairline">
      <SectionHeader
        eyebrow="002 — Selected projects"
        title="Systems, shipped"
        note="A WORKING ARCHIVE OF FULL-STACK SYSTEMS"
      />
      <div className="mx-auto max-w-350 px-6 pb-16 md:px-10">
        <div className="grid auto-rows-[minmax(240px,auto)] grid-cols-1 gap-px bg-hairline md:grid-cols-12">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.index} project={p} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShowMore((value) => !value)}
            className="inline-flex items-center gap-3 border border-foreground bg-background px-5 py-3 font-mono-tech text-xs uppercase tracking-widest text-foreground transition hover:bg-foreground hover:text-background"
          >
            {showMore ? "Show less" : "Show more"}
            <ChevronDown className={`h-4 w-4 transition ${showMore ? "rotate-180" : ""}`} />
          </button>
        </div>

        {showMore && (
          <div className="mt-10 grid grid-cols-1 gap-px bg-hairline md:grid-cols-12">
            {moreProjects.map((p) => (
              <ProjectCard key={p.index} project={p} />
            ))}
          </div>
        )}

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
  const isFeatured = p.index === "P01";
  const isExpandedMore = p.index === "P03";
  const tone =
    p.tone === "ink"
      ? "bg-foreground text-background"
      : p.tone === "accent"
      ? "bg-accent text-accent-foreground"
      : "bg-background text-foreground";
  const border = p.tone === "ink" || p.tone === "accent" ? "border-transparent" : "border-hairline";
  return (
    <article
      className={`group relative flex flex-col gap-8 overflow-hidden border ${border} ${tone} p-8 transition duration-500 hover:-translate-y-0.5 ${isExpandedMore ? "md:col-span-12" : p.span}`}
    >
      {!isFeatured && p.demo && (
        <a
          href={p.demo}
          target="_blank"
          rel="noreferrer"
          className={`group/preview mb-4 block overflow-hidden border border-current/20 bg-black/10 transition duration-300 hover:-translate-y-0.5 hover:border-accent ${isExpandedMore ? "md:max-w-none" : ""}`}
          aria-label={`${p.title} live demo preview`}
        >
          <div className="relative aspect-16/10 w-full bg-neutral-950">
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
      )}

      <header className="flex items-start justify-between gap-4">
        <span className="font-mono-tech text-[10px] uppercase tracking-widest opacity-70">
          {p.index} / {p.year}
        </span>
        <div className="flex gap-2 opacity-70 transition group-hover:opacity-100">
          {p.repo && (
            <a href={p.repo} target="_blank" rel="noreferrer" aria-label="Repo" className="hover:opacity-100">
              <Github className="h-4 w-4" />
            </a>
          )}
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noreferrer" aria-label="Live">
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </header>

      <div>
        <h3 className="font-display text-2xl font-semibold leading-tight md:text-3xl">
          {p.title}
        </h3>
        <p className={`mt-3 max-w-xl text-sm leading-relaxed ${p.tone === "stone" ? "text-muted-foreground" : "opacity-80"}`}>
          {p.summary}
        </p>

        <ul className="mt-5 space-y-1">
          {p.highlights.map((a) => (
            <li key={a} className="flex items-center gap-2 font-mono-tech text-[11px] uppercase tracking-widest opacity-70">
              <span className="h-px w-4 bg-current opacity-60" />
              {a}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <span
              key={s}
              className="border border-current/30 px-2 py-1 font-mono-tech text-[10px] uppercase tracking-widest opacity-90"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Stylized links */}
        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-current/20 pt-4">
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noreferrer"
              className="group/link inline-flex items-center gap-1.5 font-mono-tech text-[10px] uppercase tracking-widest transition hover:opacity-100"
            >
              <ExternalLink className="h-3 w-3" />
              Live Demo
              <span className="transition group-hover/link:translate-x-0.5">→</span>
            </a>
          )}
          {p.repo && (
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className="group/link inline-flex items-center gap-1.5 font-mono-tech text-[10px] uppercase tracking-widest opacity-70 transition hover:opacity-100"
            >
              <Github className="h-3 w-3" />
              GitHub Repo
              <span className="transition group-hover/link:translate-x-0.5">→</span>
            </a>
          )}
        </div>
      </div>

      {isFeatured && p.demo && (
        <a
          href={p.demo}
          target="_blank"
          rel="noreferrer"
          className="group/preview block overflow-hidden border border-current/20 bg-black/10 transition duration-300 hover:-translate-y-0.5 hover:border-accent"
          aria-label={`${p.title} live demo preview`}
        >
          <div className="relative aspect-16/10 w-full bg-neutral-950">
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
      )}
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
  );
}
