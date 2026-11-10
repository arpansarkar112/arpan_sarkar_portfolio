import { useState } from "react";
import { SectionHeader } from "./Projects";
import { Reveal } from "@/components/ui/Reveal";
import {
  SiCss,
  SiHtml5,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTypescript,
  SiCplusplus,
} from "react-icons/si";
import {
  PiRobot,
  PiCode,
  PiDatabase,
  PiStack,
  PiFingerprint,
  PiGitBranch,
} from "react-icons/pi";
import { useTranslation } from "react-i18next";

type Skill = {
  name: string;
  cat: "frontend" | "backend" | "language" | "concept";
  level: number; // 1-5
  note: string;
};

type SkillIcon = React.ComponentType<{ className?: string }>;

const skillIcons: Partial<Record<string, SkillIcon>> = {
  React: SiReact,
  HTML: SiHtml5,
  CSS: SiCss,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Prisma: SiPrisma,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "C++": SiCplusplus,
  "REST APIs": PiGitBranch,
  OOP: PiCode,
  "DB Normalization": PiDatabase,
  "JWT Auth": PiFingerprint,
  RBAC: PiStack,
  "AI Integration": PiRobot,
};

const skills: Skill[] = [
  // Frontend
  {
    name: "React",
    cat: "frontend",
    level: 5,
    note: "Component architecture, custom hooks, and concurrent rendering.",
  },
  {
    name: "HTML",
    cat: "frontend",
    level: 5,
    note: "Semantic document structure and accessible landmarks.",
  },
  {
    name: "CSS",
    cat: "frontend",
    level: 5,
    note: "Tailwind design tokens, responsive grids, and GPU transitions.",
  },
  // Backend
  {
    name: "Node.js",
    cat: "backend",
    level: 5,
    note: "Asynchronous event runtime and modular service layers.",
  },
  {
    name: "Express",
    cat: "backend",
    level: 5,
    note: "REST routing, validation middleware, and error pipelines.",
  },
  {
    name: "PostgreSQL",
    cat: "backend",
    level: 4,
    note: "Relational schema design, indexing, and transactional queries.",
  },
  {
    name: "MongoDB",
    cat: "backend",
    level: 5,
    note: "Document modeling and multi stage aggregation pipelines.",
  },
  {
    name: "Prisma",
    cat: "backend",
    level: 4,
    note: "Typed database client and automated schema migrations.",
  },
  // Languages
  {
    name: "TypeScript",
    cat: "language",
    level: 5,
    note: "Strict end to end type safety across client and server.",
  },
  {
    name: "JavaScript",
    cat: "language",
    level: 5,
    note: "Modern ES2024 standards and functional data transformations.",
  },
  {
    name: "C++",
    cat: "language",
    level: 4,
    note: "Deterministic memory management and embedded control logic.",
  },
  // Concepts
  {
    name: "REST APIs",
    cat: "concept",
    level: 5,
    note: "Contract first resource modeling and predictable status codes.",
  },
  {
    name: "OOP",
    cat: "concept",
    level: 5,
    note: "Encapsulation, composition, and polymorphic domain models.",
  },
  {
    name: "DB Normalization",
    cat: "concept",
    level: 4,
    note: "Third normal form relational integrity and foreign key mapping.",
  },
  {
    name: "JWT Auth",
    cat: "concept",
    level: 5,
    note: "Stateless session tokens and rotation workflows.",
  },
  {
    name: "RBAC",
    cat: "concept",
    level: 5,
    note: "Role based access control and granular permission guards.",
  },
  {
    name: "AI Integration",
    cat: "concept",
    level: 4,
    note: "LLM streaming orchestration and automated RPA agent execution.",
  },
];

export function Skills() {
  const { t } = useTranslation();
  const [active, setActive] = useState<Skill>(skills[0]);
  const [filter, setFilter] = useState<Skill["cat"] | "all">("all");

  const CAT_META: Record<Skill["cat"], { label: string; code: string }> = {
    frontend: { label: t("skills.categories.frontend"), code: "FE" },
    backend: { label: t("skills.categories.backend"), code: "BE" },
    language: { label: t("skills.categories.languages"), code: "LN" },
    concept: { label: t("skills.categories.architecture"), code: "AR" },
  };

  const filtered =
    filter === "all" ? skills : skills.filter((s) => s.cat === filter);

  return (
    <section id="skills" className="border-b border-hairline">
      <SectionHeader
        eyebrow={t("skills.eyebrow")}
        title={t("skills.title")}
        note={t("skills.note")}
      />
      <div className="mx-auto max-w-[1400px] px-6 pb-20 md:px-10 md:pb-24">
        <Reveal delay={0.08}>
          {/* Filter rail */}
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-hairline pb-6">
            <div className="flex flex-wrap gap-2">
              {(
                ["all", "frontend", "backend", "language", "concept"] as const
              ).map((c) => {
                const isSelected = filter === c;
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setFilter(c)}
                    className={`rounded-lg border px-3 py-2 text-sm font-semibold transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                      isSelected
                        ? "border-foreground bg-foreground text-background"
                        : "border-border bg-card text-muted-foreground hover:border-foreground hover:text-foreground"
                    }`}
                  >
                    {c === "all" ? t("skills.allNodes") : CAT_META[c].label}
                  </button>
                );
              })}
            </div>
            <span className="font-mono-tech text-xs font-medium text-muted-foreground tabular-nums">
              {filtered.length.toString().padStart(2, "0")} / {skills.length}{" "}
              {t("skills.nodes")}
            </span>
          </div>

          {/* Grid + Inspector */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                {filtered.map((s) => {
                  const Icon = skillIcons[s.name];
                  const isCurrent = active?.name === s.name;
                  return (
                    <button
                      key={s.name}
                      type="button"
                      onMouseEnter={() => setActive(s)}
                      onFocus={() => setActive(s)}
                      onClick={() => setActive(s)}
                      className={`group flex flex-col items-start justify-between rounded-xl border p-4 text-left transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                        isCurrent
                          ? "border-accent bg-stone"
                          : "border-border bg-card hover:border-foreground/40"
                      }`}
                    >
                      <div className="flex w-full items-center justify-between">
                        {Icon ? (
                          <Icon
                            className={`h-6 w-6 transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                              isCurrent
                                ? "text-accent"
                                : "text-foreground group-hover:text-accent"
                            }`}
                          />
                        ) : (
                          <span className="font-mono-tech text-xs text-muted-foreground">
                            {CAT_META[s.cat].code}
                          </span>
                        )}
                        <span className="font-mono-tech text-xs text-muted-foreground tabular-nums">
                          {CAT_META[s.cat].code}
                        </span>
                      </div>
                      <span className="mt-4 font-display text-base font-semibold text-foreground">
                        {s.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Inspector */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 rounded-2xl border border-border bg-card p-6 md:p-8">
                <div className="flex items-center justify-between border-b border-hairline pb-4">
                  <span className="font-mono-tech text-xs font-medium text-muted-foreground">
                    {t("skills.inspector")}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-accent animate-pulse-dot" />
                </div>

                <div className="mt-6">
                  <span className="inline-flex items-center rounded-md border border-border bg-stone px-2 py-1 font-mono-tech text-xs font-medium text-accent">
                    {CAT_META[active.cat].code} · {CAT_META[active.cat].label}
                  </span>
                  <h3 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground">
                    {active.name}
                  </h3>
                  <p className="mt-2 text-base text-muted-foreground text-pretty">
                    {active.note}
                  </p>

                  <div className="mt-6 border-t border-hairline pt-6">
                    <div className="flex items-center justify-between font-mono-tech text-xs text-muted-foreground tabular-nums">
                      <span>{t("skills.fluency")}</span>
                      <span className="font-semibold text-foreground">
                        {active.level} / 5
                      </span>
                    </div>
                    <div className="mt-2 flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className={`h-2 flex-1 rounded-sm transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                            i < active.level ? "bg-accent" : "bg-secondary"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 space-y-2 border-t border-hairline pt-6">
                    {(Object.keys(CAT_META) as Skill["cat"][]).map((c) => (
                      <div
                        key={c}
                        className="flex items-center justify-between font-mono-tech text-xs tabular-nums"
                      >
                        <span className="text-muted-foreground">
                          {CAT_META[c].label}
                        </span>
                        <span className="font-medium text-foreground">
                          {skills
                            .filter((s) => s.cat === c)
                            .length.toString()
                            .padStart(2, "0")}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
