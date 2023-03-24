import React from "react";
import classNames from "classnames";

import styles from "./Telegram.module.scss";

export const Telegram = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#telegram"></use>
  </svg>
);
