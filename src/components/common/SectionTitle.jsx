import React from 'react';
import { motion } from 'framer-motion';

export default function SectionTitle({ children, className = '' }) {
  return (
    <motion.h2 
      className={`text-4xl font-bold text-center text-dark-steel mb-16 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.h2>
  );
}