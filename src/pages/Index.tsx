import FloatingHeader from "@/components/FloatingHeader";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import ServicesSection from "@/components/ServicesSection";
import SistemasSection from "@/components/SistemasSection";
import PartnersSection from "@/components/PartnersSection";
import EquipeSection from "@/components/EquipeSection";
import InspirationalSection from "@/components/InspirationalSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen scroll-smooth">
      <FloatingHeader />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SistemasSection />
      <PartnersSection />
      <MissionSection />
      <EquipeSection />
      <InspirationalSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
