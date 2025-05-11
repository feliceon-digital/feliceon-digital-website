
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";

// Modified to accept a showTeam prop
const Team = ({ showTeam = true }: { showTeam?: boolean }) => {
  // If showTeam is false, don't render anything
  if (!showTeam) return null;

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
      social: {
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
      social: {
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      name: "Michael Rodriguez",
      role: "Security Specialist",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
      social: {
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      name: "Emily Zhang",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
      social: {
        linkedin: "#",
        instagram: "#"
      }
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="section-heading">
          <h2>Meet Our Team</h2>
          <p>Experienced professionals dedicated to your success</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden group border-0 shadow-md transition-all hover:shadow-lg">
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 flex space-x-2">
                    <a 
                      href={member.social.linkedin} 
                      className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-feliceon-blue/80 transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin size={18} className="text-white" />
                    </a>
                    <a 
                      href={member.social.instagram} 
                      className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-feliceon-blue/80 transition-colors"
                      aria-label={`${member.name}'s Instagram`}
                    >
                      <Instagram size={18} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg text-feliceon-darkblue">{member.name}</h3>
                <p className="text-feliceon-blue">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link 
            to="/about#team" 
            className="text-feliceon-blue hover:text-feliceon-darkblue font-medium transition-colors"
          >
            View Full Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;
