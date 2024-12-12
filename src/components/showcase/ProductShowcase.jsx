import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import ProductCard from './ProductCard';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const products = [
  {
    image: '/horizontal-gun.png',
    title: 'Tactical Rifles',
    description: 'Professional-grade tactical equipment'
  },
  {
    image: '/horizontal-gun-2.png',
    title: 'Combat Systems',
    description: 'Advanced combat solutions'
  },
  {
    image: '/firearm.png',
    title: 'Precision Firearms',
    description: 'Accuracy and reliability combined'
  }
];

export default function ProductShowcase() {
  return (
    <section className="py-20 bg-white" id="products">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark-steel mb-4">Featured Equipment</h2>
          <p className="text-gunmetal text-lg">Discover our premium collection</p>
        </motion.div>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 100,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="product-showcase-swiper"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index} className="max-w-3xl">
              <ProductCard {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}