import { Github, Linkedin, Mail, ArrowUpRight, Download, Facebook } from "lucide-react";
import { DiscordIcon } from "./icons";

export function Hero() {
  const now = new Date().toISOString().slice(0, 10);
  return (
    <section id="top" className="relative border-b border-hairline">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="relative mx-auto grid max-w-[1400px] grid-cols-12 gap-0 px-6 pt-16 md:px-10 md:pt-24">
        {/* Left rail: system meta */}
        <div className="col-span-12 mb-8 flex items-center justify-between border-b border-hairline pb-4 md:col-span-12">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-mono-tech text-[11px] uppercase tracking-widest text-foreground">
              System status
            </span>
            <span className="font-mono-tech text-[11px] uppercase tracking-widest text-muted-foreground">
              / Available for full-stack roles
            </span>
          </div>
          <div className="hidden font-mono-tech text-[11px] uppercase tracking-widest text-muted-foreground md:block">
            HELSINKI · FIN · UTC+3 · {now}
          </div>
        </div>

        {/* Headline and Role */}
        <div className="col-span-12 lg:col-span-8">
          <p className="animate-rise font-mono-tech text-[11px] uppercase tracking-[0.28em] text-accent">
            001 — Portfolio / v.2026
          </p>
          <h1 className="animate-rise mt-6 font-display text-[15vw] font-bold leading-[0.88] tracking-tight text-foreground md:text-[9.5rem]">
            Arpan
            <br />
            <span className="italic text-muted-foreground">Sarkar</span>
          </h1>
          <div className="animate-rise mt-8">
            <p className="font-mono-tech text-[10px] uppercase tracking-widest text-muted-foreground">
              / Role
            </p>
            <p className="mt-2 font-mono-tech text-sm md:text-lg uppercase tracking-widest text-foreground">
              Full-Stack Developer
            </p>
            <div className="mt-6">
              <p className="font-mono-tech text-[10px] uppercase tracking-widest text-muted-foreground">
                / Stack
              </p>
              <p className="mt-2 font-mono-tech text-xs text-foreground">
                MERN · TypeScript · C++ · Prisma
              </p>
            </div>
          </div>
        </div>

        {/* Right meta and Image */}
        <div className="col-span-12 mt-8 flex flex-col justify-end gap-6 border-l-0 lg:col-span-4 lg:mt-0 lg:border-l lg:border-hairline lg:pl-8">
          <div className="relative w-48 md:w-64 lg:w-full aspect-[4/5] overflow-hidden border border-hairline mb-2 lg:mb-auto">
            <img 
              src="/profile.jpg" 
              alt="Arpan Sarkar" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        {/* Tagline row */}
        <div className="col-span-12 mt-10 grid grid-cols-12 gap-6 border-t border-hairline pt-8 md:mt-14">
          <div className="col-span-12 md:col-span-7">
            <p className="max-w-2xl font-display text-2xl leading-snug text-foreground md:text-3xl">
              Bridging <span className="text-accent">precision engineering</span> with
              modern web architecture to deliver reliable and intelligent
              full-stack systems.
            </p>
          </div>
          <div className="col-span-12 flex flex-col justify-end gap-4 md:col-span-5 md:items-end">
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://docs.google.com/document/d/10bHQFbyfiHPb7sKEhcorryNI7zMFS_cpfXbYal41TZ8/export?format=pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 border border-foreground bg-transparent px-5 py-3 font-mono-tech text-xs uppercase tracking-widest text-foreground transition hover:bg-foreground hover:text-background"
              >
                Resume
                <Download className="h-4 w-4 transition-transform group-hover:translate-y-1" />
              </a>
            </div>
            <SocialDock />
          </div>
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="mt-16 overflow-hidden border-t border-hairline py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-10 pr-10 font-mono-tech text-xs uppercase tracking-widest text-muted-foreground">
              <span>◇ React</span><span>◇ Node.js</span><span>◇ Express</span>
              <span>◇ MongoDB</span><span>◇ TypeScript</span><span>◇ PRISMA</span>
              <span>◇ C++</span><span>◇ Automation</span><span>◇ REST APIs</span>
              <span>◇ System Design</span><span>◇ CI/CD</span><span>◇ Vercel</span>
              <span>◇ Git</span><span>◇ UI/UX</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialDock() {
  const socials = [
    { href: "https://github.com/arpansarkar112", label: "GitHub", Icon: Github },
    { href: "https://www.linkedin.com/in/arpan-sarkar00", label: "LinkedIn", Icon: Linkedin },
    { href: "https://www.facebook.com/arpan.user", label: "Facebook", Icon: Facebook },
    { href: "https://discord.com/users/arpan0418", label: "Discord", Icon: DiscordIcon },
    { href: "mailto:arpansarkar112@gmail.com", label: "Email", Icon: Mail },
  ];
  return (
    <div className="flex items-center gap-0 border border-border">
      {socials.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={label}
          className="group relative flex h-11 w-11 items-center justify-center border-r border-border last:border-r-0 text-muted-foreground transition hover:bg-accent hover:text-accent-foreground"
        >
          <Icon className="h-4 w-4" />
          <span className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono-tech text-[10px] uppercase tracking-widest text-muted-foreground opacity-0 transition group-hover:opacity-100">
            {label}
          </span>
        </a>
      ))}
    </div>
  );
}
