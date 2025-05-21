
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const TiktokIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
    <path d="M16 8v8" />
    <path d="M12 16v-8" />
    <path d="M19 12c-3 0-6-2-6-5a3 3 0 0 1 3-3h3v16" />
  </svg>;

const Footer = () => {
  const handleCookieSettings = () => {
    // Remove the cookie consent from localStorage to show the banner again
    localStorage.removeItem("cookie-consent");
    
    // Force a page reload to re-render the CookieConsent component
    window.location.reload();
  };

  return <footer className="bg-feliceon-darkblue text-white">
      <div className="container mx-auto pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">PT Feliceon Digital Solusi</h3>
            <p className="mb-4 text-gray-300">
              Leading IT and technology consultation, software development, and
              cybersecurity solutions provider.
            </p>
            <div className="flex space-x-3">
              <a href="https://instagram.com/feliceon.digital" className="text-white hover:text-feliceon-lightblue transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.tiktok.com/feliceon.digital" className="text-white hover:text-feliceon-lightblue transition-colors" aria-label="TikTok">
                <TiktokIcon />
              </a>
              <a href="https://linkedin.com/company/feliceon-digital-solusi" className="text-white hover:text-feliceon-lightblue transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#it-consultation" className="text-gray-300 hover:text-white transition-colors">
                  IT Consultation
                </Link>
              </li>
              <li>
                <Link to="/services#software-development" className="text-gray-300 hover:text-white transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link to="/services#cybersecurity" className="text-gray-300 hover:text-white transition-colors">
                  Cybersecurity Solutions
                </Link>
              </li>
              <li>
                <Link to="/services#security-assessment" className="text-gray-300 hover:text-white transition-colors">
                  Security Assessment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-feliceon-lightblue" />
                <span className="text-gray-300">+62 817128123</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-feliceon-lightblue" />
                <span className="text-gray-300">contact@feliceon-digital.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-feliceon-lightblue" />
                <span className="text-gray-300">Skynindo Building, Jl Susilo Raya, Grogol Jakarta Barat DKI Jakarta</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Feliceon Digital Solusi. All rights reserved.
            </p>
            <div className="flex mt-4 md:mt-0 space-x-6">
              <Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <button 
                className="text-sm text-gray-400 hover:text-white transition-colors"
                onClick={handleCookieSettings}
              >
                Cookie Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};

export default Footer;
