import React from "react";
import classNames from "classnames";

import styles from "./Phone.module.scss";

export const Phone = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#phone"></use>
  </svg>
);
