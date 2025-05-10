
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Team from "@/components/home/Team";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import VideoSection from "@/components/home/VideoSection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Chatbot from "@/components/shared/Chatbot";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        
        {/* Core Values Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto">
            <div className="section-heading">
              <h2>Our Core Values</h2>
              <p>The principles that guide our work and relationships</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
              <div className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="bg-blue-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-feliceon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-feliceon-darkblue mb-2">Integrity</h3>
                <p className="text-feliceon-gray">We conduct our business with the highest ethical standards and transparency.</p>
              </div>
              
              <div className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="bg-blue-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-feliceon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-feliceon-darkblue mb-2">Innovation</h3>
                <p className="text-feliceon-gray">We continuously seek new and better ways to serve our clients and solve problems.</p>
              </div>
              
              <div className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="bg-blue-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-feliceon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-feliceon-darkblue mb-2">Collaboration</h3>
                <p className="text-feliceon-gray">We work closely with our clients and each other to achieve shared goals.</p>
              </div>
              
              <div className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="bg-blue-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-feliceon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-feliceon-darkblue mb-2">Excellence</h3>
                <p className="text-feliceon-gray">We strive for the highest quality in everything we do, from code to customer service.</p>
              </div>
            </div>
          </div>
        </section>
        
        <Team />
        <WhyChooseUs />
        <VideoSection />
        
        {/* Call to Action Section */}
        <section className="section-padding bg-blue-50">
          <div className="container mx-auto">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl font-bold text-feliceon-darkblue mb-4">Ready to Transform Your Business?</h2>
                  <p className="text-feliceon-gray mb-8">
                    Schedule a consultation with our experts to discover how our technology solutions can help you achieve your goals.
                  </p>
                  <div className="space-x-4">
                    <Button asChild>
                      <Link to="/contact">Request Consultation</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/services">View Services</Link>
                    </Button>
                  </div>
                </div>
                <div className="bg-feliceon-blue h-full flex items-center justify-center p-8 md:p-12">
                  <div className="text-white">
                    <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
                    <div className="space-y-4">
                      <p className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        +62 123 4567 890
                      </p>
                      <p className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        info@feliceon.com
                      </p>
                    </div>
                  </div>
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

export default Index;
