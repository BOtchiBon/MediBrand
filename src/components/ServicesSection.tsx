
import React from 'react';
import { Check } from 'lucide-react';

const ServiceCard = ({ title, description, benefits, image }: {
  title: string;
  description: string;
  benefits: string[];
  image: string;
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="mb-6 rounded-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-soft-blue-500">{title}</h3>
      <p className="text-foreground/70 mb-6">{description}</p>
      <div className="mt-auto">
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check size={18} className="min-w-[18px] text-medical-teal-500 mt-1" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Conception de Sites Web Médicaux",
      description: "Votre site web est la première impression que les patients ont de votre cabinet. Nous créons des sites professionnels adaptés aux établissements de santé.",
      benefits: [
        "Prise de rendez-vous en ligne",
        "Plateformes de téléconsultation",
        "Sécurisation des données patients",
        "SEO médical et référencement local"
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    },
    {
      title: "Mettre le patient au cœur de votre communication",
      description: "Un patient bien informé est plus serein et engagé dans son parcours de soins.",
      benefits: [
        "Infographies éducatives",
        "Animations interactives",
        "Schémas explicatifs"
      ],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    },
    {
      title: "Contenu médical de qualité",
      description: "Des communications claires et professionnelles qui renforcent votre crédibilité.",
      benefits: [
        "Audit & Diagnostic",
        "Identification des besoins",
        "Stratégie personnalisée"
      ],
      image: "/lovable-uploads/aa9d0454-7bf6-429a-975d-86bba95c656c.png"
    }
  ];

  return (
    <section id="services" className="section-padding bg-soft-beige-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Ce que nous offrons & <span className="text-medical-teal-500">Comment cela aide votre activité</span></h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Des solutions adaptées aux besoins spécifiques des professionnels de santé pour développer leur présence en ligne.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description} 
              benefits={service.benefits} 
              image={service.image} 
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://tally.so/r/wbvGRE" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block btn-primary"
          >
            Devis Gratuit
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
