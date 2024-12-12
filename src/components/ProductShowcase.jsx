import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const products = [
  {
    image: '/firearm.png',
    title: 'Tactical Firearms',
    description: 'Professional-grade firearms for precision shooting'
  },
  {
    image: '/ammunition.png',
    title: 'Premium Ammunition',
    description: 'High-performance ammunition for every scenario'
  },
  {
    image: '/accessories.png',
    title: 'Advanced Accessories',
    description: 'Enhance your gear with premium accessories'
  },
  {
    image: '/hunting-gear.png',
    title: 'Hunting Equipment',
    description: 'Complete range of professional hunting gear'
  }
];

export default function ProductShowcase() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Premium Collection</h2>
        
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index} className="max-w-md">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}