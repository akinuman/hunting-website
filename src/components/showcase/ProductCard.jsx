import React from 'react';
import { motion } from 'framer-motion';

export default function ProductCard({ image, title, description }) {
  return (
    <motion.div 
      className="bg-tactical-gray rounded-2xl overflow-hidden shadow-xl"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-[16/9] bg-white">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-contain p-8"
        />
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold text-dark-steel mb-2">{title}</h3>
        <p className="text-gunmetal">{description}</p>
      </div>
    </motion.div>
  );
}