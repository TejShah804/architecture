import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '17', label: 'Acres of Park' },
  { value: '1', label: 'GB Free Broadband' },
  { value: '30', label: 'Mins to Canary Wharf' },
  { value: '24/7', label: 'On-site Support' }
];

const Stats = () => {
  return (
    <section className="py-20 bg-neptune-green text-white px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="text-5xl md:text-7xl font-serif text-neptune-accent mb-2">{s.value}</div>
            <div className="uppercase tracking-widest text-xs md:text-sm">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
