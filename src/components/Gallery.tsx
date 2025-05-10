"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const images = [
  "/assets/IMAGE-1.jpg",
  "/assets/IMAGE-2.jpg",
  "/assets/IMAGE-3.jpg",
  "/assets/IMAGE-4.jpg",
  "/assets/IMAGE-5.jpg",
  "/assets/IMAGE-6.jpg",
  "/assets/IMAGE-7.jpg",
];

export default function Gallery() {
  return (
    <section className="w-full bg-gray-950 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          spaceBetween={20}
          slidesPerView={1}
          className="rounded-2xl overflow-hidden shadow-2xl"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  src={src}
                  alt={`Slide ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
