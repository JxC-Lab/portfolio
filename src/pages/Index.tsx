import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import AllProjects from "@/components/AllProjects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <AllProjects />
      <Skills />
      <Experience />
      <Contact />
      <footer className="py-8 text-center text-xs text-muted-foreground border-t border-border">
        <p>© 2026 Jaad CHOKR — Tous droits réservés</p>
      </footer>
    </div>
  );
};

export default Index;
