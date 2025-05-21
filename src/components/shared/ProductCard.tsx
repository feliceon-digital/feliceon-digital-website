
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProductFeature {
  feature: string;
  included: boolean;
}

interface ProductCardProps {
  name: string;
  price: string;
  description: string;
  features: ProductFeature[];
  popular?: boolean;
}

const ProductCard = ({
  name,
  price,
  description,
  features,
  popular = false,
}: ProductCardProps) => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    // Navigate to the contact page with the product name as a query parameter
    navigate(`/contact?product=${encodeURIComponent(name)}`);
  };

  return (
    <Card className={`relative overflow-hidden ${
      popular ? "border-feliceon-blue shadow-lg" : "border-gray-200"
    } h-full flex flex-col`}>
      {popular && (
        <div className="absolute top-0 right-0">
          <div className="bg-feliceon-blue text-white text-xs font-medium px-3 py-1 rounded-bl-md">
            Popular
          </div>
        </div>
      )}
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-feliceon-darkblue">{name}</CardTitle>
        <div className="mt-1">
          <span className="text-3xl font-bold text-feliceon-blue">{price}</span>
          {price !== "Custom" && <span className="text-feliceon-gray ml-1">/month</span>}
        </div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle 
                className={`h-5 w-5 mr-2 mt-0.5 flex-shrink-0 ${
                  feature.included ? "text-feliceon-blue" : "text-gray-300"
                }`} 
              />
              <span className={feature.included ? "text-foreground" : "text-gray-400"}>
                {feature.feature}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          variant={popular ? "default" : "outline"} 
          className="w-full"
          onClick={handleGetStarted}
        >
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
