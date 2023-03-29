import React from "react";
import classNames from "classnames";

import styles from "./MenuButton.module.scss";

export const MenuButton = ({ title, className, children, disabled }) => {
  return (
    <button disabled={disabled} className={classNames(styles.button, className)}>
      {children} {title}
    </button>
  );
};
