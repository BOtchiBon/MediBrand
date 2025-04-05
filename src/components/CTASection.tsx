
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const CTASection = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-soft-blue-400 to-medical-teal-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Prêt à améliorer votre présence digitale ?
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/90">
          Contactez-nous dès aujourd'hui pour un accompagnement sur-mesure !
        </p>
        <Button 
          size="lg" 
          className="bg-white text-medical-teal-500 hover:bg-white/90 hover:text-medical-teal-500/90 font-medium text-lg px-8 py-6 mb-12"
          asChild
        >
          <a href="https://tally.so/r/wbvGRE" target="_blank" rel="noopener noreferrer">
            <Calendar className="mr-2" size={20} />
            Planifiez une consultation gratuite
          </a>
        </Button>
        
        <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl mx-auto">
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/mohamedaminnouar/pret-a-ameliorer-votre-presence-digitale?hide_event_type_details=1" 
            style={{ minWidth: '320px', height: '700px' }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
