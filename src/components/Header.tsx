import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5581984639299", "_blank");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/bc3c4eeb-529c-438d-bf3c-f0b7502e93e0.png" 
              alt="UNIR - Unity of Innovation in Recife" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-unir-dark-blue hover:text-unir-orange transition-smooth font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('missao')}
              className="text-unir-dark-blue hover:text-unir-orange transition-smooth font-medium"
            >
              Missão
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-unir-dark-blue hover:text-unir-orange transition-smooth font-medium"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-unir-dark-blue hover:text-unir-orange transition-smooth font-medium"
            >
              Contato
            </button>
            <Button 
              variant="cta" 
              size="sm"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-unir-dark-blue hover:text-unir-orange transition-smooth"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left text-unir-dark-blue hover:text-unir-orange transition-smooth font-medium py-2"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('missao')}
                className="text-left text-unir-dark-blue hover:text-unir-orange transition-smooth font-medium py-2"
              >
                Missão
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-left text-unir-dark-blue hover:text-unir-orange transition-smooth font-medium py-2"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left text-unir-dark-blue hover:text-unir-orange transition-smooth font-medium py-2"
              >
                Contato
              </button>
              <Button 
                variant="cta" 
                size="sm"
                onClick={handleWhatsAppClick}
                className="w-fit"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;