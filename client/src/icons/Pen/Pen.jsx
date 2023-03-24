import React from "react";
import classNames from "classnames";

import styles from "./Pen.module.scss";

export const Pen = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#pen"></use>
  </svg>
);
