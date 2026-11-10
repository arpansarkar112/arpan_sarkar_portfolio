import { SectionHeader } from "./Projects";
import { Reveal } from "@/components/ui/Reveal";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="border-b border-hairline">
      <SectionHeader
        eyebrow={t("about.eyebrow")}
        title={t("about.title")}
        note={t("about.note")}
      />
      <div className="mx-auto max-w-[1400px] px-6 pb-20 md:px-10 md:pb-24">
        <Reveal delay={0.08}>
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
            {/* Primary lead column (asymmetric 7-col) */}
            <article className="flex flex-col justify-between rounded-2xl border border-border bg-card p-8 transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-foreground/30 md:p-10 lg:col-span-7">
              <div>
                <span className="font-mono-tech text-xs font-medium tracking-wider text-accent">
                  {t("about.journeyTitle")}
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground text-balance md:text-3xl">
                  From industrial control logic to resilient web applications
                </h3>
                <p className="mt-4 max-w-[65ch] text-base text-muted-foreground text-pretty">
                  {t("about.journeyText")}
                </p>
              </div>

              {/* Proof metrics next to the claims they support */}
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-hairline pt-6">
                <div>
                  <p className="font-display text-2xl font-bold text-foreground tabular-nums md:text-3xl">
                    5.0 / 5
                  </p>
                  <p className="mt-1 font-mono-tech text-xs text-muted-foreground">
                    AI & RPA thesis grade
                  </p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-foreground tabular-nums md:text-3xl">
                    3.49
                  </p>
                  <p className="mt-1 font-mono-tech text-xs text-muted-foreground">
                    B.Eng. GPA at SEAMK
                  </p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-foreground tabular-nums md:text-3xl">
                    17
                  </p>
                  <p className="mt-1 font-mono-tech text-xs text-muted-foreground">
                    Core stack capabilities
                  </p>
                </div>
              </div>
            </article>

            {/* Secondary stacked column (asymmetric 5-col) */}
            <div className="flex flex-col gap-6 lg:col-span-5">
              <article className="rounded-2xl border border-border bg-stone p-8 transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-foreground/30">
                <span className="font-mono-tech text-xs font-medium tracking-wider text-accent">
                  {t("about.whatIDoTitle")}
                </span>
                <p className="mt-3 max-w-[65ch] text-base text-foreground text-pretty">
                  {t("about.whatIDoText")}
                </p>
              </article>

              <article className="rounded-2xl border border-border bg-card p-8 transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-foreground/30">
                <span className="font-mono-tech text-xs font-medium tracking-wider text-accent">
                  {t("about.offTheGridTitle")}
                </span>
                <p className="mt-3 max-w-[65ch] text-base text-muted-foreground text-pretty">
                  {t("about.offTheGridText")}
                </p>
              </article>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
