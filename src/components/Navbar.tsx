
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-heading font-bold text-soft-blue-500">Medi<span className="text-medical-teal-500">Brand</span></span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-foreground hover:text-medical-teal-500 transition-colors">Services</a>
          <a href="#process" className="text-foreground hover:text-medical-teal-500 transition-colors">Processus</a>
          <a href="#pricing" className="text-foreground hover:text-medical-teal-500 transition-colors">Tarifs</a>
          <a href="#faq" className="text-foreground hover:text-medical-teal-500 transition-colors">FAQ</a>
          <Button asChild variant="default" className="ml-4 bg-medical-teal-500 hover:bg-medical-teal-400">
            <a href="#contact">Contactez-nous</a>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg py-4 px-6">
          <nav className="flex flex-col space-y-4">
            <a href="#services" className="text-foreground hover:text-medical-teal-500 transition-colors" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#process" className="text-foreground hover:text-medical-teal-500 transition-colors" onClick={() => setIsOpen(false)}>Processus</a>
            <a href="#pricing" className="text-foreground hover:text-medical-teal-500 transition-colors" onClick={() => setIsOpen(false)}>Tarifs</a>
            <a href="#faq" className="text-foreground hover:text-medical-teal-500 transition-colors" onClick={() => setIsOpen(false)}>FAQ</a>
            <Button asChild variant="default" className="bg-medical-teal-500 hover:bg-medical-teal-400">
              <a href="#contact" onClick={() => setIsOpen(false)}>Contactez-nous</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
