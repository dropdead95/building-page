import React from "react";
import classNames from "classnames";

import styles from "./Marker.module.scss";

export const Marker = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#marker"></use>
  </svg>
);
