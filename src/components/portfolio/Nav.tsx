import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  const links = [
    { href: "#work", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#publications", label: "Papers" },
    { href: "#ask", label: "Talk" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-350 items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center border border-foreground bg-foreground text-background font-display text-sm font-bold">
            A
          </div>
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-sm font-semibold tracking-tight">Arpan Sarkar</span>
            <span className="font-mono-tech text-[10px] uppercase tracking-widest text-muted-foreground">
              FULL-STACK
            </span>
          </div>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative font-mono-tech text-xs uppercase tracking-widest text-muted-foreground transition hover:text-foreground"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#ask"
            className="hidden items-center gap-2 border border-foreground bg-foreground px-3 py-2 font-mono-tech text-[11px] uppercase tracking-widest text-background transition hover:bg-accent hover:border-accent hover:text-accent-foreground sm:inline-flex"
          >
            <span className="h-1.5 w-1.5 animate-pulse-dot bg-accent-foreground" />
            TALK TO ARPAN
          </a>
        </div>
      </div>
    </header>
  );
}
