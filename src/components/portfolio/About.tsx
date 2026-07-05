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
      <div className="mx-auto max-w-350 px-6 pb-16 md:px-10">
        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-hairline border border-hairline">
            {/* Journey */}
            <div className="md:col-span-4 bg-background p-8 transition duration-500 hover:bg-neutral-950/30">
               <h3 className="font-mono-tech text-sm uppercase tracking-widest text-accent mb-6">{t("about.journeyTitle")}</h3>
               <p className="text-sm leading-relaxed opacity-80 text-foreground">
                 {t("about.journeyText")}
               </p>
            </div>
            {/* What I Do */}
            <div className="md:col-span-4 bg-background p-8 transition duration-500 hover:bg-neutral-950/30">
               <h3 className="font-mono-tech text-sm uppercase tracking-widest text-accent mb-6">{t("about.whatIDoTitle")}</h3>
               <p className="text-sm leading-relaxed opacity-80 text-foreground">
                 {t("about.whatIDoText")}
               </p>
            </div>
            {/* Off the Grid */}
            <div className="md:col-span-4 bg-background p-8 transition duration-500 hover:bg-neutral-950/30">
               <h3 className="font-mono-tech text-sm uppercase tracking-widest text-accent mb-6">{t("about.offTheGridTitle")}</h3>
               <p className="text-sm leading-relaxed opacity-80 text-foreground">
                 {t("about.offTheGridText")}
               </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
