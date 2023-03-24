import React from "react";
import classNames from "classnames";

import styles from "./ArrowRight.module.scss";

export const ArrowRight = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#arrow-right"></use>
  </svg>
);
