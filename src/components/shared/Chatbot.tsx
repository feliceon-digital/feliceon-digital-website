
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
    
    if (normalizedMessage.includes("services") || normalizedMessage.includes("offer")) {
      return "We offer IT consulting, software development, cybersecurity solutions, and security assessments. Would you like more specific information about any of these services?";
    } else if (normalizedMessage.includes("contact") || normalizedMessage.includes("reach")) {
      return "You can reach us by phone at +62 123 4567 890, by email at info@feliceon.com, or by filling out the contact form on our website.";
    } else if (normalizedMessage.includes("price") || normalizedMessage.includes("cost")) {
      return "Our pricing varies based on project requirements and scope. For a detailed quote, please reach out through our contact form, and our team will get back to you promptly.";
    } else if (normalizedMessage.includes("location") || normalizedMessage.includes("address")) {
      return "Our office is located at Jl. Technology Park No. 123, Jakarta, Indonesia.";
    } else if (normalizedMessage.includes("hello") || normalizedMessage.includes("hi")) {
      return "Hello! How can I assist you with Feliceon's services today?";
    } else {
      return "Thank you for your message. Would you like information about our services, pricing, or how to contact us?";
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
