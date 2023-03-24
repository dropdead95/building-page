import React from "react";
import classNames from "classnames";

import styles from "./LogoVariant.module.scss";

export const LogoVariant = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#logo-variant"></use>
  </svg>
);
