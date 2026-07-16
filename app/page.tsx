import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FoundersSection } from "@/components/FoundersSection";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { LanguageProvider } from "@/components/LanguageProvider";
import { ProcessSection } from "@/components/ProcessSection";
import { ProjectsSection } from "@/components/ProjectsSection";

export default function Home() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ProcessSection />
        <FoundersSection />
        <ContactSection />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
