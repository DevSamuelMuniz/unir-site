import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5581984639299", "_blank");
  };

  const contactItems = [
    { icon: <Phone className="w-5 h-5" />, label: "Telefone", value: "+55 (81) 98463-9299", href: "https://wa.me/5581984639299" },
    { icon: <Mail className="w-5 h-5" />, label: "E-mail", value: "contato.unityinnovation@gmail.com", href: "mailto:contato.unityinnovation@gmail.com" },
    { icon: <MapPin className="w-5 h-5" />, label: "Localização", value: "Recife, Pernambuco" },
  ];

  return (
    <section id="contato" className="py-32 dark-gradient relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-unir-electric/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur text-xs font-semibold uppercase tracking-widest text-white/80 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-unir-electric pulse-dot" />
            Vamos conversar
          </span>
          <h2 className="display-text text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none mb-10">
            Pronto para{" "}
            <span className="bg-gradient-to-r from-unir-electric to-white bg-clip-text text-transparent">
              transformar
            </span>{" "}
            sua ideia em realidade?
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12">
            Fale direto conosco no WhatsApp e descubra como a Unir pode impulsionar seu negócio.
          </p>

          <Button
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-white text-unir-dark-blue hover:bg-unir-electric hover:text-white rounded-full h-16 px-10 text-lg font-semibold group"
          >
            <MessageCircle className="w-6 h-6 mr-2" />
            Chamar no WhatsApp
            <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10 max-w-5xl mx-auto">
          {contactItems.map((c) => {
            const Wrap = c.href ? "a" : "div";
            return (
              <Wrap
                key={c.label}
                href={c.href}
                target={c.href?.startsWith("http") ? "_blank" : undefined}
                rel={c.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                className="bg-unir-dark-blue/80 backdrop-blur p-8 hover:bg-unir-vibrant-blue/30 transition-smooth"
              >
                <div className="w-10 h-10 rounded-full bg-unir-electric/20 text-unir-electric flex items-center justify-center mb-4">
                  {c.icon}
                </div>
                <p className="text-xs uppercase tracking-widest text-white/50 mb-2">{c.label}</p>
                <p className="text-white font-medium break-words">{c.value}</p>
              </Wrap>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
