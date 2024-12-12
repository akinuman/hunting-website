import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FeatureCard from './FeatureCard';

const features = [
  {
    title: 'Expert Consultation',
    description: 'Get personalized guidance from our tactical experts',
    icon: '🎯'
  },
  {
    title: 'Premium Quality',
    description: 'Only the finest materials and craftsmanship',
    icon: '⭐'
  },
  {
    title: 'Training Programs',
    description: 'Professional training for all skill levels',
    icon: '🎓'
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored equipment for your specific needs',
    icon: '🛠️'
  }
];

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              {...feature}
              inView={inView}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}