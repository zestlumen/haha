import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

// 샘플 이미지 URL 배열 (실제로는 assets에 넣거나 API로 대체 가능)
const images = [
  "/cakes/cake1.png",
  "/cakes/cake2.png",
  "/cakes/cake3.png",

];

export default function CakeGallery() {
  return (
    <div className="mt-16">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-md"
      >
        
        {images.map((src, idx) => (
         <SwiperSlide
            key={idx}
            className="flex justify-center items-center bg-white h-[400px]"
          >
            <img
              src={src}
              alt={`Cake ${idx + 1}`}
              className="max-h-full w-auto object-contain rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
