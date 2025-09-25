import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  language: "es" | "en";
}

const Footer = ({ language }: FooterProps) => {
  const translations = {
    es: {
      navigation: "Navegación",
      contact: "Contacto",
      followUs: "Síguenos",
      home: "Inicio",
      products: "Productos",
      collections: "Colecciones",
      email: "info@bowlcollection.com",
      phone: "+1 (555) 123-4567",
      address: "123 Design Street, Creative City",
      rights: "Todos los derechos reservados.",
    },
    en: {
      navigation: "Navigation",
      contact: "Contact",
      followUs: "Follow Us",
      home: "Home",
      products: "Products",
      collections: "Collections",
      email: "info@bowlcollection.com",
      phone: "+1 (555) 123-4567",
      address: "123 Design Street, Creative City",
      rights: "All rights reserved.",
    },
  };

  const t = translations[language];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-primary-foreground rounded-full"></div>
              </div>
              <span className="text-xl font-bold text-foreground">Bowl</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {language === "es" 
                ? "Colección elegante de bowls que combina estilo y funcionalidad para tu hogar."
                : "Elegant bowl collection that combines style and functionality for your home."
              }
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t.navigation}</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-muted-foreground hover:text-primary transition-smooth">
                {t.home}
              </a>
              <a href="#products" className="block text-muted-foreground hover:text-primary transition-smooth">
                {t.products}
              </a>
              <a href="#collections" className="block text-muted-foreground hover:text-primary transition-smooth">
                {t.collections}
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t.contact}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span className="text-sm">{t.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span className="text-sm">{t.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{t.address}</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t.followUs}</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Bowl Collection. {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;