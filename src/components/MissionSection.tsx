import { Target, Eye, Shield } from "lucide-react";

const MissionSection = () => {
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Missão",
      description:
        "Desenvolver soluções tecnológicas inovadoras que transformem negócios e vidas, sempre pautadas por valores cristãos e ética profissional.",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Visão",
      description:
        "Ser referência em tecnologia com propósito, reconhecida pela excelência técnica e pelo impacto positivo na sociedade.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Valores",
      description:
        "Fé, integridade, inovação, excelência, colaboração e responsabilidade social guiam todas as nossas decisões e ações.",
    },
  ];

  return (
    <section id="missao" className="py-32 dark-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-unir-electric/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-unir-vibrant-blue/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur text-xs font-semibold uppercase tracking-widest text-white/80 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-unir-electric" />
            Nosso propósito
          </span>
          <h2 className="display-text text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none">
            Tecnologia que serve.<br />
            <span className="text-white/40">Inovação que transforma.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-unir-dark-blue/80 backdrop-blur p-10 hover:bg-unir-vibrant-blue/30 transition-smooth group"
            >
              <div className="w-12 h-12 rounded-full bg-unir-electric/20 text-unir-electric flex items-center justify-center mb-6 group-hover:bg-unir-electric group-hover:text-white transition-smooth">
                {v.icon}
              </div>
              <h3 className="display-text text-3xl font-bold text-white mb-4">{v.title}</h3>
              <p className="text-white/70 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
