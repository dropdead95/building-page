import React from "react";
import classNames from "classnames";

import styles from "./Home.module.scss";

export const Home = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#home"></use>
  </svg>
);
