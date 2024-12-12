import React from 'react';
import HeroSection from '../components/hero/HeroSection';
import Categories from '../components/showcase/Categories';
import ProductShowcase from '../components/showcase/ProductShowcase';
import Features from '../components/features/Features';
import Testimonials from '../components/testimonials/Testimonials';

export default function Home() {
  return (
    <div className="pt-16">
      <HeroSection />
      <ProductShowcase />
      <Categories />
      <Features />
      <Testimonials />
    </div>
  );
}