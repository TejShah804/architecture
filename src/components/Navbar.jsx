import React, { useState, useEffect } from 'react';
import { TbMenu2, TbChevronDown, TbMapPin, TbPhone } from 'react-icons/tb';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#002820] py-4 shadow-lg' : 'bg-[#002820] py-6'}`}>
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex justify-between items-center">
        
        {/* Left Side */}
        <div className="flex items-center gap-6 lg:gap-10 w-1/3">
          <button className="text-white hover:text-[#cda56b] transition-colors flex items-center justify-center">
            <TbMenu2 className="w-7 h-7" strokeWidth={1.5} />
          </button>
          <div className="hidden lg:flex items-center gap-2 cursor-pointer group">
            <span className="text-white text-[10px] font-bold uppercase tracking-[0.2em] group-hover:text-[#cda56b] transition-colors">
              Apartments
            </span>
            <TbChevronDown className="w-3 h-3 text-white group-hover:text-[#cda56b] transition-colors mt-0.5" strokeWidth={2.5} />
          </div>
        </div>

        {/* Center Logo */}
        <div className="flex justify-center w-1/3">
          <a href="#" className="flex flex-col items-center text-center group">
            <span className="text-[#cda56b] font-serif text-lg md:text-xl lg:text-[22px] tracking-[0.15em] leading-[1.1] uppercase group-hover:opacity-80 transition-opacity">
              Neptune
            </span>
            <span className="text-[#cda56b] font-serif text-lg md:text-xl lg:text-[22px] tracking-[0.15em] leading-[1.1] uppercase group-hover:opacity-80 transition-opacity">
              Wharf
            </span>
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-end gap-6 lg:gap-10 w-1/3">
          <a href="#location" className="hidden xl:flex items-center gap-2 text-white hover:text-[#cda56b] transition-colors group">
            <TbMapPin className="w-[18px] h-[18px] text-[#7bb5a6] group-hover:text-[#cda56b] transition-colors" strokeWidth={1.5} />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] mt-0.5">Location</span>
          </a>
          <a href="tel:02037702059" className="hidden lg:flex items-center gap-2 text-white hover:text-[#cda56b] transition-colors group">
            <TbPhone className="w-[18px] h-[18px] text-[#7bb5a6] group-hover:text-[#cda56b] transition-colors" strokeWidth={1.5} />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] mt-0.5">0203 770 2059</span>
          </a>
          <a href="#enquire" className="border border-[#7bb5a6] px-6 md:px-8 py-3 text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#7bb5a6] hover:text-[#002820] transition-colors duration-300">
            Enquire
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
