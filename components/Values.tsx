
import React from 'react';
import { motion } from 'framer-motion';
import { VALUES } from '../constants';

const Values: React.FC = () => {
  return (
    <section id="philosophy" className="py-32 bg-background border-t border-accent/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <span className="accent-text text-2xl text-accent block mb-6">Our Principles</span>
          <h2 className="heading-luxury text-5xl md:text-7xl text-primary mb-8">
            The Ethical Framework of Design
          </h2>
          <p className="text-xl text-accent font-light leading-relaxed">
            In a world of noise and exploitation, we choose silence, dignity, and purpose. Our work is guided by four pillars that ensure every pixel serves a higher meaning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {VALUES.map((value, idx) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 border border-accent/5 hover:border-cta/30 transition-colors group bg-white/50"
            >
              <div className="mb-6 transform transition-transform group-hover:scale-110 duration-300">
                {value.icon}
              </div>
              <h4 className="heading-luxury text-2xl mb-4 text-primary">{value.title}</h4>
              <p className="text-accent font-light leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
