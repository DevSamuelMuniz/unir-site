import { Button } from "@/components/ui/button";
import { Code, Smartphone, Cloud, BarChart, MessageCircle, PanelTop } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Desenvolvimento Web",
      description: "Criamos websites e aplicações web modernas, responsivas e otimizadas, utilizando as mais recentes tecnologias.",
      
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Aplicativos Mobile",
      description: "Desenvolvemos aplicativos nativos e híbridos para iOS e Android, focando na melhor experiência do usuário.",
      
    },
   
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Business Intelligence",
      description: "Transformamos dados em insights valiosos através de dashboards inteligentes e análises avançadas.",
      
    },
    {
      icon: <PanelTop className="w-8 h-8" />,
      title: "Plataformas SaaS",
      description: "Desenvolvemos plataformas SaaS personalizadas para atender às necessidades específicas de cada cliente.",
    }
  ];

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5581984639299", "_blank");
  };

  return (
    <section id="servicos" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-unir-dark-blue mb-6">
            Nossos <span className="text-unir-orange">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções tecnológicas completas e personalizadas para 
            impulsionar o crescimento do seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-card hover:shadow-elegant transition-smooth group"
            >
              <div className="w-16 h-16 bg-unir-vibrant-blue rounded-xl flex items-center justify-center mb-6 text-white group-hover:bg-unir-orange transition-smooth">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-unir-dark-blue mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              
              
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleWhatsAppClick}
                className="w-full border-unir-vibrant-blue text-unir-vibrant-blue hover:bg-unir-vibrant-blue hover:text-white"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Quero saber mais
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;