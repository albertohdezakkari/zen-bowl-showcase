import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import bowl1 from "@/assets/bowl-1.jpg";
import bowl2 from "@/assets/bowl-2.jpg";
import bowl3 from "@/assets/bowl-3.jpg";

interface CollectionsProps {
  language: "es" | "en";
}

const Collections = ({ language }: CollectionsProps) => {
  const translations = {
    es: {
      title: "Nuestras Colecciones",
      subtitle: "Explora nuestras colecciones temáticas diseñadas para diferentes estilos de vida",
      viewCollection: "Ver Colección",
      collections: [
        {
          name: "Minimalistas",
          description: "Líneas limpias y colores neutros para un estilo atemporal",
        },
        {
          name: "Clásicos",
          description: "Diseños tradicionales con un toque moderno y sofisticado",
        },
        {
          name: "Coloridos",
          description: "Tonos vibrantes que alegran cualquier mesa y ocasión",
        },
      ],
    },
    en: {
      title: "Our Collections",
      subtitle: "Explore our themed collections designed for different lifestyles",
      viewCollection: "View Collection",
      collections: [
        {
          name: "Minimalist",
          description: "Clean lines and neutral colors for a timeless style",
        },
        {
          name: "Classic",
          description: "Traditional designs with a modern and sophisticated touch",
        },
        {
          name: "Colorful",
          description: "Vibrant tones that brighten any table and occasion",
        },
      ],
    },
  };

  const t = translations[language];
  const collectionImages = [bowl1, bowl2, bowl3];

  return (
    <section id="collections" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">{t.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {t.collections.map((collection, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl shadow-soft hover:shadow-elegant transition-smooth overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={collectionImages[index]}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {collection.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {collection.description}
                  </p>
                </div>

                <Button variant="elegant" size="default" className="w-full group">
                  {t.viewCollection}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;