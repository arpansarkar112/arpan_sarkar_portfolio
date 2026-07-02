import { SectionHeader } from "./Projects";

export function About() {
  return (
    <section id="about" className="border-b border-hairline">
      <SectionHeader
        eyebrow="002 — Background"
        title="About Me"
        note="JOURNEY & BEYOND"
      />
      <div className="mx-auto max-w-350 px-6 pb-16 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-hairline border border-hairline">
          {/* Journey */}
          <div className="md:col-span-4 bg-background p-8 transition duration-500 hover:bg-neutral-950/30">
             <h3 className="font-mono-tech text-sm uppercase tracking-widest text-accent mb-6">/ My Journey</h3>
             <p className="text-sm leading-relaxed opacity-80 text-foreground">
               Hello, I am Arpan. My path into software development began right at the intersection of automation engineering and modern web architecture. I have always been fascinated by how different systems communicate and operate behind the scenes. As my skills evolved, I dove headfirst into full-stack development. I spent countless late nights mastering the MERN stack, TypeScript, and C++, focusing my energy on building everything from AI-driven task agents to highly responsive web interfaces.
             </p>
          </div>
          {/* What I Do */}
          <div className="md:col-span-4 bg-background p-8 transition duration-500 hover:bg-neutral-950/30">
             <h3 className="font-mono-tech text-sm uppercase tracking-widest text-accent mb-6">/ What I Do</h3>
             <p className="text-sm leading-relaxed opacity-80 text-foreground">
               When it comes to the work I enjoy most, I thrive where precision meets creativity. I love architecting reliable systems and tackling complex design challenges. Whether I am building out an automation workflow or scaling a web application, I get a real thrill out of creating digital products that are just as smart under the hood as they are beautiful on the screen.
             </p>
          </div>
          {/* Off the Grid */}
          <div className="md:col-span-4 bg-background p-8 transition duration-500 hover:bg-neutral-950/30">
             <h3 className="font-mono-tech text-sm uppercase tracking-widest text-accent mb-6">/ Off the Grid</h3>
             <p className="text-sm leading-relaxed opacity-80 text-foreground">
               Of course, there is more to life than writing code. When I step away from the keyboard, you will usually find me watching a football match. I am a huge Manchester City supporter, and I never miss the excitement of international tournaments like the World Cup. I am also deeply passionate about traveling. I am constantly on the hunt for the perfect place to travel around the world. Balancing the strict logic of programming with the unpredictable nature of travel and sports keeps me grounded and always ready to learn something new.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}
