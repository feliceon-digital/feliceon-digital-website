
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Chatbot from "@/components/shared/Chatbot";

const Privacy = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-12 md:py-16 bg-blue-50">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-feliceon-darkblue mb-4">
                Privacy Policy
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
                At Feliceon Digital Solusi, we respect your privacy and are committed to protecting your personal data. This Privacy Policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>

              <h2>2. Data We Collect</h2>
              <p>
                We may collect, use, store, and transfer different kinds of personal data about you, including:
              </p>
              <ul>
                <li>Identity Data: includes first name, last name, username or similar identifier.</li>
                <li>Contact Data: includes billing address, delivery address, email address, and telephone numbers.</li>
                <li>Technical Data: includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
                <li>Usage Data: includes information about how you use our website and services.</li>
              </ul>

              <h2>3. How We Use Your Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul>
                <li>To provide and maintain our services.</li>
                <li>To notify you about changes to our services.</li>
                <li>To provide customer care and support.</li>
                <li>To provide analysis or valuable information so that we can improve our services.</li>
                <li>To monitor the usage of our services.</li>
                <li>To detect, prevent and address technical issues.</li>
              </ul>

              <h2>4. Data Security</h2>
              <p>
                We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed.
              </p>

              <h2>5. Cookie Policy</h2>
              <p>
                Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
              </p>

              <h2>6. Your Legal Rights</h2>
              <p>
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, or to object to processing.
              </p>

              <h2>7. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>

              <h2>8. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at info@feliceon.com.
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

export default Privacy;
