
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MessageCircle, X, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Hello! I'm the Feliceon AI assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (inputMessage.trim() === "") return;

    const newUserMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputMessage("");

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage);
      const newBotMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newBotMessage]);
    }, 1000);
  };

  const getBotResponse = (message: string): string => {
    const normalizedMessage = message.toLowerCase();
    
    // Website services and offerings
    if (normalizedMessage.includes("services") || normalizedMessage.includes("offer")) {
      return "We offer a comprehensive range of IT services including software development, cybersecurity solutions, IT infrastructure management, cloud services, and digital transformation consulting. Our flagship products include FeliceShield for cybersecurity and FeliceCloud for cloud management. Would you like specific details about any of these services?";
    } 
    // Contact information 
    else if (normalizedMessage.includes("contact") || normalizedMessage.includes("reach") || normalizedMessage.includes("email") || normalizedMessage.includes("phone")) {
      return "You can reach us by phone at +62 817128123, by email at contact@feliceon-digital.com, or by filling out the contact form on our Contact page. Our office is located at Skynindo Building, Jl. Susilo Rays Grogol, Jakarta, Indonesia.";
    } 
    // Pricing information
    else if (normalizedMessage.includes("price") || normalizedMessage.includes("cost") || normalizedMessage.includes("fee")) {
      return "Our pricing varies based on project requirements and scope. We offer flexible pricing models including fixed-price contracts, time and materials, and retainer options. For a detailed quote customized to your needs, please reach out through our contact form, and our team will get back to you promptly.";
    } 
    // Office location and hours
    else if (normalizedMessage.includes("location") || normalizedMessage.includes("address") || normalizedMessage.includes("office")) {
      return "Our office is located at Skynindo Building, Jl. Susilo Rays Grogol, Jakarta, Indonesia. Our office hours are Monday to Friday from 9:00 AM to 6:00 PM, Saturday from 10:00 AM to 2:00 PM, and we're closed on Sundays.";
    } 
    // About the company
    else if (normalizedMessage.includes("about") || normalizedMessage.includes("company") || normalizedMessage.includes("feliceon")) {
      return "Feliceon Digital Solusi is a leading IT consulting and services provider based in Jakarta, Indonesia. We specialize in digital transformation, cybersecurity, and cloud solutions. Our team of experienced professionals is dedicated to helping businesses leverage technology to achieve their goals. Founded in 2015, we've successfully delivered over 200 projects for clients across Southeast Asia.";
    }
    // Products information
    else if (normalizedMessage.includes("product") || normalizedMessage.includes("feliceshield") || normalizedMessage.includes("felicecloud")) {
      return "Our flagship products include FeliceShield, a comprehensive cybersecurity solution that protects your business from digital threats, and FeliceCloud, our cloud management platform that helps businesses efficiently manage their cloud infrastructure. We also offer FeliceAnalytics for data analysis and FeliceConnect for seamless integration solutions. Would you like more details about any specific product?";
    }
    // Team information
    else if (normalizedMessage.includes("team") || normalizedMessage.includes("staff") || normalizedMessage.includes("expert")) {
      return "Our team consists of certified IT professionals with expertise in various domains including software development, cybersecurity, cloud services, and digital transformation. Our leadership team includes industry veterans with over 15 years of experience in the IT sector. We pride ourselves on continuous learning and staying updated with the latest technological advancements.";
    }
    // Security services
    else if (normalizedMessage.includes("security") || normalizedMessage.includes("protect") || normalizedMessage.includes("threat")) {
      return "We provide comprehensive cybersecurity services including security assessments, penetration testing, security monitoring, incident response, and security training. Our FeliceShield product offers real-time threat detection and protection against various cyber threats. We follow industry best practices and standards to ensure your digital assets remain secure.";
    }
    // Cloud services
    else if (normalizedMessage.includes("cloud") || normalizedMessage.includes("aws") || normalizedMessage.includes("azure") || normalizedMessage.includes("google cloud")) {
      return "We offer end-to-end cloud services including cloud migration, cloud infrastructure setup and management, cloud security, and cloud optimization. We have expertise in major cloud platforms including AWS, Microsoft Azure, and Google Cloud. Our FeliceCloud product helps businesses efficiently manage their multi-cloud environments.";
    }
    // Digital transformation
    else if (normalizedMessage.includes("digital transformation") || normalizedMessage.includes("digitize") || normalizedMessage.includes("modernize")) {
      return "Our digital transformation services help businesses modernize their operations through technology. We start with a thorough assessment of your current processes, identify areas for improvement, and implement solutions that drive efficiency and growth. Our approach focuses on people, processes, and technology to ensure successful digital transformation.";
    }
    // Web development
    else if (normalizedMessage.includes("web") || normalizedMessage.includes("website") || normalizedMessage.includes("app") || normalizedMessage.includes("application")) {
      return "We develop custom web applications and mobile apps tailored to your business needs. Our development process includes thorough planning, agile development, rigorous testing, and ongoing support. We use modern technologies like React, Angular, Node.js, and Flutter to create responsive, scalable, and secure applications.";
    }
    // CAPTCHA information
    else if (normalizedMessage.includes("captcha") || normalizedMessage.includes("verification") || normalizedMessage.includes("code")) {
      return "Our contact form includes a CAPTCHA verification to prevent spam submissions. The CAPTCHA code is randomly generated each time you load the page. Simply enter the displayed code to verify you're a human and submit your message. If you're having trouble with the CAPTCHA, you can contact us directly via email or phone.";
    }
    // Basic greetings
    else if (normalizedMessage.includes("hello") || normalizedMessage.includes("hi") || normalizedMessage.includes("hey")) {
      return "Hello! How can I assist you with Feliceon's services today? Would you like information about our IT services, products, or how to contact us?";
    }
    // Thank you responses
    else if (normalizedMessage.includes("thank") || normalizedMessage.includes("thanks")) {
      return "You're welcome! Is there anything else I can help you with today? Feel free to ask about our services, products, or how to get in touch with our team.";
    }
    // Fallback response
    else {
      return "Thank you for your message. Would you like information about our IT services, cybersecurity solutions, cloud services, digital transformation, or how to contact our team?";
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all",
          isOpen ? "bg-red-500 hover:bg-red-600" : "bg-feliceon-blue hover:bg-feliceon-darkblue"
        )}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </Button>

      {/* Chat Window */}
      <Card
        className={cn(
          "absolute bottom-20 right-0 w-[350px] md:w-[400px] shadow-2xl transition-all duration-300 overflow-hidden",
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        )}
      >
        <CardHeader className="bg-feliceon-blue p-4">
          <div className="flex items-center space-x-2 text-white">
            <div className="bg-white/20 p-1.5 rounded-full">
              <MessageCircle size={18} />
            </div>
            <div>
              <h3 className="font-medium">Feliceon AI Assistant</h3>
              <p className="text-xs opacity-80">Online | Typically replies instantly</p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          {/* Messages Container */}
          <div className="h-96 overflow-y-auto p-4 flex flex-col space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  "max-w-[80%] p-3 rounded-lg",
                  msg.sender === "user"
                    ? "bg-feliceon-blue text-white self-end rounded-br-none"
                    : "bg-gray-100 self-start rounded-bl-none"
                )}
              >
                <p className="text-sm">{msg.text}</p>
                <span className="text-xs opacity-80 mt-1 block">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="border-t p-3 flex items-center">
            <Input
              placeholder="Type your message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="rounded-full"
            />
            <Button
              type="submit"
              size="icon"
              className="ml-2 rounded-full bg-feliceon-blue hover:bg-feliceon-darkblue"
            >
              <Send size={18} />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Chatbot;
