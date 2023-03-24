import React from "react";
import classNames from "classnames";

import styles from "./ServiceSubtitle.module.scss";

import { CheckMark } from "../../icons";

export const ServiceSubtitle = ({ subtitle, className }) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <CheckMark className={styles.check} />
      <a href="#" className={styles.subtitle}>
        {subtitle}
      </a>
    </div>
  );
};
