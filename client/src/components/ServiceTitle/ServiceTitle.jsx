import React from "react";
import classNames from "classnames";

import styles from "./ServiceTitle.module.scss";

export const ServiceTitle = ({ title, className, children }) => {
  return (
    <p className={classNames(styles.title, className)}>
      {title}
      {children}
    </p>
  );
};
