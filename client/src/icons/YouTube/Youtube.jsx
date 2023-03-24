import React from "react";
import classNames from "classnames";

import styles from "./YouTube.module.scss";

export const Youtube = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#youtube"></use>
  </svg>
);
