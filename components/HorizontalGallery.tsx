
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { CASE_STUDIES } from '../constants';
import { ArrowRight } from 'lucide-react';

const HorizontalGallery: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Increased translation to -85% to ensure the full list is traversed
  const rawX = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);
  const x = useSpring(rawX, { stiffness: 60, damping: 25, restDelta: 0.001 });

  return (
    <div ref={targetRef} className="relative h-[550vh] bg-background">
      {/* 
          Sticky container: 
          - Increased padding to avoid navbar collision
          - Managed container height
      */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden pt-28 md:pt-36">
        <motion.div style={{ x }} className="flex gap-20 md:gap-40 px-6 md:px-32">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="group relative flex-shrink-0 w-[85vw] md:w-[55vw] lg:w-[50vw] flex flex-col"
            >
              {/* Image Container */}
              <div className="overflow-hidden h-[40vh] md:h-[50vh] w-full relative shadow-sm rounded-sm">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/5 transition-opacity group-hover:opacity-0" />
                <div className="absolute inset-0 border border-black/5 pointer-events-none" />
              </div>

              {/* Content Area */}
              <div className="pt-10 pb-12 flex flex-col">
                <div className="flex justify-between items-start gap-8">
                  <div className="flex-1">
                    <span className="accent-text text-xl md:text-2xl text-accent block mb-4 leading-none italic opacity-80">
                      {study.category}
                    </span>
                    <h3 className="heading-luxury text-4xl md:text-5xl lg:text-7xl text-primary mb-6 break-words tracking-tight">
                      {study.title}
                    </h3>
                  </div>
                  <button className="flex-shrink-0 w-14 h-14 md:w-20 md:h-20 rounded-full border border-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-all duration-300 ease-out mt-1 cursor-pointer">
                    <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
                  </button>
                </div>

                <p className="max-w-lg text-accent font-light text-base md:text-lg leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-200 transform translate-y-4 group-hover:translate-y-0">
                  {study.description}
                </p>
              </div>
            </div>
          ))}
          {/* Visual Buffer for smooth exit */}
          <div className="w-[40vw] flex-shrink-0" />
        </motion.div>
      </div>
    </div>
  );
};

export default HorizontalGallery;
