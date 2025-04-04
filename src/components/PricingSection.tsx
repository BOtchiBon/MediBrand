
import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { toast } from 'sonner';

interface PlanFeature {
  text: string;
  available: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  popular?: boolean;
  buttonText: string;
  buttonVariant: 'outline' | 'default';
}

const PricingSection = () => {
  const plans: PricingPlan[] = [
    {
      name: 'Standard',
      price: '0dt/mois',
      description: 'L\'essentiel pour démarrer votre présence en ligne.',
      features: [
        { text: 'Site internet', available: true },
        { text: 'Support technique', available: true },
        { text: 'SEO & Visibilité Google', available: true },
        { text: 'Création d\'identité visuelle', available: false },
        { text: 'Hébergement sécurisé', available: false },
        { text: '100 cartes de visite offertes', available: false },
        { text: 'Shooting photo annuel', available: false },
      ],
      buttonText: 'Commencer gratuitement',
      buttonVariant: 'outline',
    },
    {
      name: 'Professionnel',
      price: '150dt/mois',
      description: 'Solution complète pour les professionnels de santé.',
      features: [
        { text: 'Site internet', available: true },
        { text: 'Support technique', available: true },
        { text: 'SEO & Visibilité Google', available: true },
        { text: 'Création d\'identité visuelle', available: true },
        { text: 'Hébergement sécurisé', available: true },
        { text: '100 cartes de visite offertes', available: true },
        { text: 'Shooting photo annuel', available: true },
      ],
      popular: true,
      buttonText: 'Choisir ce forfait',
      buttonVariant: 'default',
    },
    {
      name: 'Booster votre business',
      price: '299dt/mois',
      description: 'Pour les professionnels qui visent l\'excellence.',
      features: [
        { text: 'Site internet', available: true },
        { text: 'Support technique', available: true },
        { text: 'SEO & Visibilité Google', available: true },
        { text: 'Création d\'identité visuelle', available: true },
        { text: 'Hébergement sécurisé', available: true },
        { text: '100 cartes de visite offertes', available: true },
        { text: 'Shooting photo annuel', available: true },
        { text: 'Stratégie Marketing', available: true },
        { text: 'CRM personnalisé', available: true },
        { text: 'Publicité Facebook & Instagram', available: true },
        { text: 'Création de contenu', available: true },
        { text: 'Expérience patient (PX)', available: true },
      ],
      buttonText: 'Contacter un conseiller',
      buttonVariant: 'outline',
    },
  ];

  const handlePlanSelect = (plan: string) => {
    toast.success(`Vous avez sélectionné le forfait ${plan}`, {
      description: "Notre équipe vous contactera sous peu pour plus de détails.",
    });
  };

  return (
    <section id="pricing" className="section-padding bg-soft-beige-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="heading-lg mb-4">Nos <span className="text-medical-teal-500">Forfaits</span></h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Des solutions adaptées à tous les budgets pour vous accompagner dans le développement de votre activité.
          </p>
        </div>

        <div className="bg-medical-teal-400/20 text-medical-teal-500 font-medium text-center py-3 px-4 rounded-lg mb-10 max-w-3xl mx-auto">
          🎉 Offre Spéciale Aïd – 3000dt -50%, Tout pour seulement 1500dt
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden flex flex-col ${
                plan.popular ? 'border-medical-teal-500 shadow-xl shadow-medical-teal-500/10' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-medical-teal-500 text-white text-xs font-medium px-3 py-1 rounded-bl-lg">
                    Plus populaire
                  </div>
                </div>
              )}
              
              <CardHeader>
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                </div>
                <p className="text-sm text-foreground/70 mt-2">
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className={`flex items-start gap-2 ${
                        !feature.available ? 'text-foreground/40' : ''
                      }`}
                    >
                      <Check 
                        size={18} 
                        className={`min-w-[18px] mt-0.5 ${
                          feature.available ? 'text-medical-teal-500' : 'text-foreground/40'
                        }`} 
                      />
                      <span className="text-sm">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="pt-4">
                <Button 
                  variant={plan.buttonVariant}
                  className={`w-full ${
                    plan.buttonVariant === 'default' 
                      ? 'bg-medical-teal-500 hover:bg-medical-teal-400' 
                      : 'border-medical-teal-500 text-medical-teal-500 hover:bg-medical-teal-500/10'
                  }`}
                  onClick={() => handlePlanSelect(plan.name)}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
