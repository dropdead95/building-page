import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/swiper-bundle.min.css";
import "swiper/css/pagination";

import "./ReviewsSlider.scss";

import { reviews } from "../../mockData/reviews";
import { Review } from "../Review";

export const ReviewsSlider = () => {
  return (
    <div className="wrapper">
      <Swiper
        loop={true}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        <>
          {reviews.map((item) => (
            <SwiperSlide key={item.id}>
              <Review image={item.image} />
            </SwiperSlide>
          ))}
        </>
      </Swiper>
    </div>
  );
};
