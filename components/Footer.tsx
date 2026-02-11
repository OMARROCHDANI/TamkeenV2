
import React from 'react';
import { Instagram, Linkedin, Globe, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-background pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-accent/20 pb-24">
          <div className="max-w-md mb-12 md:mb-0">
            <h2 className="heading-luxury text-6xl font-bold mb-8">tamkeen<span className="text-cta">.</span></h2>
            <p className="text-accent font-light text-lg leading-relaxed">
              An ethical design boutique crafting digital legacies. Aligned with values, driven by excellence.
            </p>
          </div>

          <div className="flex gap-8">
            <a href="#" className="hover:text-cta transition-colors duration-300"><Instagram className="w-6 h-6" /></a>
            <a href="#" className="hover:text-cta transition-colors duration-300"><Linkedin className="w-6 h-6" /></a>
            <a href="#" className="hover:text-cta transition-colors duration-300"><Globe className="w-6 h-6" /></a>
            <a href="mailto:hello@tamkeen.design" className="hover:text-cta transition-colors duration-300"><Mail className="w-6 h-6" /></a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-accent text-xs uppercase tracking-widest gap-8">
          <div className="flex gap-12">
            <a href="#" className="hover:text-background transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors duration-300">Ethical Guidelines</a>
          </div>
          <p>© {new Date().getFullYear()} Tamkeen Design Agency. Built with Ihsan.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
