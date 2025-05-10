
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Chatbot from "@/components/shared/Chatbot";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: "it-consultation",
      title: "IT & Technology Consultation",
      description: "Strategic guidance to align technology with your business objectives",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80",
      features: [
        "Technology strategy development",
        "Digital transformation roadmaps",
        "IT infrastructure assessment",
        "Cloud migration planning",
        "Technology stack optimization"
      ]
    },
    {
      id: "software-development",
      title: "Software Development",
      description: "Custom software solutions designed for your unique business needs",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80",
      features: [
        "Web application development",
        "Mobile app development",
        "Enterprise software solutions",
        "API development and integration",
        "UI/UX design and implementation"
      ]
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity Solutions",
      description: "Comprehensive protection for your digital assets and infrastructure",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80",
      features: [
        "Security infrastructure implementation",
        "Threat monitoring and prevention",
        "Data encryption solutions",
        "Security policy development",
        "Employee security training"
      ]
    },
    {
      id: "security-assessment",
      title: "Security Assessment",
      description: "Identify vulnerabilities before they can be exploited",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
      features: [
        "Penetration testing",
        "Vulnerability assessments",
        "Security audits",
        "Code reviews",
        "Compliance testing"
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-12 md:py-16 bg-blue-50">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-feliceon-darkblue mb-4">
                Our Services
              </h1>
              <p className="text-xl text-feliceon-gray">
                Comprehensive technology solutions tailored to your business needs
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto">
            {services.map((service, index) => (
              <div 
                id={service.id}
                key={service.id} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index !== services.length - 1 ? "mb-24" : ""
                }`}
              >
                <div className={`order-2 ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
                  <h2 className="text-3xl font-bold text-feliceon-darkblue mb-4">
                    {service.title}
                  </h2>
                  <p className="text-feliceon-gray mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-feliceon-blue mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild>
                    <Link to="/contact">Request Service</Link>
                  </Button>
                </div>
                <div className={`relative order-1 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="absolute -top-4 -right-4 w-32 h-32 bg-feliceon-blue/10 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-feliceon-blue/15 rounded-full"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="rounded-lg shadow-lg relative z-10 w-full h-[300px] object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-padding bg-feliceon-darkblue text-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to elevate your technology?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Contact us today to discuss your project requirements.
              </p>
              <Button 
                size="lg" 
                asChild
                className="bg-white text-feliceon-blue hover:bg-blue-50"
              >
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </>
  );
};

export default Services;
