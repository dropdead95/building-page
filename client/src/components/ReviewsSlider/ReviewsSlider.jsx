import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/swiper-bundle.min.css";
import "./ReviewsSlider.scss";

import { reviews } from "../../mockData/reviews";
import { Review } from "../Review";

export const ReviewsSlider = () => {
  return (
    <>
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        className="slider"
        slidesPerView={2}
        spaceBetween={30}
      >
        {reviews.map((item) => (
          <SwiperSlide key={item.id}>
            <Review image={item.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
