import React from "react";
import classNames from "classnames";

import styles from "./CheckMark.module.scss";

export const CheckMark = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#check-mark"></use>
  </svg>
);
