import React from "react";
import classNames from "classnames";

import styles from "./Blog.module.scss";

export const Blog = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#blog"></use>
  </svg>
);
