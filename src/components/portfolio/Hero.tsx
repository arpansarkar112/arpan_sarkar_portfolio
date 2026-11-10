import {
  PiGithubLogo,
  PiLinkedinLogo,
  PiEnvelopeSimple,
  PiDownloadSimple,
  PiFacebookLogo,
  PiDiscordLogo,
  PiArrowUpRight,
} from "react-icons/pi";
import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();
  const now = new Date().toISOString().slice(0, 10);

  return (
    <section id="top" className="relative border-b border-hairline bg-grain">
      <div className="relative mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-6 pb-16 pt-12 md:px-10 md:pb-20 md:pt-16">
        {/* Top rail: system meta */}
        <div className="col-span-12 flex flex-wrap items-center justify-between gap-4 border-b border-hairline pb-4">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono-tech text-xs font-medium text-foreground">
              {t("hero.systemStatus")}
            </span>
            <span className="font-mono-tech text-xs text-muted-foreground">
              {t("hero.availableRole")}
            </span>
          </div>
          <div className="hidden font-mono-tech text-xs text-muted-foreground tabular-nums md:block">
            Helsinki · FIN · UTC+3 · {now}
          </div>
        </div>

        {/* Left column: Headline and subheading capped at 680px */}
        <div className="col-span-12 flex flex-col justify-between pt-4 lg:col-span-8">
          <div className="max-w-[680px]">
            <p className="animate-rise font-mono-tech text-xs font-medium tracking-wider text-accent tabular-nums">
              {t("hero.portfolioV")}
            </p>
            <h1 className="animate-rise mt-4 font-display text-6xl font-bold tracking-tight text-hero-gradient text-balance sm:text-7xl md:text-8xl">
              Arpan Sarkar
            </h1>
            <p className="animate-rise mt-6 font-display text-xl font-medium text-foreground text-pretty md:text-2xl">
              {t("hero.tagline1")}
              <span className="font-semibold text-accent">
                {t("hero.taglineHighlight")}
              </span>
              {t("hero.tagline2")}
            </p>
          </div>

          <div className="animate-rise mt-10 grid max-w-[680px] grid-cols-1 gap-6 border-t border-hairline pt-6 sm:grid-cols-2">
            <div>
              <p className="font-mono-tech text-xs text-muted-foreground">
                {t("hero.roleLabel")}
              </p>
              <p className="mt-1 font-display text-lg font-semibold text-foreground">
                {t("hero.role")}
              </p>
            </div>
            <div>
              <p className="font-mono-tech text-xs text-muted-foreground">
                {t("hero.stackLabel")}
              </p>
              <p className="mt-1 font-mono-tech text-sm font-medium text-foreground">
                MERN · TypeScript · C++ · Prisma
              </p>
            </div>
          </div>

          {/* Primary CTA + tertiary text link + Social dock */}
          <div className="animate-rise mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-hairline pt-8">
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-lg border border-foreground bg-foreground px-3 py-2 text-base font-semibold text-background transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent hover:bg-accent hover:text-accent-foreground active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Explore shipped systems
                <PiArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="https://drive.google.com/file/d/1B30zFPCGv2Os_SqoyYwc3z8YTDHgfEER/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-base font-medium text-muted-foreground underline-offset-4 transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-foreground hover:underline active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <PiDownloadSimple className="h-4 w-4 text-accent transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0.5" />
                {t("hero.resume")}
              </a>
            </div>
            <SocialDock />
          </div>
        </div>

        {/* Right column: Portrait with negative margin / layered caption */}
        <div className="col-span-12 flex flex-col justify-end lg:col-span-4 lg:border-l lg:border-hairline lg:pl-8">
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-hairline bg-stone">
              <img
                src="/profile.jpg"
                alt="Portrait of Arpan Sarkar, Automation Engineer and Full Stack Developer"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative -mt-6 ml-4 mr-4 rounded-xl border border-border bg-card p-4 shadow-sm">
              <p className="font-mono-tech text-xs text-muted-foreground">
                Engineering profile
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                B.Eng. Automation Engineering · SEAMK
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="overflow-hidden border-t border-hairline bg-stone py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center gap-10 pr-10 font-mono-tech text-xs font-medium tracking-wider text-muted-foreground"
            >
              <span>◇ React</span>
              <span>◇ Node.js</span>
              <span>◇ Express</span>
              <span>◇ MongoDB</span>
              <span>◇ TypeScript</span>
              <span>◇ Prisma</span>
              <span>◇ PostgreSQL</span>
              <span>◇ C++</span>
              <span>◇ Industrial Automation</span>
              <span>◇ REST APIs</span>
              <span>◇ System Design</span>
              <span>◇ Vercel</span>
              <span>◇ Git</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialDock() {
  const socials = [
    { href: "https://github.com/arpansarkar112", label: "GitHub", Icon: PiGithubLogo },
    { href: "https://www.linkedin.com/in/arpan-sarkar00", label: "LinkedIn", Icon: PiLinkedinLogo },
    { href: "https://www.facebook.com/arpan.user", label: "Facebook", Icon: PiFacebookLogo },
    { href: "https://discord.com/users/arpan0418", label: "Discord", Icon: PiDiscordLogo },
    { href: "mailto:arpansarkar112@gmail.com", label: "Email", Icon: PiEnvelopeSimple },
  ];
  return (
    <div className="inline-flex items-center gap-1 rounded-xl border border-border bg-card p-1">
      {socials.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={label}
          className="group relative flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-secondary hover:text-foreground active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}
