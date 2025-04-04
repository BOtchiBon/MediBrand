import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-soft-blue-500 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Medi<span className="text-medical-teal-400">Brand</span></h3>
            <p className="text-white/80 mb-4">
              Solutions digitales sur mesure pour les professionnels de santé.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-medical-teal-400 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-medical-teal-400 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-instagram"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-medical-teal-400 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a></li>
              <li><a href="#process" className="text-white/80 hover:text-white transition-colors">Notre Processus</a></li>
              <li><a href="#pricing" className="text-white/80 hover:text-white transition-colors">Tarifs</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Nos Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Création de Sites Web</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">SEO Médical</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Contenu Médical</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Identité Visuelle</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Référencement Local</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span className="text-white/80">123 Rue de la Santé, 75000 Paris, France</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} />
                <span className="text-white/80">+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} />
                <span className="text-white/80">contact@mediboost.fr</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-white/20 mb-6" />
        
        <div className="text-center text-white/60 text-sm">
          <p>&copy; {currentYear} MediBrand. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
