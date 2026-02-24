import React from 'react';
import { motion } from 'framer-motion';

const WhoWeWorkWith: React.FC = () => {
    const categories = [
        "Muslim entrepreneurs",
        "Halal businesses",
        "Ethical startups",
        "Modest fashion brands",
        "Coaches & educators"
    ];

    return (
        <section className="py-32 bg-primary text-background overflow-hidden relative border-t border-accent/10">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] md:h-[600px] rounded-sm overflow-hidden order-2 md:order-1"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800"
                            className="w-full h-full object-cover grayscale brightness-75"
                            alt="Ethical businesses"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="order-1 md:order-2"
                    >
                        <span className="accent-text text-xl md:text-2xl text-cta block mb-6 italic">Who We Work With</span>
                        <ul className="space-y-6 mb-12">
                            {categories.map((category, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="text-3xl md:text-4xl heading-luxury text-background pb-4 border-b border-accent/20"
                                >
                                    {category}
                                </motion.li>
                            ))}
                        </ul>
                        <div className="bg-white/5 p-6 backdrop-blur-sm border-l-2 border-cta">
                            <p className="font-light text-xl md:text-2xl text-background">
                                If integrity defines your business — <span className="text-cta font-medium">we align.</span>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeWorkWith;
