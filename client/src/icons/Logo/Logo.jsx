import React from "react";
import classNames from "classnames";

import styles from "./Logo.module.scss";

export const Logo = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#logo"></use>
  </svg>
);
