import { FC, memo } from "react";
import { ButtonProps, ButtonSize, ButtonTheme } from "./ButtonProps";
import { classNames, Mods } from "shared/lib/classNames/classNames";

import styles from "./Button.module.scss";

export const Button: FC<ButtonProps> = memo(
  ({
    children,
    className,
    theme = ButtonTheme.OUTLINE,
    square,
    size = ButtonSize.M,
    disabled,
    ...otherProps
  }) => {
    const mods: Mods = {
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
  }
);
