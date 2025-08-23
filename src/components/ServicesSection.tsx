import { Button } from "@/components/ui/button";
import { Code, Smartphone, Cloud, BarChart, MessageCircle } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Desenvolvimento Web",
      description: "Criamos websites e aplicações web modernas, responsivas e otimizadas, utilizando as mais recentes tecnologias do mercado.",
      features: ["React & Next.js", "Design Responsivo", "SEO Otimizado", "Performance Elevada"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Aplicativos Mobile",
      description: "Desenvolvemos aplicativos nativos e híbridos para iOS e Android, focando na melhor experiência do usuário.",
      features: ["React Native", "Flutter", "UI/UX Design", "Publicação nas Stores"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Soluções em Nuvem",
      description: "Implementamos infraestruturas robustas e escaláveis na nuvem, garantindo segurança e alta disponibilidade.",
      features: ["AWS & Azure", "DevOps", "Monitoramento", "Backup Automatizado"]
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Business Intelligence",
      description: "Transformamos dados em insights valiosos através de dashboards inteligentes e análises avançadas.",
      features: ["Power BI", "Dashboards Interativos", "Análise de Dados", "Relatórios Automatizados"]
    }
  ];

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5581984639299", "_blank");
  };

  return (
    <section className="py-24 bg-secondary/30">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-unir-vibrant-blue flex items-center">
                    <div className="w-1.5 h-1.5 bg-unir-orange rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleWhatsAppClick}
                className="w-full border-unir-vibrant-blue text-unir-vibrant-blue hover:bg-unir-vibrant-blue hover:text-white"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Quero saber mais no WhatsApp
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;