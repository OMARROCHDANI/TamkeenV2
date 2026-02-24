import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const WhatWeDo: React.FC = () => {
    const items = [
        "Position your brand clearly",
        "Attract the right clients",
        "Strengthen trust",
        "Support long-term growth",
        "Protect your integrity"
    ];

    return (
        <section id="what-we-do" className="py-32 bg-background border-t border-accent/10">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="accent-text text-xl md:text-2xl text-accent block mb-6">What We Really Do</span>
                        <h2 className="heading-luxury text-5xl md:text-7xl text-primary mb-8 leading-tight">
                            We do not <br />"just design websites."
                        </h2>
                        <p className="font-light text-accent text-xl leading-relaxed mb-8">
                            We engineer digital systems that:
                        </p>
                        <ul className="space-y-4 mb-12">
                            {items.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-4 text-primary text-lg"
                                >
                                    <span className="w-1.5 h-1.5 bg-cta mt-2.5 flex-shrink-0" />
                                    <span className="font-light">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                        <div className="border-l-4 border-cta pl-6 py-2">
                            <p className="font-medium text-primary text-2xl font-playfair italic">
                                A website is strategy translated into structure.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[500px] md:h-[700px] rounded-sm overflow-hidden"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
                            className="w-full h-full object-cover grayscale contrast-125 brightness-75"
                            alt="Architecture structure"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
