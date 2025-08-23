import { Target, Eye, Shield } from "lucide-react";

const MissionSection = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Missão",
      description: "Desenvolver soluções tecnológicas inovadoras que transformem negócios e vidas, sempre pautados por valores cristãos e ética profissional.",
      color: "bg-unir-orange"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Visão",
      description: "Ser referência em tecnologia com propósito, reconhecida pela excelência técnica e pelo impacto positivo na sociedade.",
      color: "bg-unir-vibrant-blue"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Valores",
      description: "Fé, integridade, inovação, excelência, colaboração e responsabilidade social guiam todas as nossas decisões e ações.",
      color: "bg-unir-light-green"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-unir-dark-blue to-unir-medium-blue">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nosso <span className="text-unir-orange">Propósito</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Cada projeto que desenvolvemos carrega nossa essência: tecnologia que serve, 
            inova e transforma com base em valores sólidos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 transition-smooth shadow-elegant"
            >
              <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white`}>
                {value.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {value.title}
              </h3>
              <p className="text-white/90 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;