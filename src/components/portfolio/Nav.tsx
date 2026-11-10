import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useTranslation } from "react-i18next";

const SECTION_IDS = [
  "top",
  "about",
  "work",
  "skills",
  "education",
  "publications",
  "contact",
] as const;

export function Nav() {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState<string>("top");
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { id: "top", href: "/#top", label: t("nav.home") },
    { id: "about", href: "/#about", label: t("nav.about") },
    { id: "work", href: "/#work", label: t("nav.projects") },
    { id: "skills", href: "/#skills", label: t("nav.skills") },
    { id: "education", href: "/#education", label: t("nav.education") },
    { id: "publications", href: "/#publications", label: t("nav.papers") },
    { id: "contact", href: "/#contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-4 z-40 mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="flex items-center justify-between rounded-2xl border border-border bg-background/85 p-2 backdrop-blur-md">
          <a
            href="/#top"
            className="flex items-center gap-3 rounded-lg px-2 py-1 transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground font-display text-sm font-bold text-background">
              A
            </div>
            <span className="hidden font-display text-sm font-semibold tracking-tight text-foreground sm:inline">
              Arpan Sarkar
            </span>
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 lg:flex"
          >
            {links.map((l) => {
              const isActive = activeId === l.id;
              return (
                <a
                  key={l.id}
                  href={l.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                    isActive
                      ? "bg-secondary font-semibold text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-3 right-3 h-0.5 rounded-full bg-accent" />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <a
              href="/#ask"
              className="hidden items-center gap-2 rounded-lg border border-foreground bg-foreground px-3 py-2 text-sm font-semibold text-background transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent hover:bg-accent hover:text-accent-foreground active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:inline-flex"
            >
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse-dot" />
              {t("nav.talkToArpan")}
            </a>

            {/* Animated mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-foreground active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <span className="relative flex h-4 w-5 flex-col justify-between">
                <span
                  className={`h-0.5 w-full rounded-full bg-current transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    mobileOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full rounded-full bg-current transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    mobileOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`h-0.5 w-full rounded-full bg-current transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-height mobile navigation panel with staggered link arrival (~50ms apart, <400ms total) */}
      <div
        aria-hidden={!mobileOpen}
        className={`fixed inset-0 z-30 flex min-h-dvh flex-col justify-between bg-background px-6 pb-10 pt-24 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          mobileOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-3">
          {links.map((l, idx) => {
            const isActive = activeId === l.id;
            return (
              <a
                key={l.id}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  transitionDelay: mobileOpen ? `${idx * 45}ms` : "0ms",
                }}
                className={`flex items-center justify-between border-b border-border py-3 font-display text-2xl font-semibold transition-[opacity,transform,color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  mobileOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                } ${isActive ? "text-accent" : "text-foreground hover:text-accent"}`}
              >
                <span>{l.label}</span>
                <span className="font-mono-tech text-xs text-muted-foreground tabular-nums">
                  0{idx + 1}
                </span>
              </a>
            );
          })}
        </nav>

        <div className="flex flex-col gap-4 border-t border-border pt-6">
          <a
            href="/#ask"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-foreground bg-foreground px-3 py-2 text-base font-semibold text-background transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent hover:bg-accent hover:text-accent-foreground active:scale-[0.98]"
          >
            {t("nav.talkToArpan")}
          </a>
        </div>
      </div>
    </>
  );
}
