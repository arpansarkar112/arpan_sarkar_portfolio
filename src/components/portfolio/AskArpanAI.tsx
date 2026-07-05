import { useEffect, useRef, useState } from "react";
import { CornerDownLeft, Sparkle, Terminal } from "lucide-react";
import { useTranslation } from "react-i18next";

type TerminalLine = {
  id: string;
  type: "input" | "output" | "error" | "system";
  text: string;
};

export function AskArpanAI() {
  const { t } = useTranslation();
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      id: "init-1",
      type: "system",
      text: "arpanOS v2026.1.0 loaded.",
    },
    {
      id: "init-2",
      type: "system",
      text: "Type 'help' to see available commands.",
    },
  ]);
  const [input, setInput] = useState("");
  const scroller = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: "smooth" });
  }, [history]);

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    const cmd = trimmed.toLowerCase();
    
    // Add input to history
    setHistory((prev) => [
      ...prev,
      { id: Date.now().toString() + "-in", type: "input", text: trimmed },
    ]);

    let outputText = "";
    let outputType: "output" | "error" = "output";

    switch (cmd) {
      case "help":
        outputText = `Available commands:
  help      - Show this help message
  about     - Learn about my background
  skills    - View my tech stack
  projects  - List notable projects
  contact   - Get contact info
  clear     - Clear terminal history`;
        break;
      case "about":
        outputText = "I'm Arpan Sarkar, an Automation Engineer transitioning into full-stack development. I focus on merging deterministic engineering logic with modern, scalable web architectures. Based in Helsinki, Finland.";
        break;
      case "skills":
        outputText = `Core Stack:
- Frontend: React, Next.js, TypeScript, Tailwind CSS
- Backend: Node.js, Express, REST APIs
- Databases: MongoDB
- Languages: JavaScript/TypeScript, C++
- Tools: Git, Vercel, Docker`;
        break;
      case "projects":
        outputText = `Notable Projects:
1. Echo: Full-Stack AI Chat Application
2. SaaS Landing Page: Responsive UI framework
3. Manchester City Dashboard: Interactive data visualizer
[Type 'contact' to get in touch!]`;
        break;
      case "contact":
        outputText = `Email: arpansarkar112@gmail.com
LinkedIn: /in/arpan-sarkar00
GitHub: /arpansarkar112
Discord: arpan0418`;
        break;
      case "clear":
        setHistory([]);
        return; // Don't append an output
      default:
        outputText = `command not found: ${trimmed}. Type 'help' to see available commands.`;
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
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-0 px-6 py-24 md:px-10">
        <div className="col-span-12 lg:col-span-5 lg:pr-12">
          <p className="font-mono-tech text-[11px] uppercase tracking-[0.28em] text-accent">
            007 — Interact with me
          </p>
          <h2 className="mt-4 font-display text-5xl font-bold leading-[0.95] text-foreground md:text-6xl uppercase">
            EXECUTE COMMAND
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            A developer-first console to explore my background, skill set, and
            projects. Type a command or use the suggestions below.
          </p>
          <div className="mt-8 space-y-2 border-t border-hairline pt-6">
            <MetaRow k="Runtime" v="Local arpanOS · direct" />
            <MetaRow k="Latency" v="< 10 ms" />
            <MetaRow k="Environment" v="Secure · Sandboxed" />
          </div>
        </div>

        <div className="col-span-12 mt-10 lg:col-span-7 lg:mt-0">
          <div className="border border-foreground bg-background shadow-[8px_8px_0_0_var(--color-hairline)] overflow-hidden flex flex-col">
            {/* Titlebar */}
            <div className="flex items-center justify-between border-b border-foreground bg-foreground px-4 py-2.5 text-background">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                <span className="h-2.5 w-2.5 rounded-full bg-background/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-background/40" />
              </div>
              <div className="flex items-center gap-2 font-mono-tech text-[10px] uppercase tracking-widest opacity-80">
                <Terminal className="h-3 w-3" />
                <span>arpan@portfolio:~</span>
              </div>
              <Sparkle className="h-3.5 w-3.5 opacity-80" />
            </div>

            {/* Transcript */}
            <div
              ref={scroller}
              className="max-h-[420px] min-h-[320px] overflow-y-auto p-5 font-mono-tech text-sm"
              onClick={() => inputRef.current?.focus()}
            >
              <div className="space-y-2">
                {history.map((line) => (
                  <div key={line.id} className="whitespace-pre-wrap leading-relaxed">
                    {line.type === "input" && (
                      <div className="flex gap-2">
                        <span className="text-accent shrink-0">~/arpan $</span>
                        <span className="text-foreground">{line.text}</span>
                      </div>
                    )}
                    {line.type === "output" && (
                      <div className="text-muted-foreground">{line.text}</div>
                    )}
                    {line.type === "error" && (
                      <div className="text-red-500">{line.text}</div>
                    )}
                    {line.type === "system" && (
                      <div className="text-accent/70">{line.text}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Composer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                executeCommand(input);
                setInput("");
              }}
              className="flex items-center gap-2 border-t border-foreground bg-background px-3 py-2"
            >
              <span className="font-mono-tech text-sm text-accent font-bold shrink-0">~/arpan $</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type 'help'..."
                autoComplete="off"
                spellCheck="false"
                className="flex-1 bg-transparent py-2 font-mono-tech text-sm text-foreground outline-none placeholder:text-muted-foreground/50"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 border border-foreground bg-foreground px-2.5 py-1.5 font-mono-tech text-[10px] uppercase tracking-widest text-background transition hover:bg-accent hover:border-accent hover:text-accent-foreground"
              >
                Run <CornerDownLeft className="h-3 w-3" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetaRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between font-mono-tech text-[11px] uppercase tracking-widest">
      <span className="text-muted-foreground">{k}</span>
      <span className="text-foreground">{v}</span>
    </div>
  );
}
