import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/swiper-bundle.min.css";
import "./ReviewsSlider.scss";

import { reviews } from "../../mockData/reviews";
import { Review } from "../Review";
import { Bullet } from "../../icons";

export const ReviewsSlider = () => {
  return (
    <>
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        className="slider"
        slidesPerView={3}
        spaceBetween={30}
      >
        {reviews.map((item) => (
          <SwiperSlide key={item.id}>
            <Review image={item.image} />
          </SwiperSlide>
        ))}
        <div className="swiper-pagination">
          <Bullet className="swiper-pagination-bullet swiper-pagination-bullet-active" />
          <Bullet />
          <Bullet />
          <Bullet />
        </div>
      </Swiper>
    </>
  );
};
