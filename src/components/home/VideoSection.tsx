
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const VideoSection = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="section-padding bg-feliceon-lightgray">
      <div className="container mx-auto">
        <div className="section-heading">
          <h2>See Us in Action</h2>
          <p>Watch how our solutions are transforming businesses</p>
        </div>

        <div className="mt-10 relative">
          <div className="relative rounded-xl overflow-hidden group cursor-pointer" onClick={() => setVideoOpen(true)}>
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all z-10 flex items-center justify-center">
              <Button 
                size="lg" 
                className="bg-white text-feliceon-blue hover:bg-white/90 hover:scale-105 transition-all rounded-full w-16 h-16 flex items-center justify-center"
                onClick={() => setVideoOpen(true)}
              >
                <Play size={24} className="ml-1" />
              </Button>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1581092436484-408b77ca3064?auto=format&fit=crop&q=80" 
              alt="Feliceon Digital Solusi company video" 
              className="w-full h-[400px] md:h-[500px] object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-feliceon-blue/10 rounded-full -z-10"></div>
          <div className="absolute -top-5 -left-5 w-32 h-32 bg-feliceon-blue/10 rounded-full -z-10"></div>
        </div>

        <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
          <DialogContent className="max-w-4xl p-0 bg-black">
            <div className="aspect-video w-full">
              {/* Replace with your actual video embed */}
              <div className="w-full h-full flex items-center justify-center text-white bg-feliceon-darkblue p-8 text-center">
                <div>
                  <p className="text-xl mb-4">Your company video will appear here.</p>
                  <p>Upload your video and update the source URL in this component.</p>
                </div>
              </div>
              {/* Actual video would be:
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
                title="Feliceon Digital Solusi Company Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe> */}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default VideoSection;
