import React from 'react';
import { motion } from 'framer-motion';
import { FiWifi, FiCoffee, FiShield, FiPackage, FiMonitor, FiMapPin } from 'react-icons/fi';

const benefits = [
  { icon: <FiWifi size={32} />, title: "Free 1GB Broadband", desc: "Stay connected with ultra-fast internet included." },
  { icon: <FiCoffee size={32} />, title: "The Club Lounge", desc: "Exclusive access to our resident co-working and social spaces." },
  { icon: <FiShield size={32} />, title: "On-site Management", desc: "Dedicated team available to help with your daily needs." },
  { icon: <FiPackage size={32} />, title: "Secure Storage", desc: "Safe and secure bike storage and parcel collection." },
  { icon: <FiMonitor size={32} />, title: "Private Cinema", desc: "Bookable screening room for residents." },
  { icon: <FiMapPin size={32} />, title: "Prime Location", desc: "Minutes from Deptford Park and excellent transport links." },
];

const Benefits = () => {
  return (
    <section className="py-24 bg-neptune-light px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif text-neptune-green mb-16"
        >
          Resident Benefits
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {benefits.map((b, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-white shadow-sm"
            >
              <div className="text-neptune-accent mb-6">
                {b.icon}
              </div>
              <h3 className="text-xl font-serif text-neptune-green mb-3">{b.title}</h3>
              <p className="text-neptune-text font-light">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
