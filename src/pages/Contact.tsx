
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/shared/ContactForm";
import Chatbot from "@/components/shared/Chatbot";
import { Mail, Phone, MapPin } from "lucide-react";
const Contact = () => {
  return <>
      <Navbar />
      <main className="pt-20">
        <section className="py-12 md:py-16 bg-blue-50">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-feliceon-darkblue mb-4">
                Contact Us
              </h1>
              <p className="text-xl text-feliceon-gray">
                Get in touch with our team to discuss your technology needs
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-feliceon-darkblue mb-6">Send Us a Message</h2>
                <p className="text-feliceon-gray mb-8">
                  Fill out the form below and our team will get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-feliceon-darkblue mb-6">Contact Information</h2>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-blue-50 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-feliceon-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-feliceon-darkblue mb-1">Phone</h3>
                      <p className="text-feliceon-gray">+62 817128123</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-50 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-feliceon-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-feliceon-darkblue mb-1">Email</h3>
                      <p className="text-feliceon-gray">contact@feliceon-digital.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-50 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-feliceon-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-feliceon-darkblue mb-1">Office Location</h3>
                      <p className="text-feliceon-gray">
                        Skynindo Building, Jl. Susilo Rays Grogol<br />
                        Jakarta, Indonesia
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-feliceon-darkblue mb-6">Office Hours</h2>
                <div className="space-y-2 mb-8">
                  <div className="flex justify-between">
                    <span className="text-feliceon-gray">Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-feliceon-gray">Saturday:</span>
                    <span className="font-medium">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-feliceon-gray">Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>

                <div className="rounded-lg overflow-hidden h-64 w-full">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6600540307336!2d106.78101899999999!3d-6.1789196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7c9c40114e9%3A0x3df05ba560775c66!2sSkynindo!5e0!3m2!1sen!2sid!4v1715565896207!5m2!1sen!2sid" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Feliceon Digital Solusi Office Location"
                    aria-label="Map showing Feliceon Digital Solusi Office Location"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </>;
};
export default Contact;
