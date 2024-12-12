import React from 'react';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const featuredProducts = [
    {
      title: "Tactical Scope X-1000",
      description: "Professional-grade hunting scope with night vision capability",
      price: "599.99",
      image: "/images/scope.jpg"
    },
    {
      title: "Hunter's Vest Pro",
      description: "Multi-pocket tactical vest for all your hunting needs",
      price: "149.99",
      image: "/images/vest.jpg"
    },
    {
      title: "Advanced Gun Case",
      description: "Weather-resistant tactical gun case with custom foam padding",
      price: "199.99",
      image: "/images/case.jpg"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Hunting landscape" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Premium Hunting & Tactical Gear</h1>
          <p className="text-xl mb-8">Equip yourself with the finest hunting accessories</p>
          <a 
            href="/gear" 
            className="bg-earth-brown hover:bg-opacity-90 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
}