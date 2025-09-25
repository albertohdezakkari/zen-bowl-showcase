import ProductCard from "./ProductCard";
import bowl1 from "@/assets/bowl-1.jpg";
import bowl2 from "@/assets/bowl-2.jpg";
import bowl3 from "@/assets/bowl-3.jpg";

interface ProductsProps {
  language: "es" | "en";
}

const Products = ({ language }: ProductsProps) => {
  const translations = {
    es: {
      title: "Nuestros Productos",
      subtitle: "Descubre nuestra cuidadosa selección de bowls elegantes y funcionales",
      products: [
        {
          name: "Bowl Elegance Verde",
          description: "Bowl cerámico con acabado mate y interior esmaltado en verde suave",
          badges: ["Food grade", "Microwave safe", "Dishwasher safe"],
        },
        {
          name: "Set Bowl Minimalista",
          description: "Conjunto de dos bowls en tonos neutros, perfectos para el día a día",
          badges: ["Oven safe", "Food grade", "Stackable"],
        },
        {
          name: "Bowl Collection Colorida",
          description: "Bowls vibrantes que aportan personalidad a cualquier mesa",
          badges: ["Microwave safe", "Food grade", "Ceramic"],
        },
      ],
    },
    en: {
      title: "Our Products",
      subtitle: "Discover our carefully curated selection of elegant and functional bowls",
      products: [
        {
          name: "Elegance Green Bowl",
          description: "Ceramic bowl with matte finish and soft green glazed interior",
          badges: ["Food grade", "Microwave safe", "Dishwasher safe"],
        },
        {
          name: "Minimalist Bowl Set",
          description: "Set of two bowls in neutral tones, perfect for everyday use",
          badges: ["Oven safe", "Food grade", "Stackable"],
        },
        {
          name: "Colorful Bowl Collection",
          description: "Vibrant bowls that bring personality to any table",
          badges: ["Microwave safe", "Food grade", "Ceramic"],
        },
      ],
    },
  };

  const t = translations[language];
  const productImages = [bowl1, bowl2, bowl3];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">{t.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price="$20.99"
              originalPrice={index === 0 ? "$24.99" : undefined}
              image={productImages[index]}
              badges={product.badges}
              description={product.description}
              language={language}
            />
          ))}
        </div>

        {/* Special Offer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
            <span className="text-sm font-medium">
              {language === "es" 
                ? "Oferta especial de fin de semana: 15% de descuento" 
                : "Special weekend offer: 15% off"
              }
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;