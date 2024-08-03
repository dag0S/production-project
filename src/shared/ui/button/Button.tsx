import { FC } from "react";
import { ButtonProps } from "./ButtonProps";
import { classNames } from "shared/lib/classNames/classNames";

import styles from "./Button.module.scss";

export const Button: FC<ButtonProps> = ({
  children,
  className,
  theme,
  ...otherProps
}) => {
  return (
    <button
      className={classNames(styles["button"], {}, [
        className,
        styles[theme],
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
