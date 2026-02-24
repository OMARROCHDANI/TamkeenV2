import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';

const WhyTamkeen: React.FC = () => {
    const benefits = [
        "Strengthens credibility",
        "Clarifies value",
        "Supports revenue",
        "Protects reputation"
    ];

    return (
        <section id="why-tamkeen" className="py-32 bg-primary text-background overflow-hidden relative">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <span className="accent-text text-xl md:text-2xl text-cta block mb-6 italic">Why Tamkeen</span>
                    <h3 className="heading-luxury text-4xl md:text-6xl mb-8 leading-tight">
                        Many websites are decoration.<br />
                        We build <span className="text-cta">digital infrastructure</span>.
                    </h3>
                    <p className="font-light text-accent text-lg md:text-2xl mb-8">
                        Infrastructure that:
                    </p>
                    <ul className="space-y-4 mb-12">
                        {benefits.map((benefit, idx) => (
                            <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-4 text-background text-xl font-light"
                            >
                                <span className="w-1.5 h-1.5 bg-cta mt-2.5 flex-shrink-0" />
                                <span>{benefit}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                <div className="relative h-[500px] md:h-[700px]">
                    <motion.img
                        initial={{ opacity: 0, scale: 1.1 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}
                        src="https://images.unsplash.com/photo-1502003148287-a82ef80a6abc?auto=format&fit=crop&q=80&w=800"
                        className="w-full h-full object-cover grayscale brightness-75 rounded-sm"
                        alt="Engineering digital infrastructure"
                    />
                    <div className="absolute -bottom-8 -left-8 bg-cta text-primary p-8 hidden md:block">
                        <p className="font-bold text-2xl heading-luxury italic pr-8">Authority is engineered — not improvised.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyTamkeen;
