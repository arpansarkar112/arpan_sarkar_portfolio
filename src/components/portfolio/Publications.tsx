import { SectionHeader } from "./Projects";
import { BookOpen, Award } from "lucide-react";

export function Publications() {
  return (
    <section id="publications" className="border-b border-hairline">
      <SectionHeader
        eyebrow="005 — Publications"
        title="Academic spotlight"
        note="PEER-REVIEWED · GRADE 5/5"
      />
      <div className="mx-auto max-w-350 px-6 pb-24 md:px-10">
        <article className="relative overflow-hidden border border-foreground bg-foreground text-background shadow-[10px_10px_0_0_var(--color-accent)]">
          {/* Corner mark */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rotate-12 border border-background/20" />
          <div className="pointer-events-none absolute right-8 top-8 h-24 w-24 border border-accent/50" />

          <div className="relative grid grid-cols-12 gap-8 p-8 md:p-14">
            <div className="col-span-12 flex items-center gap-3 md:col-span-8">
              <BookOpen className="h-5 w-5 text-accent" />
              <span className="font-mono-tech text-[10px] uppercase tracking-widest text-background/70">
                Bachelor's Thesis · SEAMK · 2026
              </span>
            </div>
            <div className="col-span-12 flex items-center justify-start gap-2 md:col-span-4 md:justify-end">
              <Award className="h-4 w-4 text-accent" />
              <span className="font-mono-tech text-[10px] uppercase tracking-widest text-accent">
                Grade · 5/5
              </span>
            </div>

            <div className="col-span-12">
              <h3 className="max-w-4xl font-display text-3xl font-semibold leading-[1.05] md:text-5xl">
                Design and Implementation of an AI Agent Web Application for{" "}
                <span className="italic text-accent">Robotic Process Automation</span>
              </h3>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-background/70">
                A research and engineering thesis exploring how large language model
                agents can orchestrate deterministic RPA workflows through a
                browser-native interface, combining automation-engineering rigor with
                modern full-stack architecture.
              </p>
              <a
                href="https://urn.fi/URN:NBN:fi:amk-202604277955"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 border border-background/40 px-4 py-2 font-mono-tech text-[10px] uppercase tracking-widest text-background transition hover:border-accent hover:text-accent"
              >
                Read thesis →
              </a>
            </div>

            <div className="col-span-12 mt-4 flex flex-wrap gap-2">
              {[
                "Artificial Intelligence (AI)",
                "Robotic Process Automation (RPA)",
                "Software Engineering",
              ].map((t) => (
                <span
                  key={t}
                  className="border border-background/40 px-3 py-1.5 font-mono-tech text-[10px] uppercase tracking-widest text-background"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="col-span-12 mt-6 grid grid-cols-3 gap-6 border-t border-background/20 pt-8">
              <Metric k="Domain" v="AI · RPA" />
              <Metric k="Type" v="Thesis" />
              <Metric k="Grade" v="5 / 5" />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function Metric({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <p className="font-mono-tech text-[10px] uppercase tracking-widest text-background/60">
        / {k}
      </p>
      <p className="mt-2 font-display text-xl font-semibold text-background md:text-2xl">{v}</p>
    </div>
  );
}
