import { SectionHeader } from "./Projects";
import { Reveal } from "@/components/ui/Reveal";
import { PiBookOpen, PiMedal, PiArrowUpRight } from "react-icons/pi";
import { useTranslation } from "react-i18next";

export function Publications() {
  const { t } = useTranslation();
  return (
    <section id="publications" className="border-b border-hairline">
      <SectionHeader
        eyebrow={t("publications.eyebrow")}
        title={t("publications.title")}
        note={t("publications.note")}
      />
      <div className="mx-auto max-w-[1400px] px-6 pb-20 md:px-10 md:pb-24">
        <Reveal delay={0.08}>
          <article className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 text-foreground md:p-12">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 flex flex-wrap items-center justify-between gap-4 border-b border-hairline pb-6">
                <div className="flex items-center gap-3">
                  <PiBookOpen className="h-5 w-5 text-accent" />
                  <span className="font-mono-tech text-xs font-medium text-muted-foreground tabular-nums">
                    Bachelor&apos;s Thesis · SEAMK · 2026
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-md border border-border bg-stone px-3 py-1">
                  <PiMedal className="h-4 w-4 text-accent" />
                  <span className="font-mono-tech text-xs font-semibold text-foreground tabular-nums">
                    Grade · 5 / 5
                  </span>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-8">
                <h3 className="font-display text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
                  Design and Implementation of an AI Agent Web Application for{" "}
                  <span className="text-accent">Robotic Process Automation</span>
                </h3>
                <p className="mt-4 max-w-[65ch] text-base text-muted-foreground text-pretty">
                  An engineering thesis investigating how large language model
                  agents orchestrate deterministic RPA workflows through a
                  browser interface, pairing industrial automation reliability
                  with modern web architecture.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Artificial Intelligence (AI)",
                    "Robotic Process Automation (RPA)",
                    "Software Engineering",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-stone px-3 py-1 font-mono-tech text-xs font-medium text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <a
                    href="https://urn.fi/URN:NBN:fi:amk-202604277955"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-lg border border-foreground bg-foreground px-3 py-2 text-base font-semibold text-background transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent hover:bg-accent hover:text-accent-foreground active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    {t("publications.viewPaper")}
                    <PiArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>

              <div className="col-span-12 flex flex-col justify-between gap-4 rounded-xl border border-border bg-stone p-6 lg:col-span-4">
                <Metric k="Research domain" v="Agentic AI & RPA" />
                <Metric k="Publication type" v="B.Eng. Thesis" />
                <Metric k="Evaluation score" v="5.0 / 5.0 (Distinction)" />
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

function Metric({ k, v }: { k: string; v: string }) {
  return (
    <div className="border-b border-hairline pb-4 last:border-b-0 last:pb-0">
      <p className="font-mono-tech text-xs text-muted-foreground">{k}</p>
      <p className="mt-1 font-display text-xl font-semibold text-foreground tabular-nums">
        {v}
      </p>
    </div>
  );
}
