import React from "react";
import classNames from "classnames";

import styles from "./Specialist.module.scss";

export const Specialist = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#specialist"></use>
  </svg>
);
