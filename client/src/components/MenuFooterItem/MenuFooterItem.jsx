import React from "react";
import classNames from "classnames";

import styles from "./MenuFooterItem.module.scss";

export const MenuFooterItem = ({ title, className, Icon }) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <Icon />
      <p className={styles.title}>{title}</p>
    </div>
  );
};
