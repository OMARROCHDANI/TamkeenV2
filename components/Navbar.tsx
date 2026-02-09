
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Lock scroll when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuItems = [
    { name: 'Work', href: '#work' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Studio', href: '#studio' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${scrolled ? 'bg-background/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-10'}`}>
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          <a href="#" className="heading-luxury text-3xl md:text-4xl font-bold tracking-tighter text-primary z-[110]">
            tamkeen<span className="text-cta">.</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-10">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[10px] uppercase tracking-[0.4em] font-medium text-bodyText hover:text-cta transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-8 py-4 bg-primary text-background text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-cta transition-all transform hover:-translate-y-1 rounded-sm shadow-xl shadow-primary/5"
            >
              Start Project
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-primary hover:text-cta transition-colors p-2 z-[110]"
            aria-label="Open Menu"
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Fully Opaque */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-primary z-[999] flex flex-col justify-between p-8 md:p-12 overflow-hidden"
          >
            {/* Background Accent Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-5">
              <span className="heading-luxury text-[30vw] text-white whitespace-nowrap">TAMKEEN</span>
            </div>

            {/* Top Bar inside Menu */}
            <div className="flex justify-between items-center relative z-10">
              <span className="heading-luxury text-3xl font-bold text-background">
                tamkeen<span className="text-cta">.</span>
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-background hover:text-cta transition-colors p-2"
                aria-label="Close Menu"
              >
                <X className="w-10 h-10" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col items-center space-y-8 text-center relative z-10">
              {menuItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="heading-luxury text-5xl md:text-8xl text-background hover:text-cta transition-colors tracking-tight"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Footer Area inside Menu */}
            <div className="flex flex-col items-center space-y-8 relative z-10 pb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="w-full max-w-xs"
              >
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-6 bg-cta text-primary text-center uppercase tracking-[0.3em] text-xs font-bold hover:bg-background transition-all duration-500 block rounded-sm shadow-2xl"
                >
                  Start Project
                </a>
              </motion.div>
              <div className="text-background/40 text-[9px] md:text-[11px] tracking-[0.5em] uppercase text-center border-t border-white/10 pt-8 w-full">
                Ethical Digital Excellence &bull; Built with Ihsan
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
