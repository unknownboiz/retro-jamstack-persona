import { RetroNavigation } from "@/components/RetroNavigation";
import { RetroHero } from "@/components/RetroHero";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { TerminalAbout } from "@/components/TerminalAbout";
import { RetroFooter } from "@/components/RetroFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <RetroNavigation />
      
      <main>
        <section id="home">
          <RetroHero />
        </section>
        
        <section id="projects">
          <ProjectsGrid />
        </section>
        
        <section id="about">
          <TerminalAbout />
        </section>
      </main>
      
      <RetroFooter />
    </div>
  );
};

export default Index;
