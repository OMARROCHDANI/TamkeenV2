
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('sent'), 2000);
  };

  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div>
            <span className="accent-text text-2xl text-accent block mb-6">Begin a Journey</span>
            <h2 className="heading-luxury text-6xl md:text-8xl text-primary mb-12">
              Let's build <br /> with <span className="text-cta">Ihsan</span>.
            </h2>
            
            <div className="space-y-8">
              <div>
                <h4 className="uppercase tracking-widest text-xs font-bold text-accent mb-2">Our Studio</h4>
                <p className="text-xl font-light text-primary">Dubai Design District, Building 4<br />Dubai, UAE</p>
              </div>
              <div>
                <h4 className="uppercase tracking-widest text-xs font-bold text-accent mb-2">Electronic Mail</h4>
                <p className="text-xl font-light text-primary hover:text-cta transition-colors">hello@tamkeen.design</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 shadow-xl border border-accent/5"
          >
            {formState === 'sent' ? (
              <div className="h-[400px] flex flex-col items-center justify-center text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 bg-cta rounded-full flex items-center justify-center mb-6 text-background"
                >
                  ✓
                </motion.div>
                <h3 className="heading-luxury text-3xl mb-4">Message Received</h3>
                <p className="text-accent font-light">We will review your inquiry with care and respond shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="space-y-2 relative">
                  <label className="text-xs uppercase tracking-[0.2em] text-accent">Full Name</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-transparent border-b border-accent/30 py-4 focus:border-cta outline-none transition-colors text-lg font-light"
                    placeholder="E.g. Zaid bin Haritha"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.2em] text-accent">Email Address</label>
                  <input
                    required
                    type="email"
                    className="w-full bg-transparent border-b border-accent/30 py-4 focus:border-cta outline-none transition-colors text-lg font-light"
                    placeholder="zaid@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.2em] text-accent">Your Vision</label>
                  <textarea
                    rows={4}
                    className="w-full bg-transparent border-b border-accent/30 py-4 focus:border-cta outline-none transition-colors text-lg font-light resize-none"
                    placeholder="Tell us about your project's ethical goals..."
                  />
                </div>
                <button
                  disabled={formState === 'sending'}
                  className={`w-full py-6 text-sm uppercase tracking-[0.3em] font-bold transition-all flex items-center justify-center gap-4 rounded-sm ${formState === 'sending' ? 'bg-accent text-background' : 'bg-primary text-background hover:bg-cta'}`}
                >
                  {formState === 'sending' ? 'Transmitting...' : 'Send Inquiry'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
