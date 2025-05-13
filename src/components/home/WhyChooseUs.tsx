
import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Expert Team",
      description: "Our specialists have deep expertise in the latest technologies and industry best practices."
    },
    {
      title: "Proven Track Record",
      description: "Our team have experience to delivered hundreds of projects for diverse clients across industries."
    },
    {
      title: "Comprehensive Solutions",
      description: "End-to-end services from consultation to development to ongoing maintenance."
    },
    {
      title: "Security-First Approach",
      description: "Security is built into every solution we create, not added as an afterthought."
    },
    {
      title: "Client-Centered Focus",
      description: "We prioritize understanding your unique needs to deliver tailored solutions."
    },
    {
      title: "Ongoing Support",
      description: "Our relationship doesn't end at delivery; we provide continuous technical support."
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-feliceon-darkblue to-feliceon-blue text-white">
      <div className="container mx-auto">
        <div className="section-heading">
          <h2 className="text-white">Why Choose Us</h2>
          <p className="text-blue-100">What makes Feliceon Digital Solusi your ideal technology partner</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle className="h-6 w-6 text-blue-200 mt-1 flex-shrink-0" />
              <div className="ml-4">
                <h3 className="font-semibold text-xl mb-2">{reason.title}</h3>
                <p className="text-blue-100">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">Ready to transform your business?</h3>
              <p className="text-blue-100">Let's discuss how we can help you achieve your goals.</p>
            </div>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-feliceon-blue rounded-md font-medium hover:bg-blue-50 transition-colors"
            >
              Request a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
