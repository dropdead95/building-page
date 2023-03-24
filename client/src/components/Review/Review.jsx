import React from "react";

import styles from "./Review.module.scss";
import { Play } from "../../icons";

export const Review = ({ image }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={image} alt="image" />
      <Play className={styles.play} />
    </div>
  );
};
