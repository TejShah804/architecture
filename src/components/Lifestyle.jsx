import React from 'react';
import { motion } from 'framer-motion';

const Lifestyle = () => {
  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <p className="uppercase tracking-widest text-sm text-neptune-accent mb-4">Lifestyle</p>
          <h2 className="text-4xl md:text-6xl font-serif mb-6 text-neptune-green">A modern way to live.</h2>
          <p className="text-lg font-light leading-relaxed mb-8 text-neptune-text">
            Designed for those who want more from their home, Neptune Wharf combines modern living spaces with outstanding communal facilities. Whether you're working from home, entertaining friends, or simply relaxing, every aspect of your lifestyle is catered for.
          </p>
          <button className="border-b border-neptune-green text-neptune-green pb-1 uppercase tracking-widest text-sm hover:text-neptune-accent hover:border-neptune-accent transition-colors">
            View Lifestyle
          </button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <img 
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Lifestyle" 
            className="w-full aspect-square object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Lifestyle;
