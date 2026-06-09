import React from 'react';
import { motion } from 'framer-motion';

const Community = () => {
  return (
    <section className="py-24 bg-neptune-light px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="uppercase tracking-widest text-sm text-neptune-accent mb-6"
        >
          Community
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-serif text-neptune-green mb-8"
        >
          A vibrant new destination
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-lg font-light leading-relaxed text-neptune-text max-w-2xl mx-auto mb-12"
        >
          At Neptune Wharf, we believe in creating more than just homes. Our thoughtfully curated spaces encourage connection, wellness, and creativity. Join a diverse and dynamic community in one of London's most exciting neighbourhoods.
        </motion.p>
      </div>
      <div className="max-w-7xl mx-auto overflow-hidden">
        <motion.img 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
          alt="Community" 
          className="w-full h-[600px] object-cover"
        />
      </div>
    </section>
  );
};

export default Community;
