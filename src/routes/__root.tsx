import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles.css?url";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-mono-tech text-xs uppercase tracking-widest text-muted-foreground">
          Error / 404
        </p>
        <h1 className="mt-4 font-display text-6xl font-bold text-foreground">
          Not found.
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          This route was never wired into the system.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 border border-foreground bg-foreground px-5 py-2.5 font-mono-tech text-xs uppercase tracking-widest text-background transition hover:bg-accent hover:border-accent hover:text-accent-foreground"
          >
            ← Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-mono-tech text-xs uppercase tracking-widest text-muted-foreground">
          System exception
        </p>
        <h1 className="mt-4 font-display text-3xl font-bold text-foreground">
          Something failed to render.
        </h1>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="border border-foreground bg-foreground px-5 py-2.5 font-mono-tech text-xs uppercase tracking-widest text-background transition hover:bg-accent hover:border-accent hover:text-accent-foreground"
          >
            Retry
          </button>
          <a
            href="/"
            className="border border-border bg-background px-5 py-2.5 font-mono-tech text-xs uppercase tracking-widest text-foreground transition hover:border-foreground"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const TITLE = "Arpan Sarkar — Automation Engineer & Full-Stack Developer";
const DESC =
  "Portfolio of Arpan Sarkar. Graduate Automation Engineer and full-stack developer bridging precision engineering with scalable MERN + TypeScript systems.";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "author", content: "Arpan Sarkar" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "theme-color", content: "#F8F7F4" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <Toaster position="bottom-right" />
    </QueryClientProvider>
  );
}
