import React from 'react';
import { motion } from 'framer-motion';

const phases = [
    {
        id: "01",
        title: "Qualification",
        subtitle: "Not every project is a fit. We assess:",
        items: [
            "Alignment with Islamic values",
            "Budget and seriousness",
            "Business maturity",
            "Strategic clarity"
        ],
        footer: "We build selectively."
    },
    {
        id: "02",
        title: "Discovery",
        subtitle: "Before design, we understand:",
        items: [
            "Your business model",
            "Market position",
            "Competitors",
            "Target audience",
            "Core challenges",
            "Revenue logic"
        ],
        footer: "Clarity before creativity."
    },
    {
        id: "03",
        title: "Strategic Research",
        subtitle: "We go deeper than surface-level answers.",
        items: [
            "Competitor deep scans",
            "UX benchmarking",
            "Hidden problem discovery",
            "Opportunity mapping",
            "Trust-gap analysis"
        ],
        footer: "We uncover what others miss."
    },
    {
        id: "04",
        title: "Design Foundations",
        subtitle: "Strategy becomes visual direction.",
        items: [
            "Moodboards",
            "Style systems",
            "Typography & spacing logic",
            "Motion direction",
            "Brand tone refinement"
        ],
        footer: "Every visual decision supports positioning."
    },
    {
        id: "05",
        title: "Structured Implementation",
        subtitle: "We build with precision.",
        items: [
            "Clean architecture",
            "Performance optimization",
            "Accessibility standards",
            "SEO structure",
            "Scalable components"
        ],
        footer: "No shortcuts. No fragile builds."
    },
    {
        id: "06",
        title: "Validation & Empowerment",
        subtitle: "We test thoroughly.",
        items: [
            "Cross-browser checks",
            "Performance audits",
            "UX validation",
            "CMS training"
        ],
        footer: "Your business should not depend on us forever.\nTamkeen means empowerment."
    }
];

const Method: React.FC = () => {
    return (
        <section id="method" className="py-32 bg-background border-t border-accent/10">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-24 md:w-2/3">
                    <span className="accent-text text-xl md:text-2xl text-accent block mb-6">Our Method</span>
                    <h2 className="heading-luxury text-5xl md:text-7xl text-primary mb-8 leading-tight">
                        Every project follows a <br />
                        <span className="text-cta">disciplined framework</span>.
                    </h2>
                </div>

                <div className="space-y-16 lg:space-y-24">
                    {phases.map((phase, index) => (
                        <motion.div
                            key={phase.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 border-t border-accent/20 pt-8 md:pt-16"
                        >
                            <div className="md:col-span-4 lg:col-span-3">
                                <span className="text-sm uppercase tracking-widest text-accent/60 mb-4 block">Phase {phase.id}</span>
                                <h3 className="text-3xl md:text-4xl heading-luxury text-primary">
                                    {phase.title}
                                </h3>
                            </div>

                            <div className="md:col-span-8 lg:col-span-9 grid grid-cols-1 lg:grid-cols-2 gap-12">
                                <div className="space-y-6">
                                    <p className="text-xl font-medium text-primary/80">
                                        {phase.subtitle}
                                    </p>
                                    <ul className="space-y-4">
                                        {phase.items.map((item, i) => (
                                            <li key={i} className="flex gap-4 text-accent text-lg font-light items-start">
                                                <span className="w-1.5 h-1.5 bg-cta mt-2.5 flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="lg:border-l lg:border-accent/10 lg:pl-12 flex items-start">
                                    <p className="font-medium text-primary italic font-playfair text-xl md:text-2xl leading-relaxed whitespace-pre-line">
                                        {phase.footer}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Method;
