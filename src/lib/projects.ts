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
  tone: "ink" | "stone" | "accent";
  year: string;
  image: string;
  challenges: string;
  improvements: string;
};

export const projectsData: Project[] = [
  {
    id: "echo-ai",
    index: "P01",
    title: "Echo — Full-Stack AI Chat Application",
    summary:
      "Echo is a web-based AI agent designed to automate repetitive tasks (such as handling CSV files) and make intelligent decisions using natural language.",
    description:
      "I built Echo to explore how large language models (LLMs) and Agentic AI can work together to solve real-world problems. The application serves as an intelligent agent capable of processing data automatically, reducing human overhead in data workflows.",
    highlights: [
      "Agentic AI & Robotic Process Automation (RPA)",
      "Automated CSV processing workflows",
      "LLM-driven natural language decision engine",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
    demo: "https://echo-ai-agent.vercel.app/",
    repo: "https://github.com/arpansarkar112/Full_Stack_AI_chat_Application",
    span: "lg:col-span-4 md:col-span-12 col-span-12",
    tone: "ink",
    year: "'26",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    challenges:
      "One of the biggest challenges was handling long-running, asynchronous LLM API calls without dropping the connection, ensuring that data chunks were streamed back efficiently to the UI. Also, securely parsing and managing potentially malicious CSV uploads required careful validation logic.",
    improvements:
      "In the future, I plan to expand file support beyond CSV to include PDFs and Excel spreadsheets. Additionally, implementing real-time websocket connections instead of standard polling could provide a more fluid chat-like experience.",
  },
  {
    id: "saas-landing",
    index: "P02",
    title: "SaaS Landing Page",
    summary:
      "Highly responsive frontend application — a marketing surface built as a component system rather than a page.",
    description:
      "This project focuses heavily on frontend aesthetics and fluid design. It serves as a modern SaaS marketing template with a composable section-based architecture, making it easy to swap out features, testimonials, and pricing tables.",
    highlights: ["Fluid type & spacing scale", "Composable section primitives"],
    stack: ["React", "TypeScript", "Tailwind"],
    demo: "https://bucolic-lily-8ee23b.netlify.app/",
    repo: "https://github.com/arpansarkar112/frontend_coursework.git",
    span: "lg:col-span-4 md:col-span-12 col-span-12",
    tone: "stone",
    year: "'26",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    challenges:
      "Creating a unified design system that scales seamlessly from small mobile screens to ultra-wide desktop monitors. Managing Tailwind config for consistent spacing without overusing media queries was a complex but rewarding task.",
    improvements:
      "Adding full accessibility (a11y) support for screen readers and keyboard navigation. I also aim to implement robust A/B testing components so marketers can easily experiment with different layouts.",
  },
  {
    id: "mancity-dashboard",
    index: "P03",
    title: "Manchester City Dashboard",
    summary:
      "Custom-built interactive dashboard themed around Manchester City FC",
    description:
      "A dedicated, real-time dashboard tracking the statistics, news, and match data for Manchester City FC. Built specifically to handle and visualize live data streams.",
    highlights: ["Live data streams", "Themed visual system"],
    stack: ["React", "Node", "REST APIs"],
    demo: "https://super-sunflower-8a5321.netlify.app/",
    repo: "https://github.com/arpansarkar112/frontend_coursework.git",
    span: "lg:col-span-4 md:col-span-12 col-span-12",
    tone: "accent",
    year: "'25",
    image: "https://images.unsplash.com/photo-1518605368461-1e125222416b?auto=format&fit=crop&q=80&w=800",
    challenges:
      "Integrating disparate REST APIs to gather live match data and standardizing it into a single normalized state tree on the client. Keeping the UI responsive while polling for live updates required careful memoization.",
    improvements:
      "Future plans include adding user authentication to allow fans to customize their dashboard layout. I'd also like to integrate historical data comparisons to see how current players stack up against club legends.",
  },
];
