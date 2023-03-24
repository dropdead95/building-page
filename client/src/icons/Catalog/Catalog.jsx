import React from "react";
import classNames from "classnames";

import styles from "./Catalog.module.scss";

export const Catalog = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#catalog"></use>
  </svg>
);
