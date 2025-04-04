
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-soft-beige-100 to-soft-blue-100 pt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="heading-xl text-medical-teal-500">
              Nous aidons les professionnels de santé à atteindre leurs objectifs de carrière.
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-lg">
              Votre expertise médicale mérite une présence en ligne à sa hauteur !
            </p>
            <div className="pt-4">
              <Button size="lg" className="btn-primary text-lg" asChild>
                <a href="https://tally.so/r/wbvGRE" target="_blank" rel="noopener noreferrer">
                  Atteignez vos objectifs
                </a>
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-6">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-soft-blue-300 flex items-center justify-center text-white">J</div>
                <div className="w-8 h-8 rounded-full bg-medical-teal-400 flex items-center justify-center text-white">M</div>
                <div className="w-8 h-8 rounded-full bg-soft-blue-400 flex items-center justify-center text-white">S</div>
              </div>
              <p className="text-sm text-foreground/70">
                Rejoint par <span className="font-semibold">+100</span> professionnels de santé
              </p>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-soft-blue-300 to-medical-teal-400 rounded-2xl blur opacity-30"></div>
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                alt="Doctor browsing a medical website"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
