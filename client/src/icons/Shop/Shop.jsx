import React from "react";
import classNames from "classnames";

import styles from "./Shop.module.scss";

export const Shop = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#shop"></use>
  </svg>
);
