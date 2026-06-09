import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TbBrandFacebook, TbBrandInstagram, TbPlus } from 'react-icons/tb';

const Footer = () => {
  const [showButtons, setShowButtons] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowButtons(true);
      
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      
      timerRef.current = setTimeout(() => {
        setShowButtons(false);
      }, 5000);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <footer className="bg-[#002820] pt-20 pb-0 overflow-hidden text-white relative">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-0 relative z-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Logo Col */}
          <div className="flex justify-start">
            <div className="w-24 h-24 rounded-full border border-[#cda56b] flex items-center justify-center">
              <span className="text-[#cda56b] font-serif text-[26px] tracking-widest font-bold">NW</span>
            </div>
          </div>

          {/* Info Col */}
          <div className="flex flex-col gap-10">
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Ready to move?</h4>
              <p className="text-white text-[10px] font-bold tracking-widest mb-1">0203 770 2059</p>
              <p className="text-white text-[10px] font-bold tracking-[0.1em] uppercase">INFO@NEPTUNEWHARFLONDON.COM</p>
            </div>
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Find Us</h4>
              <p className="text-white text-[10px] font-bold tracking-[0.2em] uppercase leading-[1.8]">
                Neptune Wharf<br />
                Grinstead Road<br />
                London SE8 5FN
              </p>
              <a href="#map" className="inline-block mt-3 text-white hover:text-[#cda56b] text-[10px] font-bold uppercase tracking-widest transition-colors">
                View Map &gt;
              </a>
            </div>
          </div>

          {/* Links Col */}
          <div className="flex flex-col gap-4">
            {['Home', 'Apartments', 'Amenities', 'Neighbourhood', 'FAQs', 'Contact Us'].map((link) => (
              <a key={link} href="#" className="text-white hover:text-[#cda56b] text-sm md:text-[15px] font-black font-sans uppercase tracking-[0.1em] transition-colors">
                {link}
              </a>
            ))}
          </div>

          {/* Community Col */}
          <div className="flex flex-col">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Join the community</h4>
            <div className="flex flex-col gap-3 mb-10">
              <a href="#" className="flex items-center gap-2 text-white hover:text-[#cda56b] text-[10px] font-bold uppercase tracking-widest transition-colors">
                <TbBrandFacebook className="w-[18px] h-[18px]" strokeWidth={1.5} /> Facebook
              </a>
              <a href="#" className="flex items-center gap-2 text-white hover:text-[#cda56b] text-[10px] font-bold uppercase tracking-widest transition-colors">
                <TbBrandInstagram className="w-[18px] h-[18px]" strokeWidth={1.5} /> Instagram
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <a href="#" className="flex items-center justify-between pb-3 border-b border-white/20 text-white hover:text-[#cda56b] text-[10px] font-bold uppercase tracking-[0.15em] transition-colors group">
                Siteplan PDF
                <TbPlus className="w-4 h-4 text-white/50 group-hover:text-[#cda56b] transition-colors" />
              </a>
              <a href="#" className="flex items-center justify-between pb-3 border-b border-white/20 text-white hover:text-[#cda56b] text-[10px] font-bold uppercase tracking-[0.15em] transition-colors group">
                Floorplans PDF
                <TbPlus className="w-4 h-4 text-white/50 group-hover:text-[#cda56b] transition-colors" />
              </a>
            </div>
          </div>

        </div>

        {/* Sub-footer */}
        <div className="border-t border-white/10 pt-8 pb-12 flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-0">
          <div className="flex gap-4 md:gap-8 text-white text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-[#cda56b] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#cda56b] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#cda56b] transition-colors">Disclaimer</a>
          </div>
          <div className="text-white text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em]">
            © 2024 All Rights Reserved
          </div>
          <div className="text-white text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em]">
            Site by Society Studios
          </div>
          <div className="flex items-center gap-6">
            <span className="text-white font-serif italic text-lg tracking-wider opacity-90">Galliard <span className="text-[10px] not-italic sans-serif block -mt-2 tracking-widest">Homes</span></span>
            <span className="text-white font-serif uppercase tracking-widest text-sm opacity-90">Sable</span>
          </div>
        </div>

      </div>

      {/* Giant Watermark & Bottom Buttons */}
      <div className="w-full relative mt-8 pt-4 pb-0 group cursor-default">
        {/* The Text */}
        <div className="w-full flex justify-center translate-y-[15%] select-none px-4">
          <h1 className="text-[11vw] font-serif uppercase leading-[0.75] text-[#0a352c] tracking-tight whitespace-nowrap flex items-center justify-center transition-all duration-700 group-hover:text-[#cda56b] group-hover:drop-shadow-[0_0_30px_rgba(205,165,107,0.4)]">
            Neptune 
            <span className="text-[6vw] mx-4 md:mx-8 text-[#0a352c] inline-block transition-all duration-700 ease-in-out group-hover:rotate-180 group-hover:scale-125 group-hover:text-[#cda56b]">
              ✦
            </span> 
            Wharf
          </h1>
        </div>

        {/* The Overlay Buttons (Now Fixed to Viewport) */}
        <AnimatePresence>
          {showButtons && (
            <motion.div 
              initial={{ opacity: 0, y: 20, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 20, x: "-50%" }}
              transition={{ duration: 0.5 }}
              className="fixed bottom-8 left-1/2 flex items-center gap-4 z-[100]"
            >
              <a href="#book" className="bg-[#002820] border border-white text-white px-6 md:px-8 py-3 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#002820] transition-all duration-300 shadow-2xl shadow-black/50">
                Book a Viewing
              </a>
              <a href="#reserve" className="bg-[#002820] border border-white text-white px-6 md:px-8 py-3 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#002820] transition-all duration-300 shadow-2xl shadow-black/50">
                Reserve Now
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </footer>
  );
};

export default Footer;
