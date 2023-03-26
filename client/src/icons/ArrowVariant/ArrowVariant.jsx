import React from "react";
import classNames from "classnames";

import styles from "./ArrowVariant.module.scss";

export const ArrowVariant = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#arrow-variant"></use>
  </svg>
);
