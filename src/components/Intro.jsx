import React from 'react';
import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <section className="relative flex items-center justify-center py-24 lg:py-36 overflow-hidden">
      {/* Leaves BG */}
      <img
        src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1800&q=80"
        alt="Lush green leaves background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black" style={{ opacity: 0.3 }} />

      {/* Dark card */}
    <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative z-10 text-center mx-4 sm:mx-auto px-8 sm:px-14 py-14"
  style={{
    width: "min(560px, 92vw)",
    backgroundColor: "#234B42", // Dark Green Background
  }}
>
  <p className="text-[#D4AF37] text-xs tracking-widest uppercase font-semibold mb-3">
    Welcome to Neptune Wharf
  </p>

  <h2 className="text-white font-serif uppercase leading-tight text-3xl sm:text-4xl lg:text-5xl mb-7">
    Enjoy the Best
    <br />
    of Both
  </h2>

  <p
    className="text-white text-sm leading-relaxed mb-5"
    style={{ opacity: 0.85 }}
  >
    Explore modern and spacious 1, 2, and 3-bedroom apartments for rent in
    Deptford, next to the scenic 17-acre Deptford Park. These stylish
    apartments feature premium Smeg appliances, Insta-boil kitchen taps,
    curated furniture, free 1GB broadband, and private outdoor spaces with
    stunning views of Canary Wharf and Greenwich.
  </p>

  <p
    className="text-white text-sm leading-relaxed mb-7"
    style={{ opacity: 0.85 }}
  >
    Renting at Neptune Wharf means more than just an apartment — it's a
    lifestyle. Residents will enjoy access to co-working and lounge spaces,
    while boutique retailers bring new vibrancy and a unique shopping
    experience to our community.
  </p>

  <p className="text-white text-xs tracking-widest uppercase font-bold mb-9">
    Live the life you want at Neptune Wharf.
  </p>

  <a
    href="#apartments"
    className="inline-block border border-white text-white px-8 py-3 uppercase tracking-widest text-sm transition-all duration-300 hover:bg-white hover:text-[#234B42]"
  >
    Find Your Apartment
  </a>
</motion.div>
    </section>
  );
};

export default Intro;