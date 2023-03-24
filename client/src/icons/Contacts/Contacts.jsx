import React from "react";
import classNames from "classnames";

import styles from "./Contacts.module.scss";

export const Contacts = ({ className }) => (
  <svg className={classNames(styles.icon, className)}>
    <use href="#contacts"></use>
  </svg>
);
