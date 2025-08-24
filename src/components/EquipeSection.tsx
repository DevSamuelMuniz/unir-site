

const EquipeSection = () => {
  const team = [
    {
      photo: "/images/samuel.png",
      name: "Samuel Muniz",
      role: "Co-CEO",
      description: "Lidera a estratégia e visão da empresa, focando em inovação e crescimento sustentável.",
    },
    {
      photo: "/images/eudes.png",
      name: "Eudes Jordão",
      role: "Co-CEO",
      description: "Responsável pelas operações e desenvolvimento de negócios, garantindo excelência em todos os projetos.",
    },
    {
      photo: "/images/melk.png",
      name: "Melksedek",
      role: "Analista de Sistemas",
      description: "Especialista em análise e desenvolvimento de sistemas, criando soluções tecnológicas eficientes.",
    },
  ];

  return (
    <section id="equipe" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-unir-dark-blue mb-6">
            Nossa <span className="text-unir-orange">Equipe</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça os profissionais experientes e dedicados que fazem a UNIR 
            uma empresa de excelência em tecnologia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-secondary/30 rounded-2xl p-6 shadow-card hover:shadow-elegant transition-smooth group text-center"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-6 mx-auto border-4 border-unir-vibrant-blue group-hover:border-unir-orange transition-smooth">
                <img 
                  src={member.photo} 
                  alt={`Foto de ${member.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-unir-dark-blue mb-2">
                {member.name}
              </h3>
              
              <p className="text-unir-orange font-medium mb-3">
                {member.role}
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipeSection;
