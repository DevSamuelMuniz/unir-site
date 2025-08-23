import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { MessageCircle } from "lucide-react";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5581984639299", "_blank");
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient"
      style={{
        backgroundImage: `linear-gradient(rgba(12, 37, 72, 0.8), rgba(16, 52, 102, 0.8)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Transformando realidades com{" "}
            <span className="text-unir-orange">tecnologia</span> e{" "}
            <span className="text-unir-light-green">propósito</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light">
            Na Unir, unimos inovação tecnológica com valores cristãos para criar soluções que realmente transformam vidas e negócios.
          </p>
          
          <Button 
            variant="hero" 
            size="lg"
            onClick={handleWhatsAppClick}
            className="animate-pulse hover:animate-none"
          >
            <MessageCircle className="w-6 h-6 mr-2" />
            Fale conosco no WhatsApp
          </Button>
        </div>
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-unir-light-green/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-unir-orange/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-unir-vibrant-blue/30 rounded-full blur-lg animate-pulse delay-500"></div>
    </section>
  );
};

export default HeroSection;