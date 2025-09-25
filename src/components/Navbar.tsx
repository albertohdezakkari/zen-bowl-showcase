import { useState } from "react";
import { Globe, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  language: "es" | "en";
  onLanguageChange: (lang: "es" | "en") => void;
}

const Navbar = ({ language, onLanguageChange }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const translations = {
    es: {
      home: "Inicio",
      products: "Productos",
      collections: "Colecciones",
      cta: "Comprar Ahora",
    },
    en: {
      home: "Home",
      products: "Products",
      collections: "Collections",
      cta: "Shop Now",
    },
  };

  const t = translations[language];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border transition-smooth">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-primary-foreground rounded-full"></div>
            </div>
            <span className="text-xl font-bold text-foreground">Bowl</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-smooth font-medium">
              {t.home}
            </a>
            <a href="#products" className="text-foreground hover:text-primary transition-smooth font-medium">
              {t.products}
            </a>
            <a href="#collections" className="text-foreground hover:text-primary transition-smooth font-medium">
              {t.collections}
            </a>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <button
                onClick={() => onLanguageChange(language === "es" ? "en" : "es")}
                className="text-sm text-foreground hover:text-primary transition-smooth font-medium"
              >
                {language.toUpperCase()}
              </button>
            </div>

            {/* CTA Button */}
            <Button variant="hero" size="default" className="shadow-elegant">
              <ShoppingCart className="w-4 h-4" />
              {t.cta}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;