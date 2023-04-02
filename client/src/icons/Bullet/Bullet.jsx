import React from "react";
import classNames from "classnames";

import styles from "./Bullet.module.scss";
import { useSwiper } from "swiper/react";

export const Bullet = ({ className }) => {
  const swiper = useSwiper();
  return (
    <div onClick={() => swiper.slideNext()}>
      <svg className={classNames(styles.icon, className)}>
        <use href="#bullet"></use>
      </svg>
    </div>
  );
};
