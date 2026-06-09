import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Neptune Wharf Apartment" 
          className="w-full h-full object-cover filter brightness-75"
        />
        <div className="absolute inset-0 bg-neptune-green/30 mix-blend-multiply"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        {/* <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="uppercase tracking-[0.2em] mb-4 text-sm md:text-base font-sans"
        >
          Welcome to Neptune Wharf Living
        </motion.p> */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 text-white"
        >
          Style in the city
        </motion.h1>
         <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="uppercase tracking-[0.2em] mb-4 text-sm md:text-base font-sans"
        >
          Welcome to Neptune Wharf Living
        </motion.p>
        <motion.a 
          href="#apartments"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="inline-block mt-8 border border-white px-8 py-3 hover:bg-white hover:text-neptune-green transition-colors duration-300 uppercase tracking-widest text-sm"
        >
          Discover the space
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
