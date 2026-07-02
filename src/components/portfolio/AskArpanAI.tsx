import { useEffect, useRef, useState } from "react";
import { CornerDownLeft, Sparkle } from "lucide-react";

type Msg = { role: "user" | "arpan"; text: string; ts: string };

const KB: { patterns: RegExp[]; reply: string }[] = [
  {
    patterns: [/stack|tech|tools|use|build with|technolog/i],
    reply:
      "My core stack is MERN (MongoDB, Express, React, Node.js) with TypeScript end-to-end. Next.js for product surfaces, C++ for systems work, REST APIs, Tailwind for UI, Git + Vercel for shipping. Comfortable across the boundary from PLC-style automation logic to browser-native pipelines.",
  },
  {
    patterns: [/background|about|who|story|history|experience/i],
    reply:
      "I'm Arpan Sarkar, a Graduate Automation Engineer who resides Finland. I am currently developing my skills on full-stack engineering",
  },
  {
    patterns: [/hire|available|freelance|work|role|opportunit|job/i],
    reply:
      "Yes — currently available for full-stack roles and select engagements. Best reach: arpansarkar112@gmail.com or LinkedIn. Open to remote and hybrid.",
  },
  {
    patterns: [/project|work|portfolio|built|shipped/i],
    reply:
      "Highlights: Echo — Full-Stack AI Chat Application, the SaaS Landing Page (responsive frontend system), and the Manchester City Dashboard (themed interactive data surface). Scroll to Selected Projects for details.",
  },
  {
    patterns: [/philosophy|ethic|approach|how do you work|value/i],
    reply:
      "Three principles: clean code as a specification, reliability as a UX feature, and bridging automation-engineering discipline with modern web systems. I write for the next engineer, not the compiler.",
  },
  {
    patterns: [/contact|email|reach|message/i],
    reply:
      "Email: arpansarkar112@gmail.com — LinkedIn: /in/arpan-sarkar00 — GitHub: /arpansarkar112 — Discord: arpan0418.",
  },
  {
    patterns: [/c\+\+|cpp|systems|automation|plc|hardware/i],
    reply:
      "C++ and automation-engineering fundamentals are where I started control loops, deterministic execution, resource discipline. That shows up in how I architect backends: queue-backed executors, backpressure, and predictable failure paths.",
  },
];

const PROMPTS = [
  "WHAT IS YOUR TECH STACK?",
  "TELL ME ABOUT YOUR ENGINEERING BACKGROUND.",
  "ARE YOU AVAILABLE FOR HIRE?",
  "WHAT HAVE YOU BUILT?",
  "HOW DO YOU APPROACH ENGINEERING?",
];

function reply(input: string): string {
  const hit = KB.find((k) => k.patterns.some((p) => p.test(input)));
  if (hit) return hit.reply;
  return "I can speak to my tech stack, engineering background, current availability, projects, and working philosophy. Try one of the prompts below, or ask about a specific technology.";
}

const stamp = () =>
  new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

export function AskArpanAI() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "arpan",
      text:
        "Hi — this is an interactive console representing my profile. Ask me about my tech stack, engineering background, availability, or projects.",
      ts: "",
    },
  ]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const scroller = useRef<HTMLDivElement>(null);

  // Set initial timestamp on client only to avoid SSR hydration mismatch.
  useEffect(() => {
    setMessages((m) =>
      m.map((msg, i) => (i === 0 && !msg.ts ? { ...msg, ts: stamp() } : msg))
    );
  }, []);

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: "smooth" });
  }, [messages, thinking]);

  const send = (raw: string) => {
    const text = raw.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: "user", text, ts: stamp() }]);
    setInput("");
    setThinking(true);
    const delay = 500 + Math.min(text.length * 12, 900);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "arpan", text: reply(text), ts: stamp() }]);
      setThinking(false);
    }, delay);
  };

  return (
    <section id="ask" className="border-b border-hairline bg-stone">
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-0 px-6 py-24 md:px-10">
        {/* Left column: sell */}
        <div className="col-span-12 lg:col-span-5 lg:pr-12">
          <p className="font-mono-tech text-[11px] uppercase tracking-[0.28em] text-accent">
            006 — Interact with me
          </p>
          <h2 className="mt-4 font-display text-5xl font-bold leading-[0.95] text-foreground md:text-6xl uppercase">
            RUN QUERY
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            An interactive console built to share my background, skill set, and
            current availability directly with you. Select a prompt below or type
            a custom question — responses stream back instantly from my
            knowledge base.
          </p>
          <div className="mt-8 space-y-2 border-t border-hairline pt-6">
            <MetaRow k="Runtime" v="Local knowledge base · direct" />
            <MetaRow k="Latency" v="~ 500 ms average" />
            <MetaRow k="Session" v="Ephemeral · no data stored" />
          </div>
        </div>

        {/* Right column: chat */}
        <div className="col-span-12 mt-10 lg:col-span-7 lg:mt-0">
          <div className="border border-foreground bg-background shadow-[8px_8px_0_0_var(--color-hairline)]">
            {/* Titlebar */}
            <div className="flex items-center justify-between border-b border-foreground bg-foreground px-4 py-2.5 text-background">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                <span className="h-2.5 w-2.5 rounded-full bg-background/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-background/40" />
              </div>
              <span className="font-mono-tech text-[10px] uppercase tracking-widest opacity-80">
                arpan.term — /session/live
              </span>
              <Sparkle className="h-3.5 w-3.5 opacity-80" />
            </div>

            {/* Transcript */}
            <div
              ref={scroller}
              className="max-h-[420px] min-h-[320px] overflow-y-auto p-5"
            >
              <div className="space-y-4">
                {messages.map((m, i) => (
                  <MessageRow key={i} msg={m} />
                ))}
                {thinking && (
                  <div className="flex items-center gap-2 font-mono-tech text-[11px] uppercase tracking-widest text-muted-foreground">
                    <span className="h-1.5 w-1.5 animate-pulse-dot bg-accent" />
                    arpan is composing…
                  </div>
                )}
              </div>
            </div>

            {/* Prompt chips */}
            <div className="flex flex-wrap gap-1.5 border-t border-hairline p-3">
              {PROMPTS.map((p) => (
                <button
                  key={p}
                  onClick={() => send(p)}
                  className="border border-border bg-background px-2.5 py-1.5 font-mono-tech text-[10px] uppercase tracking-widest text-muted-foreground transition hover:border-accent hover:text-accent"
                >
                  {p}
                </button>
              ))}
            </div>

            {/* Composer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-foreground bg-background px-3 py-2"
            >
              <span className="font-mono-tech text-xs text-accent">›</span>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me about my stack, background, availability…"
                className="flex-1 bg-transparent py-2 font-mono-tech text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 border border-foreground bg-foreground px-2.5 py-1.5 font-mono-tech text-[10px] uppercase tracking-widest text-background transition hover:bg-accent hover:border-accent hover:text-accent-foreground"
              >
                Send <CornerDownLeft className="h-3 w-3" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function MessageRow({ msg }: { msg: Msg }) {
  const isUser = msg.role === "user";
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 font-mono-tech text-[10px] uppercase tracking-widest text-muted-foreground">
        <span className={isUser ? "text-foreground" : "text-accent"}>
          {isUser ? "› you" : "› arpan"}
        </span>
        <span suppressHydrationWarning>· {msg.ts}</span>
      </div>
      <p
        className={`mt-1 text-sm leading-relaxed ${
          isUser ? "text-muted-foreground" : "text-foreground"
        }`}
      >
        {msg.text}
      </p>
    </div>
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
