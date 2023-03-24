import React from "react";
import classNames from "classnames";

import styles from "./Bullet.module.scss";

export const Bullet = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#bullet"></use>
  </svg>
);
