
import React, { useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

const testimonialsData = [
  {
    name: "Giana Kenter",
    title: "Founder, Mobile Dynamics Startup",
    content: "MediBoost a transformé notre présence en ligne. Notre nouveau site web a permis d'augmenter le nombre de rendez-vous de 40% en seulement deux mois.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5
  },
  {
    name: "Sienna Hewitt",
    title: "CEO, Tech Innovations",
    content: "L'équipe de MediBoost comprend parfaitement les enjeux du secteur médical. Leur expertise en matière de contenu médical est sans égale.",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5
  },
  {
    name: "Dr. Hatem Jouini",
    title: "Radiologist",
    content: "Grâce à MediBoost, mes patients peuvent désormais prendre rendez-vous en ligne et accéder à des informations claires sur les examens. Un vrai gain de temps pour mon équipe.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5
  },
  {
    name: "Ahmed Yassine",
    title: "CEO, Truggl",
    content: "Le processus de création a été fluide et professionnel. MediBoost a su répondre à toutes nos attentes et même anticiper certains besoins.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 4
  },
  {
    name: "Nouha Sghaier",
    title: "CEO, HPCS",
    content: "L'impact sur notre visibilité locale a été immédiat. Nous sommes maintenant parmi les premiers résultats de recherche dans notre région.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonialsData[0] }) => {
  return (
    <Card className="border-none shadow-lg">
      <CardContent className="p-6">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={i < testimonial.rating ? "fill-medical-teal-500 text-medical-teal-500" : "text-gray-300"} 
            />
          ))}
        </div>
        <p className="text-foreground/80 italic mb-6">"{testimonial.content}"</p>
        <div className="flex items-center gap-4">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name} 
            className="w-12 h-12 rounded-full object-cover" 
          />
          <div>
            <h4 className="font-medium">{testimonial.name}</h4>
            <p className="text-sm text-foreground/60">{testimonial.title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Approuvé par les <span className="text-medical-teal-500">professionnels</span></h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Découvrez ce que disent nos clients de notre approche et de nos résultats.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonialsData.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 px-2">
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
