import React from 'react';
import { motion } from 'framer-motion';

export default function TestimonialCard({ name, role, quote, image }) {
  return (
    <motion.div 
      className="bg-white rounded-2xl overflow-hidden shadow-lg"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-64">
        <img
          src={image}
          alt="Tactical equipment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>
      <div className="p-8">
        <p className="text-xl text-gunmetal italic mb-6">"{quote}"</p>
        <div className="flex items-center">
          <div>
            <h4 className="text-xl font-bold text-dark-steel">{name}</h4>
            <p className="text-gunmetal">{role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}