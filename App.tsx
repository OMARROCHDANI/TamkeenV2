
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, ArrowRight, Instagram, Linkedin, Globe } from 'lucide-react';
import Navbar from './components/Navbar';
import HalideTopHero from './components/ui/halide-topo-hero';
import FoundingStage from './components/FoundingStage';
import WhatWeDo from './components/WhatWeDo';
import Method from './components/Method';
import Values from './components/Values';
import WhoWeWorkWith from './components/WhoWeWorkWith';
import HorizontalGallery from './components/HorizontalGallery';
import WhyTamkeen from './components/WhyTamkeen';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InfiniteGallery from './components/InfiniteGallery';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen selection:bg-cta selection:text-white">
      {/* 3D Gallery Overlay */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200]"
          >
            <InfiniteGallery onClose={() => setIsGalleryOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-cta z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />


      <main>
        <HalideTopHero onOpenGallery={() => setIsGalleryOpen(true)} />

        <FoundingStage />

        <WhatWeDo />

        <Method />

        <Values />

        <WhoWeWorkWith />

        <section id="work" className="py-32 bg-background border-t border-accent/10">
          <div className="container mx-auto px-6 mb-16">
            <span className="accent-text text-xl md:text-2xl text-accent block mb-4 italic">Select Work</span>
            <h2 className="heading-luxury text-4xl md:text-6xl text-primary max-w-2xl mb-6">
              Concept & prototype projects <span className="text-cta">clearly marked.</span>
            </h2>
          </div>
          <HorizontalGallery />
        </section>

        <WhyTamkeen />

        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
