import React from "react";
import classNames from "classnames";

import styles from "./Lock.module.scss";

export const Lock = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#lock"></use>
  </svg>
);
