import { Code, Smartphone, BarChart, PanelTop, ArrowUpRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Desenvolvimento Web",
      description:
        "Websites e aplicações web modernas, responsivas e otimizadas, com as tecnologias mais atuais do mercado.",
      tag: "01",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Aplicativos Mobile",
      description:
        "Apps nativos e híbridos para iOS e Android, focados na melhor experiência do usuário.",
      tag: "02",
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Business Intelligence",
      description:
        "Transformamos dados em insights através de dashboards inteligentes e análises avançadas.",
      tag: "03",
    },
    {
      icon: <PanelTop className="w-6 h-6" />,
      title: "Plataformas SaaS",
      description:
        "Plataformas SaaS personalizadas para atender às necessidades específicas de cada cliente.",
      tag: "04",
    },
  ];

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5581984639299", "_blank");
  };

  return (
    <section id="servicos" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <span className="section-label mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-unir-vibrant-blue" />
              Soluções
            </span>
            <h2 className="display-text text-5xl md:text-6xl lg:text-7xl font-bold text-unir-dark-blue mt-6 leading-none">
              Soluções desenhadas para{" "}
              <span className="bg-gradient-to-r from-unir-vibrant-blue to-unir-electric bg-clip-text text-transparent">desafios reais</span>.
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-md">
            Da concepção ao deploy, entregamos resultados que se adaptam ao seu negócio
            e crescem junto com ele.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-unir-soft hover:bg-unir-dark-blue rounded-3xl p-10 transition-smooth cursor-pointer overflow-hidden"
              onClick={handleWhatsAppClick}
            >
              <div className="flex items-start justify-between mb-12">
                <div className="w-14 h-14 rounded-2xl bg-background text-unir-vibrant-blue flex items-center justify-center group-hover:bg-unir-electric group-hover:text-unir-dark-blue transition-smooth">
                  {service.icon}
                </div>
                <span className="text-sm font-mono text-unir-vibrant-blue/60 group-hover:text-unir-electric transition-smooth">
                  {service.tag}
                </span>
              </div>

              <h3 className="display-text text-3xl md:text-4xl font-bold text-unir-dark-blue group-hover:text-white mb-4 transition-smooth">
                {service.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-white/70 leading-relaxed mb-8 transition-smooth">
                {service.description}
              </p>

              <div className="flex items-center gap-2 text-sm font-semibold text-unir-vibrant-blue group-hover:text-unir-electric transition-smooth">
                Saiba mais
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-unir-dark-blue hover:bg-unir-vibrant-blue text-white rounded-full h-14 px-8 font-semibold"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Fale com um especialista
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
