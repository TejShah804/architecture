import React from 'react';
import { motion } from 'framer-motion';

const Neighbourhood = () => {
  return (
    <section id="neighbourhood" className="py-24 bg-neptune-green text-white px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <p className="uppercase tracking-widest text-sm text-neptune-accent mb-4">Neighbourhood</p>
          <h2 className="text-5xl md:text-7xl font-serif mb-6">Best of both.</h2>
          <p className="text-lg font-light leading-relaxed mb-8 text-neptune-light">
            Nestled next to the 17-acre Deptford Park, this vibrant new rental community offers easy access to Canary Wharf (30 minutes), Bank Station (40 minutes), and Waterloo and London Bridge (30 minutes). With Surrey Quays, Deptford, and Canada Water stations all within walking distance, commuting is effortless from this prime location.
          </p>
          <button className="border border-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-white hover:text-neptune-green transition-colors">
            Discover Deptford
          </button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <img 
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="London Skyline" 
            className="w-full h-[500px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Neighbourhood;
