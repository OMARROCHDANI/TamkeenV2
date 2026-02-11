import React, { useRef } from 'react';
import { CASE_STUDIES } from '../constants';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const HorizontalGallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !sliderRef.current) return;

    const cases = gsap.utils.toArray('.case-study-card');
    const totalPanels = cases.length;

    // Calculate the total width of the slider content
    // We want to scroll until the end of the last item is visible
    const getScrollAmount = () => {
      if (!sliderRef.current || !containerRef.current) return 0;
      return -(sliderRef.current.scrollWidth - window.innerWidth);
    };

    const tween = gsap.to(sliderRef.current, {
      x: getScrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        start: "center center",
        end: () => `+=${sliderRef.current!.scrollWidth}`,
        scrub: 1,
        invalidateOnRefresh: true,
      }
    });

    return () => {
      tween.kill();
    };
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative h-screen bg-background overflow-hidden">
      <div
        ref={sliderRef}
        className="flex gap-10 md:gap-20 px-6 md:px-20 h-full items-center w-max"
      >
        <div className="w-[10vw] flex-shrink-0" /> {/* Initial spacer */}

        {CASE_STUDIES.map((study, index) => (
          <div
            key={study.id}
            className="case-study-card group relative flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] flex flex-col justify-center translate-y-8"
          >
            {/* Image Container */}
            <div className="overflow-hidden h-[45vh] md:h-[60vh] w-full relative shadow-sm rounded-sm">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/5 transition-opacity group-hover:opacity-0" />
              <div className="absolute inset-0 border border-black/5 pointer-events-none" />
            </div>

            {/* Content Area */}
            <div className="pt-8 pb-4 flex flex-col">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <span className="accent-text text-xl md:text-2xl text-accent block mb-2 leading-none italic opacity-80">
                    {study.category}
                  </span>
                  <h3 className="heading-luxury text-3xl md:text-5xl lg:text-6xl text-primary mb-4 break-words tracking-tight">
                    {study.title}
                  </h3>
                </div>
                <button className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full border border-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-all duration-300 ease-out mt-1 cursor-pointer">
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>

              <p className="max-w-lg text-accent font-light text-base md:text-lg leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {study.description}
              </p>
            </div>

            {/* Number indicator */}
            <span className="absolute -top-12 left-0 text-[8rem] leading-none font-bold text-primary/5 pointer-events-none select-none">
              {(index + 1).toString().padStart(2, '0')}
            </span>
          </div>
        ))}

        {/* End spacer for comfortable scroll finish */}
        <div className="w-[10vw] flex-shrink-0" />
      </div>
    </div>
  );
};

export default HorizontalGallery;
