
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-white to-blue-50 overflow-hidden">
      <div className="container mx-auto relative">
        {/* Decorative Element */}
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
          <div className="flex flex-col items-start animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-feliceon-darkblue mb-4">
              Transforming Business Through <span className="text-feliceon-blue">Technology</span>
            </h1>
            <p className="text-lg md:text-xl text-feliceon-gray mb-8 max-w-md">
              Expert solutions in IT consultation, software development, and cybersecurity to power your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-feliceon-blue rounded-full opacity-10"></div>
            <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-feliceon-blue rounded-full opacity-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80" 
              alt="IT professionals working on technology solutions" 
              className="rounded-lg shadow-xl w-full object-cover h-[400px] md:h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
