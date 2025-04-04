
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const EbookSection = () => {
  const { toast } = useToast();
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Champ obligatoire",
        description: "Veuillez entrer votre email pour télécharger l'ebook.",
        variant: "destructive",
      });
      return;
    }
    
    // Normally would send this to an API
    toast({
      title: "Merci !",
      description: "L'ebook a été envoyé à votre adresse email.",
    });
    
    setEmail('');
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-soft-blue-100 to-soft-blue-200 rounded-2xl p-6 md:p-10 lg:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3 space-y-6">
              <h2 className="heading-lg text-soft-blue-500 mb-4">
                5 Étapes pour Améliorer la Visibilité de Votre Cabinet Médical
              </h2>
              <p className="text-foreground/80 text-lg max-w-2xl">
                Ce guide vous accompagnera à travers cinq étapes simples pour améliorer votre visibilité en ligne et attirer plus de patients.
              </p>
              
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 pt-2 max-w-md">
                <Input 
                  type="email"
                  placeholder="Votre email"
                  className="flex-grow"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button 
                  type="submit" 
                  className="bg-medical-teal-500 hover:bg-medical-teal-400"
                >
                  <Download size={18} className="mr-2" />
                  Télécharger gratuitement
                </Button>
              </form>
              
              <p className="text-xs text-foreground/60">
                En soumettant ce formulaire, vous acceptez de recevoir des emails de MediBoost. 
                Vous pourrez vous désabonner à tout moment.
              </p>
            </div>
            
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-soft-blue-300 to-medical-teal-400 rounded-2xl blur opacity-30"></div>
                <img 
                  src="https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                  alt="Ebook: 5 Étapes pour Améliorer la Visibilité de Votre Cabinet Médical" 
                  className="relative rounded-2xl w-full shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EbookSection;
