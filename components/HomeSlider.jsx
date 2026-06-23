"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function HomeSlider() {
  return (
    <div className="HomeSlider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop
        speed={800}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="sliderImg" src="/beauty.jpeg" alt="beauty" />
        </SwiperSlide>

        <SwiperSlide>
          <img className="sliderImg" src="/electronics.jpeg" alt="electronics" />
        </SwiperSlide>

        <SwiperSlide>
          <img className="sliderImg" src="/furniture.jpeg" alt="furniture" />
        </SwiperSlide>

        <SwiperSlide>
          <img className="sliderImg" src="/grocery.jpg" alt="grocery" />
        </SwiperSlide>

        <SwiperSlide>
          <img className="sliderImg" src="/fashion.jpg" alt="fashion" />
        </SwiperSlide>

        <SwiperSlide>
          <img className="sliderImg" src="/sale.jpg" alt="sale" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}