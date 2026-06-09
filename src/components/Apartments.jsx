import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { TbArrowLeft, TbArrowRight, TbLeaf } from 'react-icons/tb';

const apartments = [
  {
    id: 1,
    type: '1 Bed',
    price: 'From £1,950 per month*',
    image: '/src/assets/img1.avif',
  },
  {
    id: 2,
    type: '2 Bed',
    price: 'From £2,350 per month*',
    image: '/src/assets/img2.avif',
  },
  {
    id: 3,
    type: 'Duplexes & Penthouses',
    price: 'From £2,400 per month*',
    image: '/src/assets/img3.avif',
  },
  {
    id: 4,
    type: '3 Bed',
    price: 'From £2,800 per month*',
    image: '/src/assets/img4.avif',
  }
];

const Apartments = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 370; // Card width + gap
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="apartments" className="py-24 bg-[#f4f2ed] relative overflow-hidden">
      
      {/* Decorative Shadow Effect matching the reference */}
      <TbLeaf 
        className="absolute bottom-12 left-0 w-[600px] h-[600px] text-[#002820] opacity-[0.03] blur-2xl transform -translate-x-1/2 -rotate-[30deg] pointer-events-none" 
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16 max-w-[1200px] mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-[#002820] leading-[0.9] tracking-tight"
          >
            Explore<br />Apartments
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[10px] md:text-[11px] text-[#002820] max-w-sm font-serif leading-relaxed font-semibold text-justify"
          >
            Discover your ideal apartment to rent in Deptford, featuring spacious
            layouts and thoughtfully designed interiors tailored for modern
            renters. Embrace effortless living in one of London's most
            vibrant new communities. With viewings available, it's the perfect
            time to experience the best of urban living combined with
            suburban tranquility.
          </motion.p>
        </div>

        {/* Carousel / Scrollable Cards */}
        <div className="relative max-w-[1200px] mx-auto">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {apartments.map((apt, index) => (
              <motion.div 
                key={apt.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-4 md:p-5 w-[85vw] sm:w-[45vw] lg:w-[calc(25%-18px)] flex flex-col snap-start shrink-0 group shadow-sm hover:shadow-xl transition-shadow duration-500"
              >
                {/* Card Header */}
                <div className="text-center mb-4">
                  <h3 className="text-lg md:text-xl font-black uppercase text-[#002820] mb-1 tracking-tight">{apt.type}</h3>
                  <p className="text-[#002820] font-serif text-[10px] italic tracking-wide">{apt.price}</p>
                </div>
                
                {/* Card Image */}
                <div className="relative overflow-hidden mb-4 aspect-square w-full">
                  <img 
                    src={apt.image} 
                    alt={apt.type} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* Card Footer */}
                <div className="flex flex-col gap-2 mt-auto">
                  <button className="bg-[#002820] text-white py-2.5 text-[8px] font-bold uppercase tracking-widest hover:bg-[#cda56b] transition-colors w-full">
                    Find Your Apartment
                  </button>
                  <button className="text-[#002820] py-1 text-[8px] font-bold uppercase tracking-[0.15em] hover:text-[#cda56b] transition-colors w-full">
                    Apartment Information
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center relative mt-4 max-w-[1200px] mx-auto">
          {/* Centered Button */}
          <a href="#all" className="border border-[#002820] text-[#002820] px-8 py-3 text-[9px] font-bold uppercase tracking-[0.2em] hover:bg-[#002820] hover:text-white transition-colors relative z-10 bg-[#f4f2ed]">
            View All Apartments
          </a>
          
          {/* Arrows floating to the right */}
          <div className="flex gap-3 sm:absolute sm:right-0 mt-8 sm:mt-0 z-10">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full bg-[#e1e4e2] flex items-center justify-center text-[#002820] hover:bg-[#002820] hover:text-white transition-colors"
            >
              <TbArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full bg-[#95a8a2] flex items-center justify-center text-white hover:bg-[#002820] transition-colors"
            >
              <TbArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>

      {/* Hide Scrollbar CSS Injection */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
};

export default Apartments;
