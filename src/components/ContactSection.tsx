import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5581984639299", "_blank");
  };

  return (
    <section id="contato" className="py-24 bg-unir-orange relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Precisa de soluções sob medida?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Fale direto com a Unir no WhatsApp e descubra como podemos transformar suas ideias em realidade!
          </p>
          
          <Button 
            variant="cta-secondary" 
            size="lg"
            onClick={handleWhatsAppClick}
            className="whatsapp-pulse text-lg px-8 py-4"
          >
            <MessageCircle className="w-6 h-6 mr-2" />
            Chamar no WhatsApp
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Telefone</h3>
            <p className="text-white/90">+55 (81) 98463-9299</p>
          </div>
          
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">E-mail</h3>
            <p className="text-white/90">contato@unir.com.br</p>
          </div>
          
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Localização</h3>
            <p className="text-white/90">Recife, Pernambuco</p>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-unir-light-green/30 rounded-full blur-2xl"></div>
    </section>
  );
};

export default ContactSection;