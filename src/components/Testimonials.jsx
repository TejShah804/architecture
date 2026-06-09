import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <section className="py-24 bg-neptune-light px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-serif text-neptune-green mb-8 leading-snug"
        >
          "Moving to Neptune Wharf was the best decision. The apartments are stunning, and the community feel is something you rarely find in London."
        </motion.p>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="uppercase tracking-widest text-sm text-neptune-text"
        >
          — Sarah T., Resident
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
