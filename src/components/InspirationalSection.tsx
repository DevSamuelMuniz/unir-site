import { Heart, ArrowRight } from "lucide-react";

const InspirationalSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="w-20 h-20 bg-unir-vibrant-blue rounded-full flex items-center justify-center mx-auto mb-8">
            <Heart className="w-10 h-10 text-white" />
          </div>
          
          <blockquote className="text-3xl md:text-4xl font-bold text-unir-dark-blue mb-8 leading-relaxed">
            "Nada é tão pequeno se feito com amor."
          </blockquote>
          
          <div className="flex items-center justify-center mb-8">
            <ArrowRight className="w-8 h-8 text-unir-vibrant-blue mx-4" />
          </div>
          
          <p className="text-2xl md:text-3xl font-semibold text-unir-dark-blue leading-relaxed">
            Ao darmos o primeiro passo, você nunca mais estará no mesmo lugar.
          </p>
          
          <div className="mt-12 p-6 bg-unir-dark-blue/5 backdrop-blur-sm rounded-2xl">
            <p className="text-lg text-unir-dark-blue/80 italic">
              Cada projeto é uma oportunidade de crescimento e transformação. 
              Começamos pequeno, mas sonhamos grande, sempre com amor e dedicação.
            </p>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-unir-medium-blue/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-unir-vibrant-blue/20 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-unir-vibrant-blue/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default InspirationalSection;