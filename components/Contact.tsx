import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'redirecting'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('redirecting');

    const formData = new FormData(e.currentTarget);
    const name = formData.get('user_name') as string;
    const email = formData.get('user_email') as string;
    const message = formData.get('message') as string;

    // Use a hardcoded number for now, or update constants.tsx if needed
    // Using a placeholder number; USER should ideally provide this.
    const phoneNumber = "212620042642";

    const whatsappMessage = `*New Inquiry from Website*\n\n*Name:* ${name}\n*Email:* ${email}\n*Vision:* ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Small delay for UX
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setFormState('idle');
    }, 1500);
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

            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="space-y-2 relative">
                <label className="text-xs uppercase tracking-[0.2em] text-accent">Full Name</label>
                <input
                  name="user_name"
                  required
                  type="text"
                  className="w-full bg-transparent border-b border-accent/30 py-4 focus:border-cta outline-none transition-colors text-lg font-light"
                  placeholder="E.g. Zaid bin Haritha"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] text-accent">Email Address</label>
                <input
                  name="user_email"
                  required
                  type="email"
                  className="w-full bg-transparent border-b border-accent/30 py-4 focus:border-cta outline-none transition-colors text-lg font-light"
                  placeholder="zaid@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] text-accent">Your Vision</label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-accent/30 py-4 focus:border-cta outline-none transition-colors text-lg font-light resize-none"
                  placeholder="Tell us about your project's ethical goals..."
                />
              </div>

              <button
                disabled={formState === 'redirecting'}
                className={`w-full py-6 text-sm uppercase tracking-[0.3em] font-bold transition-all duration-300 flex items-center justify-center gap-4 rounded-sm cursor-pointer ${formState === 'redirecting' ? 'bg-accent text-background' : 'bg-primary text-background hover:bg-cta'}`}
              >
                {formState === 'redirecting' ? 'Redirecting to WhatsApp...' : 'Send Inquiry via WhatsApp'}
              </button>
            </form>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
