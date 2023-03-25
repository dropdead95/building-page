import React from "react";
import classNames from "classnames";

import styles from "./Calculator.module.scss";

export const Calculator = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#calculator"></use>
  </svg>
);
