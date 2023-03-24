import React from "react";
import classNames from "classnames";

import styles from "./Arrow.module.scss";

export const Arrow = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#arrow"></use>
  </svg>
);
