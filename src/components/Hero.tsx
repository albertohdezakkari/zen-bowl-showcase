import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bowl.jpg";

interface HeroProps {
  language: "es" | "en";
}

const Hero = ({ language }: HeroProps) => {
  const translations = {
    es: {
      title: "Bowl Collection",
      subtitle: "Explora nuestra colección de bowls que combina estilo y practicidad, perfectos para cualquier mesa.",
      cta: "Explorar Colección",
    },
    en: {
      title: "Bowl Collection",
      subtitle: "Explore our bowl collection that combines style and practicality, perfect for any table.",
      cta: "Explore Collection",
    },
  };

  const t = translations[language];

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {t.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                {t.subtitle}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                {t.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img
                src={heroImage}
                alt="Elegant ceramic bowl collection"
                className="w-full h-[600px] object-cover transition-smooth hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;