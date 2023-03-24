import React from "react";
import classNames from "classnames";

import styles from "./Container.module.scss";

export const Container = ({ children, className }) => (
  <div className={classNames(styles.container, className)}>{children}</div>
);
