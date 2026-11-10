import { useState } from "react";
import { SectionHeader } from "./Projects";
import { Reveal } from "@/components/ui/Reveal";
import { PiArrowUpRight } from "react-icons/pi";
import { useTranslation } from "react-i18next";

type Edu = {
  id: string;
  institution: string;
  degree: string;
  dates: string;
  status: "current" | "completed";
  grade?: string;
  focus?: string;
  activities?: string[];
  coursework?: string[];
  certificateUrl?: string;
};

const EDU: Edu[] = [
  {
    id: "E01",
    institution: "SEAMK · Seinäjoki University of Applied Sciences",
    degree: "Bachelor of Engineering (B.Eng.), Automation Engineering",
    dates: "Sep 2022 · May 2026",
    status: "completed",
    grade: "3.49 / 5.0",
    certificateUrl:
      "https://drive.google.com/file/d/1dNsektq5zK0bS_FKyDHCEb_ID4PVg8p8/view?usp=sharing",
    focus:
      "Focused on the integration of software development and industrial automation technologies. Built engineering and problem solving foundations through hands on laboratory work, software engineering projects, and control system design.",
    activities: [
      "SAMO (Student Union of Seinäjoki University of Applied Sciences)",
      "Insinööriliitto (Union of Professional Engineers in Finland)",
    ],
    coursework: [
      "Software Engineering",
      "Data Structures & Algorithms",
      "Object Oriented Programming",
      "Client Side Programming",
      "Server Side Programming",
      "User Interface Design",
      "Network Programming",
      "Cloud Computing",
      "Databases",
      "Introduction to Artificial Intelligence",
      "Industrial IoT (IIoT)",
      "Embedded Systems",
      "Robotics",
      "Programmable Logic Controllers (PLC)",
      "Control Engineering",
      "Machine Automation",
      "Sensor Technology",
      "Data Communications & Security",
      "Microcomputer Technology",
      "C++ Programming",
      "Virtual Environments",
      "Design of Electrical & Automation Systems",
      "Production Automation",
    ],
  },
];

export function Education() {
  const { t } = useTranslation();
  const [showAllCourses, setShowAllCourses] = useState(false);

  return (
    <section id="education" className="border-b border-hairline bg-stone">
      <SectionHeader
        eyebrow={t("education.eyebrow")}
        title={t("education.title")}
        note={t("education.note")}
      />
      <div className="mx-auto max-w-[1400px] px-6 pb-20 md:px-10 md:pb-24">
        <Reveal delay={0.08}>
          <div className="space-y-6">
            {EDU.map((e) => {
              const allCourses = e.coursework ?? [];
              const visibleCourses = showAllCourses
                ? allCourses
                : allCourses.slice(0, 10);

              return (
                <article
                  key={e.id}
                  className="rounded-2xl border border-border bg-card p-6 md:p-10"
                >
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                    {/* Left column: Degree summary & credentials */}
                    <div className="flex flex-col justify-between border-b border-hairline pb-8 lg:col-span-5 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="font-mono-tech text-xs font-medium text-accent tabular-nums">
                            {e.id} · {e.dates}
                          </span>
                          {e.status === "current" && (
                            <span className="rounded-sm border border-accent px-2 py-0.5 font-mono-tech text-xs font-medium text-accent">
                              {t("education.ongoing")}
                            </span>
                          )}
                        </div>

                        <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-foreground text-balance md:text-3xl">
                          {e.institution}
                        </h3>
                        <p className="mt-2 font-display text-lg font-medium text-muted-foreground">
                          {e.degree}
                        </p>

                        {e.focus && (
                          <p className="mt-4 max-w-[65ch] text-base text-muted-foreground text-pretty">
                            {e.focus}
                          </p>
                        )}
                      </div>

                      {e.grade && (
                        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-6">
                          <div>
                            <p className="font-mono-tech text-xs text-muted-foreground">
                              {t("education.grade")}
                            </p>
                            <p className="mt-1 font-display text-2xl font-bold text-foreground tabular-nums">
                              {e.grade}
                            </p>
                          </div>
                          {e.certificateUrl && (
                            <a
                              href={e.certificateUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group inline-flex items-center gap-2 rounded-lg border border-foreground bg-foreground px-3 py-2 text-base font-semibold text-background transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent hover:bg-accent hover:text-accent-foreground active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                            >
                              {t("education.certificate")}
                              <PiArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Right column: Activities & Progressive Coursework */}
                    <div className="flex flex-col justify-between gap-8 lg:col-span-7">
                      {e.activities && (
                        <div>
                          <p className="font-mono-tech text-xs font-medium text-accent">
                            {t("education.activities")}
                          </p>
                          <ul className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {e.activities.map((a) => (
                              <li
                                key={a}
                                className="rounded-xl border border-border bg-stone p-4 text-sm font-medium text-foreground"
                              >
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {allCourses.length > 0 && (
                        <div>
                          <div className="flex items-center justify-between gap-4">
                            <p className="font-mono-tech text-xs font-medium text-muted-foreground tabular-nums">
                              {t("education.coursework")} ({allCourses.length})
                            </p>
                            {allCourses.length > 10 && (
                              <button
                                type="button"
                                onClick={() => setShowAllCourses((prev) => !prev)}
                                className="text-sm font-semibold text-accent underline-offset-4 transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:underline active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                              >
                                {showAllCourses
                                  ? "Show core selection"
                                  : `Show all ${allCourses.length} courses`}
                              </button>
                            )}
                          </div>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {visibleCourses.map((c) => (
                              <span
                                key={c}
                                className="rounded-md border border-border bg-background px-3 py-1 font-mono-tech text-xs text-foreground transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent"
                              >
                                {c}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
