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
                      <p className="text-feliceon-gray">+62 123 4567 890</p>
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
                        Jl. Technology Park No. 123<br />
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
                  {/* Replace with actual map embed */}
                  <div className="bg-blue-100 h-full w-full flex items-center justify-center">
                    <p className="text-center p-4">
                      Map location will be displayed here.<br />
                      Replace with Google Maps or other map integration.
                    </p>
                  </div>
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