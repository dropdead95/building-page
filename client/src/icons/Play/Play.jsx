import React from "react";
import classNames from "classnames";

import styles from "./Play.module.scss";

export const Play = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#play"></use>
  </svg>
);
