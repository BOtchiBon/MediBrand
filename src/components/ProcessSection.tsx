
import React from 'react';
import { Search, Palette, Code, Rocket } from 'lucide-react';

const ProcessStep = ({ 
  icon, 
  title, 
  description, 
  stepNumber 
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  stepNumber: number 
}) => {
  return (
    <div className="relative">
      <div className="flex items-center gap-4 md:gap-6">
        <div className="flex-shrink-0 bg-soft-blue-200 text-soft-blue-500 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg">
          {icon}
        </div>
        
        <div>
          <div className="text-sm font-medium text-medical-teal-500 mb-1">Étape {stepNumber}</div>
          <h3 className="font-heading font-semibold text-lg md:text-xl">{title}</h3>
          <p className="mt-2 text-foreground/70">{description}</p>
        </div>
      </div>
      
      {stepNumber < 4 && (
        <div className="absolute left-6 md:left-8 top-16 md:top-20 bottom-0 w-0.5 bg-soft-blue-200 hidden md:block"></div>
      )}
    </div>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      icon: <Search size={24} />,
      title: "Analyse & Stratégie",
      description: "Comprendre vos besoins et ceux de vos patients pour établir une stratégie digitale adaptée."
    },
    {
      icon: <Palette size={24} />,
      title: "Conception & Design",
      description: "Créer une expérience visuelle impactante qui véhicule votre image professionnelle."
    },
    {
      icon: <Code size={24} />,
      title: "Développement & Intégration",
      description: "Développement du site avec intégration rapide et sécurisée des fonctionnalités spécifiques."
    },
    {
      icon: <Rocket size={24} />,
      title: "Lancement & Optimisation",
      description: "Assurer la performance et l'évolution continue de votre présence en ligne."
    }
  ];

  return (
    <section id="process" className="section-padding bg-soft-beige-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Notre <span className="text-medical-teal-500">Processus</span></h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Une méthodologie éprouvée pour garantir un résultat qui répond à vos attentes et aux besoins de vos patients.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-12 md:space-y-16">
          {steps.map((step, index) => (
            <ProcessStep 
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              stepNumber={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
