export type Project = {
  id: string;
  index: string;
  title: string;
  summary: string;
  description: string;
  highlights: string[];
  stack: string[];
  demo?: string;
  repo?: string;
  span: string;
  tone: "card" | "stone";
  year: string;
  image: string;
  challenges: string;
  improvements: string;
};

export const projectsData: Project[] = [
  {
    id: "echo-ai",
    index: "P01",
    title: "Echo · AI Agent Workspace",
    summary:
      "Browser workspace where natural language prompts trigger automated CSV processing and structured decisions without manual scripting.",
    description:
      "Echo connects large language models with deterministic workflow execution so operations teams can validate, clean, and transform tabular datasets through conversational commands, cutting manual spreadsheet handling.",
    highlights: [
      "Automates repetitive CSV parsing and anomaly checks to save hours of manual review",
      "Streams structured LLM reasoning steps in real time so operators can verify every action",
      "Persists conversation history and dataset schemas in PostgreSQL via Prisma for auditability",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
    demo: "https://echo-ai-agent.vercel.app/",
    repo: "https://github.com/arpansarkar112/Full_Stack_AI_chat_Application",
    span: "lg:col-span-7 col-span-12",
    tone: "card",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    challenges:
      "Maintaining stable connections during asynchronous LLM calls required chunked streaming back to the client interface. Validating untrusted CSV uploads also demanded strict schema sanitization before database insertion.",
    improvements:
      "Next milestones include adding native PDF and Excel workbook ingestion and upgrading status polling to persistent WebSocket channels for instant multi step task feedback.",
  },
  {
    id: "gear-up",
    index: "P02",
    title: "GearUp · Equipment Rental Platform",
    summary:
      "Full stack rental and retail commerce system for outdoor sports equipment with decoupled React and Express services.",
    description:
      "GearUp manages end to end equipment booking and retail checkout workflows. It pairs a responsive React storefront with a dedicated Node.js and Express API layer backed by MongoDB.",
    highlights: [
      "Synchronizes cart and booking availability across sessions so customers never reserve out of stock gear",
      "Secures customer accounts with token authentication and role permissions across separate services",
      "Exposes a clean REST API contract that decouples storefront rendering from inventory logic",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB"],
    demo: "https://gear-up-frontend-liart.vercel.app/",
    repo: "https://github.com/arpansarkar112/GearUp_Frontend.git",
    span: "lg:col-span-5 col-span-12",
    tone: "stone",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&q=80&w=800",
    challenges:
      "Coordinating shopping cart state across multiple views and managing authentication tokens between independent frontend and backend origins required careful state synchronization and strict cross origin policies.",
    improvements:
      "Planned upgrades include an inventory analytics console for store operators and direct Stripe checkout integration for automated deposit handling.",
  },
  {
    id: "mancity-dashboard",
    index: "P03",
    title: "Manchester City · Match Telemetry Hub",
    summary:
      "Interactive football telemetry dashboard aggregating live fixtures, squad metrics, and match day streams in one view.",
    description:
      "Built for supporters and analysts, this telemetry hub normalizes live football data feeds into an interactive dashboard tracking squad form, fixture schedules, and match statistics.",
    highlights: [
      "Unifies multiple sports data endpoints into a single view so fans can track fixtures without switching tabs",
      "Memoizes high frequency stat updates to keep chart interactions smooth on mobile devices",
    ],
    stack: ["React", "Node.js", "REST APIs"],
    demo: "https://super-sunflower-8a5321.netlify.app/",
    repo: "https://github.com/arpansarkar112/frontend_coursework.git",
    span: "lg:col-span-12 col-span-12",
    tone: "card",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1518605368461-1e125222416b?auto=format&fit=crop&q=80&w=800",
    challenges:
      "Merging external REST APIs with different response shapes into a unified client state tree required custom normalization adapters and memoized selectors to prevent unnecessary component updates during live polling.",
    improvements:
      "Upcoming iterations will introduce saved layout preferences per user and historical season comparisons across club eras.",
  },
];
