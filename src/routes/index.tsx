import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Education } from "@/components/portfolio/Education";
import { Publications } from "@/components/portfolio/Publications";
import { AskArpanAI } from "@/components/portfolio/AskArpanAI";
import { Contact, Footer } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Publications />
        <AskArpanAI />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
