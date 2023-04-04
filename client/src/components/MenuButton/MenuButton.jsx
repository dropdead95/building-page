import React from "react";
import classNames from "classnames";

import styles from "./MenuButton.module.scss";
import { Lock } from "../../icons";

export const MenuButton = ({
  title,
  className,
  children,
  disabled,
  lockText,
  classNameForBtn,
}) => {
  return (
    <div className={classNames(styles.wrapper, classNameForBtn)}>
      <button
        disabled={disabled}
        className={classNames(styles.button, className)}
      >
        {children} {title}
      </button>
      {lockText && (
        <div className={styles.lockWrapper}>
          <Lock />
          <p className={styles.text}>
            Ваши данные не будут переданы третьим лицам
          </p>
        </div>
      )}
    </div>
  );
};
