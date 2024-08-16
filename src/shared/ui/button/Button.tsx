import { FC } from "react";
import { ButtonProps, ButtonSize } from "./ButtonProps";
import { classNames } from "shared/lib/classNames/classNames";

import styles from "./Button.module.scss";

export const Button: FC<ButtonProps> = ({
  children,
  className,
  theme,
  square,
  size = ButtonSize.M,
  disabled,
  ...otherProps
}) => {
  const mods: Record<string, boolean> = {
    [styles["square"]]: square,
    [styles["disabled"]]: disabled,
  };

  const additional = [className, styles[theme], styles[size]];

  return (
    <button
      className={classNames(styles["button"], mods, additional)}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};
