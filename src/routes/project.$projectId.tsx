import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { projectsData } from "@/lib/projects";
import { Nav } from "@/components/portfolio/Nav";
import { Contact, Footer } from "@/components/portfolio/Contact";
import { ArrowUpRight, Github, ArrowLeft } from "lucide-react";

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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="mx-auto max-w-350 px-6 py-16 md:px-10">
        <Link
          to="/"
          hash="work"
          className="mb-8 inline-flex items-center gap-2 font-mono-tech text-xs uppercase tracking-widest text-muted-foreground transition hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>
        
        <header className="mb-12 border-b border-hairline pb-8">
          <p className="font-mono-tech text-[11px] uppercase tracking-[0.28em] text-accent">
            {project.index} — Project Detail
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-foreground md:text-6xl">
            {project.title}
          </h1>
        </header>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Main Content */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            <div className="w-full overflow-hidden border border-hairline aspect-video bg-neutral-900 relative group/preview">
              {project.demo ? (
                <>
                  <iframe
                    src={project.demo}
                    title={`${project.title} live preview`}
                    loading="lazy"
                    className="w-full h-full pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute left-4 top-4 inline-flex items-center gap-2 border border-background/70 bg-background/90 px-3 py-1 font-mono-tech text-[10px] uppercase tracking-widest text-foreground shadow-sm transition hover:bg-foreground hover:text-background"
                  >
                    Open Live Site
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </>
              ) : (
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              )}
            </div>

            <section>
              <h2 className="font-mono-tech text-sm uppercase tracking-widest text-accent mb-4">/ Brief Description</h2>
              <p className="text-sm leading-relaxed opacity-90 text-foreground md:text-base">
                {project.description}
              </p>
            </section>

            <section>
              <h2 className="font-mono-tech text-sm uppercase tracking-widest text-accent mb-4">/ Challenges Faced</h2>
              <p className="text-sm leading-relaxed opacity-90 text-foreground md:text-base">
                {project.challenges}
              </p>
            </section>

            <section>
              <h2 className="font-mono-tech text-sm uppercase tracking-widest text-accent mb-4">/ Future Improvements</h2>
              <p className="text-sm leading-relaxed opacity-90 text-foreground md:text-base">
                {project.improvements}
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-10">
            <div className="border border-hairline p-6 bg-background">
              <h3 className="font-mono-tech text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
                / Main Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="border border-current/30 px-2 py-1 font-mono-tech text-[10px] uppercase tracking-widest opacity-90"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-hairline p-6 bg-background flex flex-col gap-4">
              <h3 className="font-mono-tech text-[10px] uppercase tracking-widest text-muted-foreground">
                / Links
              </h3>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 border border-foreground bg-foreground px-5 py-3 font-mono-tech text-xs uppercase tracking-widest text-background transition hover:bg-accent hover:border-accent hover:text-accent-foreground w-full justify-center"
                >
                  Live Project
                  <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 border border-hairline bg-transparent px-5 py-3 font-mono-tech text-xs uppercase tracking-widest text-foreground transition hover:bg-foreground hover:text-background w-full justify-center"
                >
                  <Github className="h-4 w-4" />
                  GitHub Repo
                </a>
              )}
            </div>
          </div>
        </div>
      </main>
      <Contact />
      <Footer />
    </div>
  );
}
