
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQSection = () => {
  const faqItems = [
    {
      question: "Combien de temps faut-il pour créer un site web médical ?",
      answer: "Le délai moyen de création d'un site web médical est de 3 à 4 semaines. Ce délai comprend la phase de conception, de développement et de tests. Pour des projets plus complexes nécessitant des fonctionnalités spécifiques, le délai peut être légèrement plus long."
    },
    {
      question: "Comment garantissez-vous la conformité aux normes de santé ?",
      answer: "Nous assurons la conformité aux normes RGPD et aux réglementations spécifiques au secteur de la santé. Notre équipe est formée aux exigences particulières concernant la protection des données des patients et la communication médicale. Tous nos sites respectent les directives des ordres professionnels."
    },
    {
      question: "Est-ce que je peux gérer moi-même le contenu de mon site ?",
      answer: "Absolument ! Tous nos sites sont développés avec un système de gestion de contenu intuitif qui vous permet de modifier vos textes, d'ajouter des actualités ou de mettre à jour vos horaires facilement. Nous proposons également une formation personnalisée pour vous familiariser avec cet outil."
    },
    {
      question: "Proposez-vous un service de maintenance après la mise en ligne ?",
      answer: "Oui, nous offrons plusieurs formules de maintenance pour garantir la sécurité, les mises à jour et le bon fonctionnement de votre site web. Cela inclut également un support technique réactif pour répondre à vos questions ou résoudre d'éventuels problèmes."
    },
    {
      question: "Qu'est-ce que le SEO médical et pourquoi est-ce important ?",
      answer: "Le SEO (Search Engine Optimization) médical est l'ensemble des techniques visant à améliorer la visibilité de votre site web dans les résultats des moteurs de recherche pour des requêtes liées à votre spécialité médicale et à votre zone géographique. C'est crucial car plus de 70% des patients recherchent des informations médicales et des professionnels de santé en ligne avant de prendre rendez-vous."
    },
  ];

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Questions <span className="text-medical-teal-500">Fréquentes</span></h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Nous répondons à vos interrogations concernant nos services et notre processus de travail.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border rounded-lg px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-medium py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-foreground/70">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-8 pt-4">
            <p className="text-foreground/70">
              Vous avez d'autres questions ? N'hésitez pas à nous contacter.
            </p>
            <a 
              href="#contact" 
              className="inline-block mt-4 text-medical-teal-500 font-medium hover:underline"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
