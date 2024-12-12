import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  { image: '/accessories.png', title: 'Accessories' },
  { image: '/ammunition.png', title: 'Ammunition' },
  { image: '/firearm.png', title: 'Firearms' },
  { image: '/hunting-gear.png', title: 'Hunting Gear' },
  { image: '/self-defense.png', title: 'Self Defense' },
  { image: '/tactical-gear.png', title: 'Tactical Gear' }
];

export default function Categories() {
  return (
    <section className="py-20 bg-tactical-gray">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center text-dark-steel mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Discover Our Product Categories
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg aspect-square">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-2xl font-bold text-white text-center">
                    {category.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}