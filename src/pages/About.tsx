
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Chatbot from "@/components/shared/Chatbot";

const About = () => {
  return <>
      <Navbar />
      <main className="pt-20">
        <section className="py-12 md:py-16 bg-blue-50">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-feliceon-darkblue mb-4">
                About Feliceon Digital Solusi
              </h1>
              <p className="text-xl text-feliceon-gray">Delivering innovative technology solutions since 2024</p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-feliceon-darkblue mb-6">Our Story</h2>
                <p className="text-feliceon-gray mb-4">Feliceon Digital Solusi was founded in 2024 with a vision to help businesses harness the power of technology for growth and innovation. Starting as a small team of passionate technologists, we have grown into a comprehensive digital solutions provider trusted by clients across industries.</p>
                <p className="text-feliceon-gray mb-4">
                  Our journey began with offering basic IT consultation services, but we quickly expanded our expertise to software development, cybersecurity, and technology infrastructure as we recognized the evolving needs of the digital landscape.
                </p>
                <p className="text-feliceon-gray">Today, Feliceon Digital Solusi is recognized as a company in providing end-to-end technology solutions that drive business value and competitive advantage for our clients.</p>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-feliceon-blue/10 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-feliceon-blue/15 rounded-full"></div>
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" alt="Feliceon team meeting" className="rounded-lg shadow-lg relative z-10 w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white" id="vision-mission">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-feliceon-darkblue mb-4">Our Vision</h2>
                <p className="text-feliceon-gray">
                  To be the most trusted technology partner enabling businesses to thrive in the digital age through innovative and secure solutions.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-feliceon-darkblue mb-4">Our Mission</h2>
                <p className="text-feliceon-gray">
                  To deliver excellent technology services that create real value for our clients, foster innovation, and maintain the highest standards of security and integrity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team section removed */}
      </main>
      <Footer />
      <Chatbot />
    </>;
};
export default About;
