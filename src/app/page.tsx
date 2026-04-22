import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { ProjectsTeaser } from "@/components/sections/projects-teaser";
import { ProblemSolving } from "@/components/sections/problem-solving";
import { Experience } from "@/components/sections/experience";
import { CurrentlyBuilding } from "@/components/sections/currently-building";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <ProjectsTeaser />
        <ProblemSolving />
        <Experience />
        <CurrentlyBuilding />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
