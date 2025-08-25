import { Users, Heart, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const founders = [
    {
      name: "Samuel Muniz",
      role: "Sócio Fundador",
      description: "Líder em tecnologia e inovação, dedicado a criar soluções que impactam positivamente a sociedade."
    },
    {
      name: "Eudes Jordão",
      role: "Sócio Fundador",
      description: "Especialista em desenvolvimento e arquitetura de sistemas, com foco em soluções escaláveis e inovadoras."
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-unir-dark-blue mb-6">
            Conheça a <span className="text-unir-vibrant-blue">Unir</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos uma empresa de tecnologia que acredita no poder transformador da inovação 
            quando guiada por valores sólidos e propósito cristão.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <div key={index} className="text-center card-gradient p-8 rounded-2xl shadow-card hover:shadow-elegant transition-smooth">
              <div className="w-20 h-20 bg-unir-vibrant-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-unir-dark-blue mb-2">
                {founder.name}
              </h3>
              <p className="text-unir-vibrant-blue font-medium mb-4">{founder.role}</p>
              <p className="text-muted-foreground leading-relaxed">
                {founder.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8">
            <div className="w-16 h-16 bg-unir-vibrant-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-unir-dark-blue mb-4">Nossa Essência</h3>
            <p className="text-muted-foreground">
              Tecnologia com propósito, desenvolvida com dedicação para transformar realidades.
            </p>
          </div>
          
          <div className="text-center p-8">
            <div className="w-16 h-16 bg-unir-vibrant-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-unir-dark-blue mb-4">Inovação</h3>
            <p className="text-muted-foreground">
              Buscamos constantemente novas formas de solucionar problemas e criar valor para nossos clientes.
            </p>
          </div>
          
          <div className="text-center p-8">
            <div className="w-16 h-16 bg-unir-medium-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-unir-dark-blue mb-4">Comunidade</h3>
            <p className="text-muted-foreground">
              Acreditamos no poder da colaboração e no impacto positivo que podemos gerar juntos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;