
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Chatbot from "@/components/shared/Chatbot";
import ProductCard from "@/components/shared/ProductCard";

const Products = () => {
  const securityProducts = [
    {
      name: "SecureGuard Basic",
      price: "$499",
      description: "Essential security protection for small businesses",
      features: [
        { feature: "Threat monitoring", included: true },
        { feature: "Firewall protection", included: true },
        { feature: "Weekly security reports", included: true },
        { feature: "Basic vulnerability scanning", included: true },
        { feature: "24/7 support", included: false },
        { feature: "Advanced threat intelligence", included: false },
      ]
    },
    {
      name: "SecureGuard Pro",
      price: "$999",
      description: "Advanced protection for growing organizations",
      features: [
        { feature: "Threat monitoring", included: true },
        { feature: "Firewall protection", included: true },
        { feature: "Daily security reports", included: true },
        { feature: "Advanced vulnerability scanning", included: true },
        { feature: "24/7 support", included: true },
        { feature: "Advanced threat intelligence", included: false },
      ],
      popular: true
    },
    {
      name: "SecureGuard Enterprise",
      price: "$1,999",
      description: "Complete security suite for large enterprises",
      features: [
        { feature: "Threat monitoring", included: true },
        { feature: "Firewall protection", included: true },
        { feature: "Real-time security reports", included: true },
        { feature: "Comprehensive vulnerability scanning", included: true },
        { feature: "24/7 premium support", included: true },
        { feature: "Advanced threat intelligence", included: true },
      ]
    }
  ];

  const developmentProducts = [
    {
      name: "DevStarter",
      price: "$2,999",
      description: "For small projects and MVP development",
      features: [
        { feature: "Basic requirements analysis", included: true },
        { feature: "Standard UI design", included: true },
        { feature: "Core functionality development", included: true },
        { feature: "Basic testing", included: true },
        { feature: "30-day support", included: true },
        { feature: "Advanced integrations", included: false },
      ]
    },
    {
      name: "DevPro",
      price: "$7,999",
      description: "For medium-sized business applications",
      features: [
        { feature: "Detailed requirements analysis", included: true },
        { feature: "Custom UI/UX design", included: true },
        { feature: "Full feature development", included: true },
        { feature: "Comprehensive testing", included: true },
        { feature: "90-day support", included: true },
        { feature: "Advanced integrations", included: true },
      ],
      popular: true
    },
    {
      name: "DevEnterprise",
      price: "Custom",
      description: "For complex, enterprise-level solutions",
      features: [
        { feature: "Enterprise architecture planning", included: true },
        { feature: "Premium UI/UX design", included: true },
        { feature: "Scalable system development", included: true },
        { feature: "Full QA and security testing", included: true },
        { feature: "1-year extended support", included: true },
        { feature: "Custom integrations & APIs", included: true },
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
                Our Products & Pricing
              </h1>
              <p className="text-xl text-feliceon-gray">
                Discover our range of technology solutions with transparent pricing
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto">
            <div className="section-heading">
              <h2>Cybersecurity Solutions</h2>
              <p>Protect your business with our comprehensive security packages</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              {securityProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  features={product.features}
                  popular={product.popular}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-blue-50">
          <div className="container mx-auto">
            <div className="section-heading">
              <h2>Software Development</h2>
              <p>Custom software solutions for businesses of all sizes</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              {developmentProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  features={product.features}
                  popular={product.popular}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container mx-auto">
            <div className="bg-feliceon-blue rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 md:p-12 text-white">
                  <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
                  <p className="mb-6">
                    Our team specializes in creating tailored solutions designed specifically for your unique business challenges. Contact us for a personalized consultation and quote.
                  </p>
                  <a 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-6 py-3 rounded-md font-medium bg-white text-feliceon-blue hover:bg-blue-50 transition-colors"
                  >
                    Request Custom Quote
                  </a>
                </div>
                <div className="bg-white p-8 md:p-12">
                  <h3 className="text-xl font-semibold text-feliceon-darkblue mb-4">Our Custom Solution Process</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-blue-50 text-feliceon-blue rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</span>
                      <span>Initial consultation to understand your needs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-50 text-feliceon-blue rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</span>
                      <span>Detailed proposal and project roadmap</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-50 text-feliceon-blue rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</span>
                      <span>Custom solution development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-50 text-feliceon-blue rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">4</span>
                      <span>Quality assurance and testing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-50 text-feliceon-blue rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">5</span>
                      <span>Implementation and ongoing support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </>
  );
};

export default Products;
