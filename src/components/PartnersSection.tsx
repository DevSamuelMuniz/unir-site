const PartnersSection = () => {
  const techs = [
    "React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL",
    "Supabase", "Tailwind", "AWS", "Vercel", "React Native", "Figma",
  ];

  // Duplicate for seamless marquee
  const items = [...techs, ...techs];

  return (
    <section className="py-20 bg-background border-y border-border overflow-hidden">
      <div className="container mx-auto px-6 mb-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <span className="section-label">
            <span className="w-1.5 h-1.5 rounded-full bg-unir-vibrant-blue" />
            Parceiros & Tecnologias
          </span>
          <p className="text-muted-foreground max-w-md">
            Trabalhamos com as tecnologias líderes do mercado para entregar soluções de ponta.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex marquee whitespace-nowrap">
          {items.map((t, i) => (
            <div
              key={i}
              className="flex items-center px-10 display-text text-4xl md:text-6xl font-bold text-unir-dark-blue/20 hover:text-unir-vibrant-blue transition-smooth shrink-0"
            >
              {t}
              <span className="ml-10 w-2 h-2 rounded-full bg-unir-vibrant-blue/40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
