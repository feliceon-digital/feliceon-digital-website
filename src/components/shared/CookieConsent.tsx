
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie, Check, X } from "lucide-react";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check localStorage to see if user has already set cookie preferences
    const cookieConsent = localStorage.getItem("cookie-consent");
    if (!cookieConsent) {
      // If no preference is stored, show the banner
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-200 shadow-lg md:flex md:items-center md:justify-between">
      <div className="flex items-center mb-4 md:mb-0">
        <Cookie className="h-6 w-6 text-feliceon-blue mr-2" />
        <p className="text-sm text-gray-700 md:mr-8">
          We use cookies to enhance your experience on our website. By continuing to browse, you consent to our use of cookies.
          <a href="/privacy" className="text-feliceon-blue hover:underline ml-1">
            Learn more
          </a>
        </p>
      </div>
      <div className="flex space-x-2">
        <Button
          variant="outline"
          className="text-xs px-3 py-1 h-8"
          onClick={declineCookies}
        >
          <X className="mr-1 h-4 w-4" />
          Decline
        </Button>
        <Button
          className="text-xs px-3 py-1 h-8 bg-feliceon-blue hover:bg-feliceon-darkblue"
          onClick={acceptCookies}
        >
          <Check className="mr-1 h-4 w-4" />
          Accept All Cookies
        </Button>
      </div>
    </div>
  );
};

export default CookieConsent;
