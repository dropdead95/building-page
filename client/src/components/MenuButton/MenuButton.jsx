import React from "react";
import classNames from "classnames";

import styles from "./MenuButton.module.scss";

export const MenuButton = ({ title, className, children, link }) => {
  return (
    <button className={classNames(styles.button, className)}>
      {children}
        <a href={link}>{title}</a>
    </button>
  );
};
