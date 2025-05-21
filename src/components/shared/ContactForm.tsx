
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface ContactFormProps {
  defaultSubject?: string;
}

const ContactForm = ({ defaultSubject = "" }: ContactFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: defaultSubject,
    message: "",
    captcha: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaCode, setCaptchaCode] = useState("");

  // Update subject when defaultSubject prop changes
  useEffect(() => {
    setFormData(prevData => ({
      ...prevData,
      subject: defaultSubject
    }));
  }, [defaultSubject]);

  // Generate a random CAPTCHA code when the component mounts
  useEffect(() => {
    generateCaptcha();
  }, []);

  // Function to generate a random CAPTCHA code
  const generateCaptcha = () => {
    const characters = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let result = "";
    for (let i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setCaptchaCode(result);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Check if CAPTCHA is correct
    if (formData.captcha.toUpperCase() !== captchaCode) {
      toast({
        title: "CAPTCHA Error",
        description: "The CAPTCHA code you entered is incorrect. Please try again.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Create a mailto link with the form data
      const mailtoLink = `mailto:contact@feliceon-digital.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      // Open the email client
      window.location.href = mailtoLink;
      
      toast({
        title: "Email client opened!",
        description: "Please send the email from your email client to complete your inquiry."
      });
      
      // Reset form and generate new CAPTCHA
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        captcha: ""
      });
      generateCaptcha();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem opening your email client. Please try again.",
        variant: "destructive"
      });
      console.error("Error opening email client:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Your Name
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email Address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">
          Subject
        </label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="How can we help you?"
          required
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe how we can assist you..."
          rows={5}
          required
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="captcha" className="text-sm font-medium">
          CAPTCHA Verification
        </label>
        <div className="flex items-center space-x-4">
          <div className="bg-gray-100 p-3 rounded text-sm font-medium">
            CAPTCHA: {captchaCode}
          </div>
          <Input
            id="captcha"
            name="captcha"
            value={formData.captcha}
            onChange={handleChange}
            placeholder="Enter code"
            required
            className="max-w-[150px]"
          />
        </div>
      </div>
      
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
