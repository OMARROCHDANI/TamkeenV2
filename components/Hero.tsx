
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-32 pb-16 md:pt-40">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f4f4f2] -z-10" />
      
      <div className="container mx-auto px-6 lg:px-12 relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
        <div className="w-full lg:w-3/5 z-10 text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="accent-text text-xl md:text-3xl text-accent mb-8 block font-light italic"
          >
            Digital Studio for the Principled
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="heading-luxury text-6xl md:text-8xl xl:text-9xl text-primary leading-[1.1] md:leading-[0.95] mb-10 lg:mb-14"
          >
            Ihsaan <br />
            <span className="text-cta italic font-normal">at</span> Scale
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-10"
          >
            <p className="max-w-xs font-light text-accent leading-relaxed text-sm md:text-base text-center lg:text-left">
              Crafting ethical digital experiences that honor Islamic values without compromising on world-class aesthetics.
            </p>
            <div className="h-14 w-[1px] bg-accent/20 hidden md:block" />
            <a
              href="#work"
              className="group flex items-center gap-6 text-primary font-bold uppercase tracking-[0.4em] text-[10px] hover:text-cta transition-colors"
            >
              <div className="flex flex-col items-start leading-tight">
                <span>Explore</span>
                <span>Our Work</span>
              </div>
              <motion.span
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-2xl font-light"
              >
                →
              </motion.span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-sm lg:w-2/5 aspect-[3/4] relative group"
        >
          <div className="absolute -inset-6 border border-cta/15 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-1000" />
          <img
            src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=800&h=1100"
            alt="Nature and Architecture"
            className="w-full h-full object-cover shadow-2xl relative z-10 rounded-sm"
          />
          <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-1000 z-20" />
        </motion.div>
      </div>

      {/* Floating Arabic Text Accent */}
      <div className="absolute bottom-[5%] left-[-5%] pointer-events-none z-0 overflow-hidden select-none">
        <p className="heading-luxury text-primary text-[8rem] md:text-[18rem] lg:text-[22rem] leading-none opacity-[0.03] whitespace-nowrap">
          تمكين
        </p>
      </div>
    </section>
  );
};

export default Hero;
