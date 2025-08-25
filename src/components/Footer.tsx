import { Button } from "@/components/ui/button";
import { MessageCircle, Heart, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5581984639299", "_blank");
  };

  return (
    <footer className="bg-unir-dark-blue text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-unir-orange">Un</span>ir
            </h3>
            <p className="text-white/80 mb-6 max-w-md leading-relaxed">
              Transformando realidades através da tecnologia com propósito. 
              Inovação, fé e ética em cada solução que criamos.
            </p>
            <Button 
              variant="cta" 
              onClick={handleWhatsAppClick}
              className="mb-4"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Atendimento WhatsApp
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-unir-light-green">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#sobre" className="text-white/80 hover:text-unir-orange transition-smooth">Sobre Nós</a></li>
              <li><a href="#servicos" className="text-white/80 hover:text-unir-orange transition-smooth">Serviços</a></li>
              <li><a href="#contato" className="text-white/80 hover:text-unir-orange transition-smooth">Contato</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-unir-light-green">Serviços</h4>
            <ul className="space-y-2">
              <li><span className="text-white/80">Desenvolvimento Web</span></li>
              <li><span className="text-white/80">Apps Mobile</span></li>
              <li><span className="text-white/80">Soluções em Nuvem</span></li>
              <li><span className="text-white/80">Business Intelligence</span></li>
            </ul>
          </div>
        </div>

        {/* Social Media and Contact */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <h5 className="text-lg font-medium">Conecte-se conosco:</h5>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-unir-vibrant-blue rounded-full flex items-center justify-center hover:bg-unir-orange transition-smooth">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-unir-vibrant-blue rounded-full flex items-center justify-center hover:bg-unir-orange transition-smooth">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="mailto:contato.unityinnovation@gmail.com" className="w-10 h-10 bg-unir-vibrant-blue rounded-full flex items-center justify-center hover:bg-unir-orange transition-smooth">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-white/80 mb-2">
                <span className="text-unir-light-green">+55 (81) 98463-9299</span>
              </p>
              <p className="text-white/80">contato.unityinnovation@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="text-center mt-12 pt-8 border-t border-white/20">
          <p className="text-xl font-medium text-unir-orange mb-4 flex items-center justify-center">
            <Heart className="w-5 h-5 mr-2" />
            Na Unir, tecnologia com propósito transforma vidas.
          </p>
          <p className="text-white/60">
            © 2024 Unir. Todos os direitos reservados. | Desenvolvido com amor e dedicação.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;