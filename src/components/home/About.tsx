
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="section-padding bg-blue-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-feliceon-darkblue mb-4">
              About Feliceon Digital Solusi
            </h2>
            <p className="text-feliceon-gray mb-6">
              Feliceon Digital Solusi is a leading technology solutions provider specializing in IT consultation, custom software development, and cybersecurity services. We help businesses of all sizes harness the power of technology to achieve their goals.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-feliceon-blue mb-3">Our Vision</h3>
              <p className="text-feliceon-gray">
                To be the most trusted technology partner enabling businesses to thrive in the digital age through innovative and secure solutions.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-feliceon-blue mb-3">Our Mission</h3>
              <p className="text-feliceon-gray">
                To deliver excellent technology services that create real value for our clients, foster innovation, and maintain the highest standards of security and integrity.
              </p>
            </div>

            <Button asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-feliceon-blue/20 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-feliceon-blue/15 rounded-full"></div>
            
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80" 
                  alt="Team collaboration" 
                  className="rounded-lg shadow-lg h-40 object-cover w-full"
                />
                <img 
                  src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&q=80" 
                  alt="Technology solutions" 
                  className="rounded-lg shadow-lg h-64 object-cover w-full"
                />
              </div>
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80" 
                  alt="Secure technology" 
                  className="rounded-lg shadow-lg h-64 object-cover w-full"
                />
                <img 
                  src="https://images.unsplash.com/photo-1563461661481-0fbe71b2e381?auto=format&fit=crop&q=80" 
                  alt="Innovation" 
                  className="rounded-lg shadow-lg h-40 object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
