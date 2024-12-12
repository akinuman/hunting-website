import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "John D.",
    role: "Professional Hunter",
    quote: "The quality and precision of their tactical gear is unmatched. Truly exceptional service.",
    image: "/man-holding-gun.jpeg"
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
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
        
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <h4 className="font-bold">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}