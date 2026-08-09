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
    id: "gear-up",
    index: "P02",
    title: "GearUp — E-rental Platform",
    summary:
      "A complete full-stack e-commerce solution for sports and outdoor gear, featuring separate frontend and backend architectures.",
    description:
      "GearUp is a robust e-commerce platform I built to handle full retail workflows. It includes product browsing, shopping cart management, user authentication, and secure data handling, bridging a dynamic React frontend with a scalable backend.",
    highlights: ["Full-stack architecture", "Complete e-commerce workflow", "RESTful API integration"],
    stack: ["React", "Node.js", "Express", "MongoDB"],
    demo: "https://gear-up-frontend-liart.vercel.app/",
    repo: "https://github.com/arpansarkar112/GearUp_Frontend.git",
    span: "lg:col-span-4 md:col-span-12 col-span-12",
    tone: "stone",
    year: "'26",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&q=80&w=800",
    challenges:
      "Managing global state for the shopping cart across different components and securely handling user authentication between the separated frontend and backend repositories were the primary hurdles. Ensuring seamless cross-origin resource sharing (CORS) also took precise configuration.",
    improvements:
      "In the future, I plan to integrate a fully-featured admin dashboard for inventory management and implement Stripe API for real-time payment processing. I'd also like to add a backend link directly into the UI for easier codebase navigation.",
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
