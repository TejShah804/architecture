import React from 'react';
import { motion } from 'framer-motion';
import { 
  TbTree, TbWifi, TbArmchair, TbCar, TbMoodKid, 
  TbBike, TbBuilding, TbPaw, TbUser, TbMapPinHeart 
} from 'react-icons/tb';

const features = [
  { icon: TbTree, label: "OVERLOOKING\nDEPTFORD PARK" },
  { icon: TbWifi, label: "FREE 1GB\nWI-FI" },
  { icon: TbArmchair, label: "FLEXIBLE\nFURNITURE OPTIONS" },
  { icon: TbCar, label: "PARKING\nAVAILABLE" },
  { icon: TbMoodKid, label: "CHILDREN'S\nPLAYGROUND" },
  { icon: TbBike, label: "SECURE\nBIKE STORAGE" },
  { icon: TbBuilding, label: "CITY SKYLINE\nVIEWS" },
  { icon: TbPaw, label: "PETS WELCOME\nFREE OF CHARGE" },
  { icon: TbUser, label: "ON-SITE\nMANAGEMENT" },
  { icon: TbMapPinHeart, label: "VIBRANT\nCOMMUNITY" }
];

const CityThrills = () => {
  return (
    <section className="bg-[#002820] py-24 lg:py-32 px-4 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Top Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20 px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <p className="text-white text-[10px] tracking-[0.2em] uppercase font-bold mb-4">
              Neptune Wharf Deptford SE8
            </p>
            <h2 className="text-[#7bb5a6] text-4xl md:text-5xl lg:text-6xl font-black font-sans uppercase tracking-tighter leading-[0.9]">
              City Thrills.<br />
              Tranquil Retreats.
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-1/2 lg:pl-12"
          >
            <p className="text-white text-sm leading-[1.8] font-light opacity-90">
              Immerse yourself in a vibrant neighbourhood where bustling markets,
              artsy bars, and quirky cafes define Deptford's unique character. Amid
              the urban buzz, find tranquillity with 17 acres of green space at your
              doorstep and serene waterways nearby. Neptune Wharf offers the ideal
              mix of city sophistication and suburban charm, giving you the best of
              both worlds.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-5 relative"
        >
          {features.map((feature, index) => {
            return (
              <div 
                key={index}
                className="relative flex flex-col items-center justify-center text-center p-8 lg:p-12"
              >
                <feature.icon className="text-[#cda56b] w-12 h-12 mb-6" strokeWidth={1.5} />
                <p className="text-white text-[10px] uppercase font-bold tracking-[0.2em] whitespace-pre-line leading-relaxed">
                  {feature.label}
                </p>

                {/* --- DESKTOP SEPARATOR LINES --- */}
                {/* Right Vertical Line */}
                {index % 5 !== 4 && (
                  <div className="hidden md:block absolute right-0 top-12 bottom-12 w-[1px] bg-white/20" />
                )}
                {/* Bottom Horizontal Line */}
                {index < 5 && (
                  <div className="hidden md:block absolute bottom-0 left-12 right-12 h-[1px] bg-white/20" />
                )}

                {/* --- MOBILE SEPARATOR LINES --- */}
                {/* Right Vertical Line */}
                {index % 2 === 0 && (
                  <div className="md:hidden absolute right-0 top-8 bottom-8 w-[1px] bg-white/20" />
                )}
                {/* Bottom Horizontal Line */}
                {index < 8 && (
                  <div className="md:hidden absolute bottom-0 left-8 right-8 h-[1px] bg-white/20" />
                )}
              </div>
            );
          })}
        </motion.div>

        {/* Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex justify-center mt-20"
        >
          <a 
            href="#neighbourhood" 
            className="inline-block border border-white text-white px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#002820] transition-colors duration-300"
          >
            View Neighbourhood
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CityThrills;
