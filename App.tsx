
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, ArrowRight, Instagram, Linkedin, Globe } from 'lucide-react';
import Navbar from './components/Navbar';
import HalideTopHero from './components/ui/halide-topo-hero';
import HorizontalGallery from './components/HorizontalGallery';
import Values from './components/Values';
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

        <section id="work" className="py-24 bg-background">
          <div className="container mx-auto px-6 mb-12">
            <span className="accent-text text-2xl text-accent block mb-4">Case Studies</span>
            <h2 className="heading-luxury text-5xl md:text-7xl text-primary max-w-2xl">
              Digital Artifacts of Purpose
            </h2>
          </div>
          <HorizontalGallery />
        </section>

        <Values />

        <section className="py-32 bg-primary text-background overflow-hidden relative">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="heading-luxury text-4xl md:text-6xl mb-8 leading-tight">
                Crafting interfaces that honor the <span className="text-cta accent-text">human soul</span>.
              </h3>
              <p className="font-light text-accent text-lg md:text-xl max-w-md leading-relaxed">
                We don't just build websites. We build digital homes that are ethical by design, beautiful by nature, and powerful by function.
              </p>
            </motion.div>
            <div className="relative h-[400px] md:h-[600px]">
              <motion.img
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                src="https://picsum.photos/seed/ethic/800/1200"
                className="w-full h-full object-cover grayscale brightness-75 rounded-sm"
                alt="Ethical design"
              />
              <div className="absolute -bottom-8 -left-8 bg-cta text-primary p-8 hidden md:block">
                <p className="font-bold text-2xl heading-luxury italic">Aligned with Value</p>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
