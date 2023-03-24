import React from "react";
import classNames from "classnames";

import styles from "./Whats-up.module.scss";

export const WhatsUp = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#whatsup"></use>
  </svg>
);
