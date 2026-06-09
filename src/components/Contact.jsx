import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif text-neptune-green mb-8"
        >
          Enquire Now
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-neptune-text font-light mb-12 max-w-2xl mx-auto"
        >
          Leave your details below and our team will be in touch to discuss availability and arrange a viewing.
        </motion.p>
        
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="space-y-6 text-left max-w-2xl mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm uppercase tracking-widest text-neptune-green mb-2">First Name</label>
              <input type="text" className="w-full border-b border-neptune-light py-2 focus:outline-none focus:border-neptune-accent" />
            </div>
            <div>
              <label className="block text-sm uppercase tracking-widest text-neptune-green mb-2">Last Name</label>
              <input type="text" className="w-full border-b border-neptune-light py-2 focus:outline-none focus:border-neptune-accent" />
            </div>
          </div>
          <div>
            <label className="block text-sm uppercase tracking-widest text-neptune-green mb-2">Email Address</label>
            <input type="email" className="w-full border-b border-neptune-light py-2 focus:outline-none focus:border-neptune-accent" />
          </div>
          <div>
            <label className="block text-sm uppercase tracking-widest text-neptune-green mb-2">Phone Number</label>
            <input type="tel" className="w-full border-b border-neptune-light py-2 focus:outline-none focus:border-neptune-accent" />
          </div>
          <button type="submit" className="w-full bg-neptune-green text-white py-4 uppercase tracking-widest text-sm hover:bg-neptune-accent transition-colors duration-300 mt-8">
            Submit Enquiry
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
