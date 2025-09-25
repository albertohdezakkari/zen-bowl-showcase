import { Eye, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  badges: string[];
  description: string;
  language: "es" | "en";
}

const ProductCard = ({ 
  name, 
  price, 
  originalPrice, 
  image, 
  badges, 
  description, 
  language 
}: ProductCardProps) => {
  const translations = {
    es: {
      viewDetails: "Ver Detalles",
      addToCart: "Añadir",
    },
    en: {
      viewDetails: "View Details",
      addToCart: "Add to Cart",
    },
  };

  const t = translations[language];

  return (
    <div className="group bg-card rounded-2xl shadow-soft hover:shadow-elegant transition-smooth overflow-hidden">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-neutral-50">
        <img
          src={image}
          alt={name}
          className="w-full h-80 object-cover group-hover:scale-105 transition-smooth"
        />
        {originalPrice && (
          <div className="absolute top-4 left-4">
            <Badge variant="destructive" className="bg-primary text-primary-foreground">
              15% OFF
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          {badges.map((badge, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {badge}
            </Badge>
          ))}
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-foreground">{price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">{originalPrice}</span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <Button variant="outline" size="default" className="flex-1">
            <Eye className="w-4 h-4" />
            {t.viewDetails}
          </Button>
          <Button variant="default" size="default">
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;