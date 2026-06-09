import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    title: "AMENITIES",
    heading: "YOURS TO ENJOY.",
    text: "Socialise in stylish spaces at Neptune Wharf, where sophistication meets comfort. Thoughtful features like on-site management, The Club, co-working spaces, cinema, secure bike storage, and car parking add convenience, ensuring you'll love every moment of living here.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "APARTMENTS",
    heading: "CAPTIVATING COMFORT.",
    text: "Stylish, spacious, and filled with natural light, the apartments at Neptune Wharf offer a serene, minimalist design with a bespoke touch. Every detail is thoughtfully curated, from sustainably sourced furniture to smart storage solutions and subtle lighting. Floor-to-ceiling windows and the Podium Garden seamlessly connect indoor and outdoor living, creating a tranquil and inviting space.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "NEIGHBOURHOOD",
    heading: "BEST OF BOTH.",
    text: "Nestled next to the 17-acre Deptford Park, this vibrant new rental community offers easy access to Canary Wharf (30 minutes), Bank Station (40 minutes), and Waterloo and London Bridge (30 minutes). With Surrey Quays, Deptford, and Canada Water stations all within walking distance, commuting is effortless from this prime location.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  }
];

const Amenities = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const scrollLeft = scrollContainerRef.current.scrollLeft;
    // Calculate which item is active based on scroll position
    const itemWidth = scrollContainerRef.current.children[1].offsetWidth; // Skip the style tag, first div is child 1
    const gap = 32; // 2rem (gap-8)
    const newIndex = Math.round(scrollLeft / (itemWidth + gap));
    
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < slides.length) {
      setActiveIndex(newIndex);
    }
  };

  const handleIndicatorClick = (index) => {
    if (!scrollContainerRef.current) return;
    const itemWidth = scrollContainerRef.current.children[1].offsetWidth;
    const gap = 32;
    scrollContainerRef.current.scrollTo({
      left: index * (itemWidth + gap),
      behavior: 'smooth'
    });
  };

  return (
    <section id="amenities" className="relative bg-[#d4d9d7] min-h-[80vh] flex items-center py-20 overflow-hidden">
      {/* Background shadow */}
      {/* <img 
        src="https://images.unsplash.com/photo-1544207968-3e4b31a31d27?w=1600&q=80" 
        alt="Leaf shadow"
        className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 mix-blend-multiply pointer-events-none"
      /> */}
      
      <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row items-center">
        
        {/* Left Text Content */}
        <div className="w-full lg:w-[45%] px-8 lg:px-24 mb-12 lg:mb-0">
           <AnimatePresence mode="wait">
             <motion.div 
               key={activeIndex}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               transition={{ duration: 0.3 }}
               className="max-w-md"
             >
               <p className="text-[11px] tracking-widest font-mono mb-3 text-[#2a3331]">
                 0{activeIndex + 1} - 03
               </p>
               <p className="text-nw-gold text-[10px] tracking-widest uppercase font-bold mb-2">
                 {slides[activeIndex].title}
               </p>
               <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black text-nw-teal uppercase leading-[0.9] mb-6 font-sans tracking-tighter">
                 {slides[activeIndex].heading}
               </h2>
               <p className="text-[13px] text-[#2a3331] leading-[1.8] mb-8">
                 {slides[activeIndex].text}
               </p>
               <button className="border border-nw-teal text-nw-teal px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest hover:bg-nw-teal hover:text-white transition-colors duration-300">
                 Explore
               </button>
             </motion.div>
           </AnimatePresence>
           
           {/* Indicators */}
           <div className="flex gap-3 mt-10">
             {slides.map((_, i) => (
               <button 
                 key={i} 
                 onClick={() => handleIndicatorClick(i)}
                 aria-label={`Go to slide ${i + 1}`}
                 className={`h-[2px] w-8 transition-colors duration-300 ${i === activeIndex ? 'bg-nw-teal' : 'bg-nw-gold/40'}`} 
               />
             ))}
           </div>
        </div>

        {/* Right Slider */}
        <div className="w-full lg:w-[55%] pl-8 lg:pl-0">
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-8 pr-8 lg:pr-[30vw] pb-8 pt-4 cursor-grab active:cursor-grabbing hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Custom style to hide scrollbar for webkit (Chrome/Safari) */}
            <style dangerouslySetInnerHTML={{__html: `
              .hide-scrollbar::-webkit-scrollbar { display: none; }
            `}} />
            
            {slides.map((slide, i) => (
               <div 
                 key={i} 
                 className="w-[80vw] sm:w-[400px] lg:w-[480px] flex-shrink-0 snap-start transition-all duration-500"
               >
                 <div className={`aspect-[4/5] overflow-hidden ${i === activeIndex ? 'opacity-100 scale-100 shadow-xl' : 'opacity-60 scale-[0.97]'} transition-all duration-500`}>
                   <img 
                     src={slide.image} 
                     alt={slide.title} 
                     className="w-full h-full object-cover pointer-events-none"
                   />
                 </div>
               </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Amenities;
