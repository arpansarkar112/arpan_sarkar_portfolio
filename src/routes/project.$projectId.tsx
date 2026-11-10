import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { projectsData } from "@/lib/projects";
import { Nav } from "@/components/portfolio/Nav";
import { Contact, Footer } from "@/components/portfolio/Contact";
import { PiArrowUpRight, PiGithubLogo, PiArrowLeft } from "react-icons/pi";

export const Route = createFileRoute("/project/$projectId")({
  loader: ({ params }) => {
    const project = projectsData.find((p) => p.id === params.projectId);
    if (!project) {
      throw notFound();
    }
    return project;
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const project = Route.useLoaderData();
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Nav />
      <main id="main-content" className="mx-auto max-w-[1400px] px-6 py-16 md:px-10">
        <Link
          to="/"
          hash="work"
          className="mb-8 inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-muted-foreground transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-foreground active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <PiArrowLeft className="h-4 w-4 text-accent" />
          Back to portfolio
        </Link>

        <header className="mb-12 border-b border-hairline pb-8">
          <p className="font-mono-tech text-xs font-medium tracking-wider text-accent tabular-nums">
            {project.index} · Project case study · {project.year}
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground text-balance md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-[65ch] text-lg text-muted-foreground text-pretty">
            {project.summary}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Main Content */}
          <div className="flex flex-col gap-10 lg:col-span-8">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-secondary">
              {project.demo ? (
                <>
                  {!iframeLoaded && (
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 z-10 flex flex-col justify-between bg-secondary p-6"
                    >
                      <div className="flex items-center justify-between border-b border-border pb-4">
                        <div className="flex items-center gap-2">
                          <span className="h-3 w-3 rounded-full bg-border" />
                          <span className="h-3 w-3 rounded-full bg-border" />
                          <span className="h-3 w-3 rounded-full bg-border" />
                        </div>
                        <span className="h-3 w-36 animate-pulse rounded-sm bg-border" />
                      </div>
                      <div className="space-y-3 py-6">
                        <div className="h-6 w-2/3 animate-pulse rounded-sm bg-border" />
                        <div className="h-4 w-1/2 animate-pulse rounded-sm bg-border" />
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-20 animate-pulse rounded-md bg-border" />
                        <div className="h-20 animate-pulse rounded-md bg-border" />
                        <div className="h-20 animate-pulse rounded-md bg-border" />
                      </div>
                    </div>
                  )}
                  <iframe
                    src={project.demo}
                    title={`${project.title} live preview`}
                    loading="lazy"
                    onLoad={() => setIframeLoaded(true)}
                    className={`pointer-events-none h-full w-full transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      iframeLoaded ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute left-4 top-4 z-20 inline-flex items-center gap-2 rounded-lg border border-border bg-background/95 px-3 py-2 text-sm font-semibold text-foreground transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent hover:bg-accent hover:text-accent-foreground active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    Open live application
                    <PiArrowUpRight className="h-4 w-4" />
                  </a>
                </>
              ) : (
                <img
                  src={project.image}
                  alt={`Preview of ${project.title}`}
                  className="h-full w-full object-cover"
                />
              )}
            </div>

            <section className="rounded-2xl border border-border bg-card p-8">
              <h2 className="font-mono-tech text-xs font-medium tracking-wider text-accent">
                System architecture & overview
              </h2>
              <p className="mt-3 max-w-[65ch] text-base text-foreground text-pretty">
                {project.description}
              </p>
              <ul className="mt-6 space-y-3 border-t border-hairline pt-6">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base text-muted-foreground text-pretty"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl border border-border bg-stone p-8">
              <h2 className="font-mono-tech text-xs font-medium tracking-wider text-accent">
                Engineering challenges solved
              </h2>
              <p className="mt-3 max-w-[65ch] text-base text-foreground text-pretty">
                {project.challenges}
              </p>
            </section>

            <section className="rounded-2xl border border-border bg-card p-8">
              <h2 className="font-mono-tech text-xs font-medium tracking-wider text-accent">
                Roadmap & next iterations
              </h2>
              <p className="mt-3 max-w-[65ch] text-base text-foreground text-pretty">
                {project.improvements}
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-6 lg:col-span-4">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-mono-tech text-xs font-medium tracking-wider text-muted-foreground">
                Technology stack
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border bg-stone px-3 py-1 font-mono-tech text-xs font-medium text-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6">
              <h3 className="font-mono-tech text-xs font-medium tracking-wider text-muted-foreground">
                Project access
              </h3>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-lg border border-foreground bg-foreground px-3 py-2 text-base font-semibold text-background transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent hover:bg-accent hover:text-accent-foreground active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Launch live deployment
                  <PiArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-stone px-3 py-2 text-base font-semibold text-foreground transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-foreground active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <PiGithubLogo className="h-5 w-5" />
                  Inspect source code
                </a>
              )}
            </div>
          </aside>
        </div>
      </main>
      <Contact />
      <Footer />
    </div>
  );
}
