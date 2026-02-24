import React from 'react';
import { motion } from 'framer-motion';

const FoundingStage: React.FC = () => {
    return (
        <section id="founding-stage" className="py-32 bg-primary text-background overflow-hidden relative">
            <div className="container mx-auto px-6 text-center max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <span className="accent-text text-xl md:text-2xl text-cta block mb-6 italic font-playfair">Founding Stage</span>
                    <h2 className="heading-luxury text-4xl md:text-6xl mb-8 leading-tight">
                        This is the beginning.
                    </h2>
                    <p className="font-light text-accent text-xl md:text-2xl leading-relaxed mb-12 max-w-2xl mx-auto">
                        A limited number of value-driven brands will shape the foundation of Tamkeen.
                    </p>
                    <div className="inline-block border border-cta/30 px-8 py-4 bg-white/5 backdrop-blur-sm">
                        <p className="font-light text-background text-lg md:text-xl">
                            If you are building for authority — not attention — we are aligned.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FoundingStage;
