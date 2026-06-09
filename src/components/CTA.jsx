import React from 'react';
import { motion } from 'framer-motion';
import { TbLeaf } from 'react-icons/tb';

const CTA = () => {
  return (
    <section className="relative bg-[#e1e6e2] py-24 md:py-36 overflow-hidden flex flex-col items-center justify-center text-center">
      
      {/* Decorative Leaves (Using scalable, clean line-art SVG to match luxury aesthetic without background issues) */}
      <TbLeaf 
        className="absolute top-0 left-0 w-64 md:w-[500px] h-64 md:h-[500px] text-[#002820] opacity-[0.04] transform -translate-x-1/4 -translate-y-1/4 -rotate-[30deg] pointer-events-none" 
        strokeWidth={0.5} 
      />
      <TbLeaf 
        className="absolute bottom-0 right-0 w-64 md:w-[500px] h-64 md:h-[500px] text-[#002820] opacity-[0.04] transform translate-x-1/4 translate-y-1/4 rotate-[150deg] pointer-events-none" 
        strokeWidth={0.5} 
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-[800px] mx-auto px-6">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#cda56b] text-[10px] font-bold uppercase tracking-[0.2em] mb-4"
        >
          Neptune Wharf Deptford SE8
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[#002820] text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.95] mb-16"
        >
          Ready to experience<br />elegant living?
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0"
        >
          {/* Left Col */}
          <div className="flex flex-col items-center w-full md:w-1/2 md:pr-16 md:border-r border-[#002820]/15">
            <p className="text-[#002820] text-[11px] font-semibold mb-6">Ready to make the move?</p>
            <a href="#contact" className="border border-[#002820] text-[#002820] px-8 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#002820] hover:text-white transition-colors duration-300">
              Contact Us
            </a>
          </div>

          {/* Right Col */}
          <div className="flex flex-col items-center w-full md:w-1/2 md:pl-16">
            <p className="text-[#002820] text-[11px] font-semibold mb-6">View all apartments.</p>
            <a href="#apartments" className="border border-[#002820] text-[#002820] px-8 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#002820] hover:text-white transition-colors duration-300">
              View All
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
