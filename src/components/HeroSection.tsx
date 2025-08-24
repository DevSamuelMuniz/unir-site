import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import { MessageCircle } from "lucide-react";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5581984639299", "_blank");
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white"
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Logo UNIR */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/bc3c4eeb-529c-438d-bf3c-f0b7502e93e0.png" 
              alt="UNIR - Unity of Innovation in Recife" 
              className="h-32 md:h-40 lg:h-48 w-auto mx-auto drop-shadow-2xl"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-unir-dark-blue mb-8 leading-tight">
            Transformando realidades com{" "}
            <span className="text-unir-vibrant-blue">tecnologia</span> e{" "}
            <span className="text-unir-medium-blue">propósito</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-unir-dark-blue/80 mb-12 max-w-4xl mx-auto font-light">
            Na Unir, unimos inovação tecnológica com valores cristãos para criar soluções que realmente transformam vidas e negócios.
          </p>
          
          <Button 
            variant="default" 
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-unir-vibrant-blue hover:bg-unir-medium-blue text-white animate-pulse hover:animate-none"
          >
            <MessageCircle className="w-6 h-6 mr-2" />
            Fale conosco no WhatsApp
          </Button>
        </div>
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-unir-medium-blue/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-unir-vibrant-blue/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-unir-dark-blue/10 rounded-full blur-lg animate-pulse delay-500"></div>
    </section>
  );
};

export default HeroSection;