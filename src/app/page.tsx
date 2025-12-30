import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Contact, Footer } from "@/components/sections/Contact";
import { SectionReveal } from "@/components/ui/section-reveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <Hero />
      <SectionReveal delay={0.1}>
        <About />
      </SectionReveal>
      <SectionReveal delay={0.2}>
        <Services />
      </SectionReveal>
      <SectionReveal>
        <Projects />
      </SectionReveal>
      <SectionReveal>
        <Contact />
      </SectionReveal>
      <Footer />
    </main>
  );
}
