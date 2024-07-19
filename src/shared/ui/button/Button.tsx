import { FC } from "react";
import { ButtonProps, ThemeButton } from "./ButtonProps";

import * as styles from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

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
        styles[ThemeButton.CLEAR],
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
