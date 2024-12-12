import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import TestimonialCard from './TestimonialCard';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "John D.",
    role: "Professional Hunter",
    quote: "The quality and precision of their tactical gear is unmatched. Truly exceptional service.",
    image: "/gun-with-man.jpeg"
  },
  {
    name: "Sarah M.",
    role: "Shooting Instructor",
    quote: "Their training programs and equipment recommendations have been invaluable to my career.",
    image: "/women-hold-gun.jpeg"
  },
  {
    name: "Mike R.",
    role: "Tactical Expert",
    quote: "The attention to detail and customer service is outstanding. Highly recommended.",
    image: "/gun-with-girl.jpeg"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-tactical-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-dark-steel mb-16">Client Testimonials</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay, Pagination]}
          className="testimonials-swiper !pb-16"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}