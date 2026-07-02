import { useState } from "react";
import { SectionHeader } from "./Projects";
import { ChevronDown } from "lucide-react";

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
    institution: "SEAMK — Seinäjoki University of Applied Sciences",
    degree: "Bachelor of Engineering (BE), Automation Engineering",
    dates: "Sep 2022 — May 2026",
    status: "completed",
    grade: "3.49",
    certificateUrl:
      "https://drive.google.com/file/d/1dNsektq5zK0bS_FKyDHCEb_ID4PVg8p8/view?usp=sharing",
    focus:
      "Focused on the integration of software development and industrial automation technologies. Developed strong engineering and problem-solving skills through hands-on laboratory work, programming projects, and automation system design.",
    activities: ["Samo (Student Union)", "Insinööriliitto (The Union of Professional Engineers in Finland)"],
    coursework: [
      "Software Engineering",
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Client-side Programming",
      "Server-side Programming",
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
    ]
  },
];

export function Education() {
  const [open, setOpen] = useState<string | null>("E01");

  return (
    <section id="education" className="border-b border-hairline bg-stone">
      <SectionHeader
        eyebrow="004 — Education"
        title="My background"
        note="ACADEMIC TIMELINE · FINLAND"
      />
      <div className="mx-auto max-w-350 px-6 pb-24 md:px-10">
        <div className="relative grid grid-cols-12 gap-8">
          {/* Timeline rail */}
          <div className="col-span-12 md:col-span-1">
            <div className="sticky top-24 hidden md:block">
              <div className="font-mono-tech text-[10px] uppercase tracking-widest text-muted-foreground">
                / Timeline
              </div>
              <div className="mt-3 h-40 w-px bg-foreground/40" />
            </div>
          </div>

          <div className="col-span-12 space-y-4 md:col-span-11">
            {EDU.map((e) => {
              const isOpen = open === e.id;
              return (
                <article
                  key={e.id}
                  className="border border-foreground bg-background shadow-[6px_6px_0_0_var(--color-hairline)]"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : e.id)}
                    className="flex w-full items-start justify-between gap-6 p-6 text-left md:p-8"
                  >
                    <div className="flex items-start gap-6">
                      <div className="hidden flex-col items-center pt-1 md:flex">
                        <span
                          className={`h-3 w-3 ${
                            e.status === "current" ? "animate-pulse-dot bg-accent" : "bg-foreground"
                          }`}
                        />
                        <span className="mt-1 h-16 w-px bg-hairline" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="font-mono-tech text-[10px] uppercase tracking-widest text-accent">
                            {e.id} · {e.dates}
                          </span>
                          {e.status === "current" && (
                            <span className="border border-accent px-2 py-0.5 font-mono-tech text-[9px] uppercase tracking-widest text-accent">
                              Ongoing
                            </span>
                          )}
                        </div>
                        <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                          {e.institution}
                        </h3>
                        <p className="mt-1 font-mono-tech text-xs uppercase tracking-widest text-muted-foreground">
                          {e.degree}
                        </p>
                        {e.grade && (
                          <div className="mt-3 flex flex-wrap items-center gap-5">
                            <p className="font-mono-tech text-[11px] uppercase tracking-widest text-foreground">
                              Grade · <span className="text-accent">{e.grade}</span>
                            </p>
                            {e.certificateUrl && (
                              <button
                                type="button"
                                onClick={(event) => {
                                  event.stopPropagation();
                                  window.open(e.certificateUrl, "_blank", "noopener,noreferrer");
                                }}
                                className="inline-flex items-center gap-2 border border-foreground px-2.5 py-1 font-mono-tech text-[9px] uppercase tracking-widest text-foreground transition hover:border-accent hover:text-accent"
                              >
                                certificate →
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    <ChevronDown
                      className={`mt-2 h-5 w-5 shrink-0 text-muted-foreground transition ${
                        isOpen ? "rotate-180 text-accent" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="grid grid-cols-12 gap-6 border-t border-hairline p-6 md:p-8">
                      {e.focus && (
                        <div className="col-span-12">
                          <p className="font-mono-tech text-[10px] uppercase tracking-widest text-muted-foreground">
                            / Academic focus
                          </p>
                          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-foreground">
                            {e.focus}
                          </p>
                        </div>
                      )}
                      {e.activities && (
                        <div className="col-span-12 md:col-span-4">
                          <p className="font-mono-tech text-[10px] uppercase tracking-widest text-muted-foreground">
                            / Activities
                          </p>
                          <ul className="mt-3 space-y-1.5">
                            {e.activities.map((a) => (
                              <li key={a} className="font-mono-tech text-[11px] uppercase tracking-widest text-foreground">
                                › {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {e.coursework && (
                        <div className="col-span-12 md:col-span-8">
                          <p className="font-mono-tech text-[10px] uppercase tracking-widest text-muted-foreground">
                            / Relevant coursework ({e.coursework.length})
                          </p>
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {e.coursework.map((c) => (
                              <span
                                key={c}
                                className="border border-border px-2 py-1 font-mono-tech text-[10px] uppercase tracking-widest text-muted-foreground transition hover:border-accent hover:text-accent"
                              >
                                {c}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
