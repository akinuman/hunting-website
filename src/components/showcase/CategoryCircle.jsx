import React from 'react';
import { motion } from 'framer-motion';

export default function CategoryCircle({ image, title, delay = 0 }) {
  return (
    <motion.div 
      className="relative group cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="rounded-full bg-gray-100 p-8 aspect-square flex items-center justify-center relative overflow-hidden group-hover:shadow-lg transition-shadow">
        <img 
          src={image} 
          alt={title}
          className="w-32 h-32 object-contain"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
      </div>
      <motion.h3 
        className="text-2xl font-bold text-center mt-4 text-gray-800"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      >
        {title}
      </motion.h3>
    </motion.div>
  );
}