
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Chatbot from "@/components/shared/Chatbot";

const Terms = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-12 md:py-16 bg-blue-50">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-feliceon-darkblue mb-4">
                Terms of Service
              </h1>
              <p className="text-xl text-feliceon-gray">
                Last updated: May 10, 2025
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2>1. Introduction</h2>
              <p>
                Welcome to Feliceon Digital Solusi. These Terms of Service govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>

              <h2>2. Services</h2>
              <p>
                Feliceon Digital Solusi provides IT and technology consultation, software development, cybersecurity solutions, and security assessment services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
              </p>

              <h2>3. User Responsibilities</h2>
              <p>
                Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account. You agree to provide accurate information and to update it as necessary.
              </p>

              <h2>4. Intellectual Property</h2>
              <p>
                All content, features, and functionality on the Feliceon Digital Solusi website, including but not limited to text, graphics, logos, and code, are the exclusive property of Feliceon Digital Solusi and are protected by copyright, trademark, and other intellectual property laws.
              </p>

              <h2>5. Privacy Policy</h2>
              <p>
                Your use of our services is also governed by our Privacy Policy, which is incorporated into these Terms by reference.
              </p>

              <h2>6. Limitation of Liability</h2>
              <p>
                Feliceon Digital Solusi shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of, or inability to access or use, the services or any content provided on or through the services.
              </p>

              <h2>7. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of Indonesia, without regard to its conflict of law provisions.
              </p>

              <h2>8. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting on this page, with an updated effective date.
              </p>

              <h2>9. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at info@feliceon.com.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </>
  );
};

export default Terms;
