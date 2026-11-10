import { useEffect, useRef, useState } from "react";
import { PiKeyReturn, PiSparkle, PiTerminalWindow } from "react-icons/pi";
import { Reveal } from "@/components/ui/Reveal";

type TerminalLine = {
  id: string;
  type: "input" | "output" | "error" | "system";
  text: string;
};

const QUICK_COMMANDS = ["help", "about", "skills", "projects", "contact", "clear"] as const;

export function AskArpanAI() {
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      id: "init-1",
      type: "system",
      text: "arpanOS v2026.1.0 initialized.",
    },
    {
      id: "init-2",
      type: "system",
      text: "Select a command below or type 'help' to inspect available routines.",
    },
  ]);
  const [input, setInput] = useState("");
  const scroller = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scroller.current?.scrollTo({
      top: scroller.current.scrollHeight,
      behavior: "smooth",
    });
  }, [history]);

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    const cmd = trimmed.toLowerCase();

    if (cmd === "clear") {
      setHistory([]);
      return;
    }

    setHistory((prev) => [
      ...prev,
      { id: Date.now().toString() + "-in", type: "input", text: trimmed },
    ]);

    let outputText = "";
    let outputType: "output" | "error" = "output";

    switch (cmd) {
      case "help":
        outputText = `Available commands:
  help      Show available commands
  about     Read engineering summary
  skills    Inspect core technical stack
  projects  List shipped production systems
  contact   View direct contact channels
  clear     Reset terminal transcript`;
        break;
      case "about":
        outputText =
          "Arpan Sarkar is an Automation Engineering graduate (B.Eng., SEAMK) and full stack developer in Helsinki, Finland. He combines industrial control precision with modern TypeScript, React, and Node.js systems.";
        break;
      case "skills":
        outputText = `Core capabilities:
  Frontend   React, Next.js, TypeScript, Tailwind CSS
  Backend    Node.js, Express, REST APIs, Prisma
  Databases  PostgreSQL, MongoDB
  Systems    C++, Industrial IoT, RPA Agent Orchestration`;
        break;
      case "projects":
        outputText = `Shipped systems:
  01. Echo · AI Agent Workspace (Next.js, TypeScript, PostgreSQL, Prisma)
  02. GearUp · Equipment Rental Platform (React, Node.js, Express, MongoDB)
  03. Manchester City · Match Telemetry Hub (React, Node.js, REST APIs)
Run 'contact' to start a conversation.`;
        break;
      case "contact":
        outputText = `Direct channels:
  Email     arpansarkar112@gmail.com
  LinkedIn  linkedin.com/in/arpan-sarkar00
  GitHub    github.com/arpansarkar112
  Discord   arpan0418`;
        break;
      default:
        outputText = `Command not recognized: "${trimmed}". Type 'help' to list valid commands.`;
        outputType = "error";
        break;
    }

    setHistory((prev) => [
      ...prev,
      { id: Date.now().toString() + "-out", type: outputType, text: outputText },
    ]);
  };

  return (
    <section id="ask" className="border-b border-hairline bg-stone">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
        <Reveal delay={0.08}>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-5 lg:pr-8">
              <p className="font-mono-tech text-xs font-medium tracking-wider text-accent tabular-nums">
                007 · Interactive console
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground text-balance md:text-5xl">
                Query the system directly
              </h2>
              <p className="mt-4 max-w-[65ch] text-base text-muted-foreground text-pretty">
                An interactive command console to inspect my engineering background,
                stack architecture, and shipped projects. Type a command or trigger
                one of the presets below.
              </p>

              {/* Quick command presets */}
              <div className="mt-6">
                <p className="font-mono-tech text-xs text-muted-foreground">
                  Quick commands
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {QUICK_COMMANDS.map((cmd) => (
                    <button
                      key={cmd}
                      type="button"
                      onClick={() => executeCommand(cmd)}
                      className="rounded-lg border border-border bg-card px-3 py-1 font-mono-tech text-xs font-medium text-foreground transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent hover:text-accent active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      $ {cmd}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 space-y-3 border-t border-hairline pt-6">
                <MetaRow k="Runtime" v="Local arpanOS · Direct" />
                <MetaRow k="Response time" v="2.4 ms" />
                <MetaRow k="Environment" v="Sandboxed session" />
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card">
                {/* Titlebar */}
                <div className="flex items-center justify-between border-b border-border bg-secondary px-4 py-3 text-foreground">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                    <span className="h-2.5 w-2.5 rounded-full bg-border" />
                    <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  </div>
                  <div className="flex items-center gap-2 font-mono-tech text-xs text-muted-foreground">
                    <PiTerminalWindow className="h-4 w-4 text-accent" />
                    <span>arpan@portfolio:~</span>
                  </div>
                  <PiSparkle className="h-4 w-4 text-accent" />
                </div>

                {/* Transcript or Composed Empty State */}
                <div
                  ref={scroller}
                  className="max-h-96 min-h-80 overflow-y-auto p-6 font-mono-tech text-sm"
                  onClick={() => inputRef.current?.focus()}
                >
                  {history.length === 0 ? (
                    <div className="flex h-64 flex-col items-start justify-center rounded-xl border border-dashed border-border bg-stone p-6">
                      <p className="font-display text-base font-semibold text-foreground">
                        Transcript cleared. Ready for your next query.
                      </p>
                      <p className="mt-1 font-sans text-sm text-muted-foreground">
                        Choose a starter command below or type directly in the prompt.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {(["help", "about", "projects", "skills"] as const).map(
                          (cmd) => (
                            <button
                              key={cmd}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                executeCommand(cmd);
                              }}
                              className="rounded-md border border-border bg-card px-3 py-1 font-mono-tech text-xs font-medium text-accent transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent"
                            >
                              Run &apos;{cmd}&apos;
                            </button>
                          )
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {history.map((line) => (
                        <div
                          key={line.id}
                          className="whitespace-pre-wrap leading-relaxed"
                        >
                          {line.type === "input" && (
                            <div className="flex gap-2">
                              <span className="shrink-0 font-semibold text-accent">
                                ~/arpan $
                              </span>
                              <span className="text-foreground">{line.text}</span>
                            </div>
                          )}
                          {line.type === "output" && (
                            <div className="text-muted-foreground">{line.text}</div>
                          )}
                          {line.type === "error" && (
                            <div className="text-destructive">{line.text}</div>
                          )}
                          {line.type === "system" && (
                            <div className="text-accent">{line.text}</div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Composer */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    executeCommand(input);
                    setInput("");
                  }}
                  className="flex items-center gap-3 border-t border-border bg-stone px-4 py-2"
                >
                  <label htmlFor="terminal-input" className="sr-only">
                    Terminal command input
                  </label>
                  <span className="shrink-0 font-mono-tech text-sm font-semibold text-accent">
                    ~/arpan $
                  </span>
                  <input
                    id="terminal-input"
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type 'help', 'projects', or 'skills'..."
                    autoComplete="off"
                    spellCheck="false"
                    className="flex-1 rounded-md bg-transparent px-2 py-2 font-mono-tech text-sm text-foreground placeholder:text-muted-foreground/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-lg border border-foreground bg-foreground px-3 py-2 text-sm font-semibold text-background transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent hover:bg-accent hover:text-accent-foreground active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    Run
                    <PiKeyReturn className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MetaRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between font-mono-tech text-xs tabular-nums">
      <span className="text-muted-foreground">{k}</span>
      <span className="font-medium text-foreground">{v}</span>
    </div>
  );
}
