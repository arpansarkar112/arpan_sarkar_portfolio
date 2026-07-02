import { useState } from "react";
import { SectionHeader } from "./Projects";
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
import { Bot, Code2, Database, Layers3, ShieldCheck, Workflow } from "lucide-react";

type Skill = {
  name: string;
  cat: "frontend" | "backend" | "language" | "concept";
  level: number; // 1-5
  note: string;
};

type SkillIcon = React.ComponentType<{ className?: string }>;

type SkillIconMeta = {
  Icon: SkillIcon;
  color: string;
};

const skillIcons: Partial<Record<string, SkillIconMeta>> = {
  React: { Icon: SiReact, color: "text-[#61DAFB]" },
  HTML: { Icon: SiHtml5, color: "text-[#E34F26]" },
  CSS: { Icon: SiCss, color: "text-[#1572B6]" },
  "Node.js": { Icon: SiNodedotjs, color: "text-[#339933]" },
  Express: { Icon: SiExpress, color: "text-[#000000] dark:text-[#FFFFFF]" },
  PostgreSQL: { Icon: SiPostgresql, color: "text-[#336791]" },
  MongoDB: { Icon: SiMongodb, color: "text-[#47A248]" },
  Prisma: { Icon: SiPrisma, color: "text-[#2D3748] dark:text-[#FFFFFF]" },
  TypeScript: { Icon: SiTypescript, color: "text-[#3178C6]" },
  JavaScript: { Icon: SiJavascript, color: "text-[#F7DF1E]" },
  "C++": { Icon: SiCplusplus, color: "text-[#00599C]" },
  "REST APIs": { Icon: Workflow, color: "text-[#14B8A6]" },
  OOP: { Icon: Code2, color: "text-[#8B5CF6]" },
  "DB Normalization": { Icon: Database, color: "text-[#0EA5E9]" },
  "JWT Auth": { Icon: ShieldCheck, color: "text-[#22C55E]" },
  RBAC: { Icon: Layers3, color: "text-[#6366F1]" },
  "AI Integration": { Icon: Bot, color: "text-[#06B6D4]" },
};

const skills: Skill[] = [
  // Frontend
  { name: "React", cat: "frontend", level: 5, note: "Component architecture, hooks, suspense." },
  { name: "HTML", cat: "frontend", level: 5, note: "Semantic, accessible markup." },
  { name: "CSS", cat: "frontend", level: 5, note: "Tailwind, custom design tokens, motion." },
  // Backend
  { name: "Node.js", cat: "backend", level: 5, note: "Async runtime, service layers." },
  { name: "Express", cat: "backend", level: 5, note: "REST APIs, middleware pipelines." },
  { name: "PostgreSQL", cat: "backend", level: 4, note: "Relational modelling, indexing." },
  { name: "MongoDB", cat: "backend", level: 5, note: "Document schemas, aggregation." },
  { name: "Prisma", cat: "backend", level: 4, note: "Typed data layer, migrations." },
  // Languages
  { name: "TypeScript", cat: "language", level: 5, note: "End-to-end type safety." },
  { name: "JavaScript", cat: "language", level: 5, note: "ES2024, functional patterns." },
  { name: "C++", cat: "language", level: 4, note: "Systems-level thinking, OOP." },
  // Concepts
  { name: "REST APIs", cat: "concept", level: 5, note: "Contract-first API design." },
  { name: "OOP", cat: "concept", level: 5, note: "Encapsulation, composition, polymorphism." },
  { name: "DB Normalization", cat: "concept", level: 4, note: "3NF, FK integrity, distinct mappings." },
  { name: "JWT Auth", cat: "concept", level: 5, note: "Stateless auth, refresh flows." },
  { name: "RBAC", cat: "concept", level: 5, note: "Role-based access, policy layers." },
  { name: "AI Integration", cat: "concept", level: 4, note: "LLM APIs, RPA agent orchestration." },
];

const CAT_META: Record<Skill["cat"], { label: string; code: string; color: string }> = {
  frontend: { label: "Frontend", code: "FE", color: "bg-accent text-accent-foreground" },
  backend: { label: "Backend", code: "BE", color: "bg-foreground text-background" },
  language: { label: "Languages", code: "LN", color: "bg-emerald-500 text-black" },
  concept: { label: "Architecture", code: "AR", color: "bg-background text-foreground border border-foreground" },
};

export function Skills() {
  const [active, setActive] = useState<Skill | null>(null);
  const [filter, setFilter] = useState<Skill["cat"] | "all">("all");

  const filtered = filter === "all" ? skills : skills.filter((s) => s.cat === filter);

  return (
    <section id="skills" className="border-b border-hairline">
      <SectionHeader
        eyebrow="004 — Skills & tech stack"
        title="Development Stack"
        note="HOVER A NODE — INSPECT THE STACK"
      />
      <div className="mx-auto max-w-350 px-6 pb-24 md:px-10">
        {/* Filter rail */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-hairline pb-6">
          <div className="flex flex-wrap gap-1.5">
            {(["all", "frontend", "backend", "language", "concept"] as const).map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`border px-3 py-1.5 font-mono-tech text-[10px] uppercase tracking-widest transition ${
                  filter === c
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground hover:border-accent hover:text-accent"
                }`}
              >
                {c === "all" ? "All Nodes" : CAT_META[c].label}
              </button>
            ))}
          </div>
          <span className="font-mono-tech text-[11px] uppercase tracking-widest text-muted-foreground">
            {filtered.length.toString().padStart(2, "0")} / {skills.length} nodes
          </span>
        </div>

        {/* Hex grid + inspector */}
        <div className="grid grid-cols-12 gap-8">
          {/* Grid */}
          <div className="col-span-12 lg:col-span-8">
            <div className="flex flex-wrap gap-x-2 gap-y-3">
              {filtered.map((s) => (
                <HexNode
                  key={s.name}
                  skill={s}
                  onEnter={() => setActive(s)}
                  onLeave={() => setActive((cur) => (cur?.name === s.name ? null : cur))}
                />
              ))}
            </div>
          </div>

          {/* Inspector */}
          <aside className="col-span-12 lg:col-span-4">
            <div className="sticky top-24 border border-foreground bg-background p-6 shadow-[8px_8px_0_0_var(--color-hairline)]">
              <div className="flex items-center justify-between border-b border-hairline pb-3">
                <span className="font-mono-tech text-[10px] uppercase tracking-widest text-muted-foreground">
                  › Inspector
                </span>
                <span className="h-2 w-2 animate-pulse-dot bg-accent" />
              </div>

              {active ? (
                <div className="mt-5">
                  <span
                    className={`inline-flex items-center px-2 py-0.5 font-mono-tech text-[10px] uppercase tracking-widest ${CAT_META[active.cat].color}`}
                  >
                    {CAT_META[active.cat].code} · {CAT_META[active.cat].label}
                  </span>
                  <h3 className="mt-4 font-display text-3xl font-semibold text-foreground">
                    {active.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{active.note}</p>
                  <div className="mt-6">
                    <div className="flex items-center justify-between font-mono-tech text-[10px] uppercase tracking-widest text-muted-foreground">
                      <span>Fluency</span>
                      <span>{active.level}/5</span>
                    </div>
                    <div className="mt-2 flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 flex-1 ${
                            i < active.level ? "bg-accent" : "bg-hairline"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mt-5">
                  <p className="font-display text-xl leading-snug text-foreground">
                    Hover a node to inspect.
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Each hexagon is a live capability of frontend, backend, language, or
                    architectural pattern. The stack is composed.
                  </p>
                  <div className="mt-6 space-y-2">
                    {(Object.keys(CAT_META) as Skill["cat"][]).map((c) => (
                      <div
                        key={c}
                        className="flex items-center justify-between font-mono-tech text-[11px] uppercase tracking-widest"
                      >
                        <span className="flex items-center gap-2 text-muted-foreground">
                          <span className={`inline-block h-2 w-2 ${CAT_META[c].color.split(" ")[0]}`} />
                          {CAT_META[c].label}
                        </span>
                        <span className="text-foreground">
                          {skills.filter((s) => s.cat === c).length.toString().padStart(2, "0")}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function HexNode({
  skill,
  onEnter,
  onLeave,
}: {
  skill: Skill;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const meta = CAT_META[skill.cat];
  const iconMeta = skillIcons[skill.name];
  return (
    <button
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      className="group relative"
      aria-label={skill.name}
    >
      <div
        className="hex flex h-24 w-28 items-center justify-center border border-foreground/10 bg-background transition duration-300 group-hover:scale-[1.06] group-hover:border-accent dark:bg-[#111214]"
      >
        <div className="flex flex-col items-center px-2 text-center">
          {iconMeta ? (
            <iconMeta.Icon className={`h-7 w-7 opacity-95 ${iconMeta.color}`} />
          ) : (
            <span className="font-mono-tech text-[9px] uppercase tracking-widest opacity-60">
              {meta.code}
            </span>
          )}
          <span className="mt-1 font-display text-[13px] font-semibold leading-tight">
            {skill.name}
          </span>
        </div>
      </div>
      {/* Tooltip */}
      <div className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 w-56 -translate-x-1/2 border border-foreground bg-background p-3 text-left opacity-0 shadow-[4px_4px_0_0_var(--color-hairline)] transition group-hover:opacity-100">
        <p className="font-mono-tech text-[10px] uppercase tracking-widest text-accent">
          {meta.label}
        </p>
        <p className="mt-1 font-display text-sm font-semibold text-foreground">{skill.name}</p>
        <p className="mt-1 text-[11px] leading-snug text-muted-foreground">{skill.note}</p>
      </div>
    </button>
  );
}
