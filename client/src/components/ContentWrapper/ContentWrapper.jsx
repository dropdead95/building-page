import React from "react";

import styles from "./ContentWrapper.module.scss";

export const ContentWrapper = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};
