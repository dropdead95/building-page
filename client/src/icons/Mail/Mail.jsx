import React from "react";
import classNames from "classnames";

import styles from "./Mail.module.scss";

export const Mail = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#mail"></use>
  </svg>
);
