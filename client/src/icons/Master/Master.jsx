import React from "react";
import classNames from "classnames";

import styles from "./Master.module.scss";

export const Master = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#master"></use>
  </svg>
);
