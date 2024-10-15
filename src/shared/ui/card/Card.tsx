import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { CardProps, CardTheme } from "./CardProps";

import styles from "./Card.module.scss";

export const Card: FC<CardProps> = ({ className, children, theme = CardTheme.NORMAL, ...otherProps }) => {
  return (
    <div
      className={classNames(styles["card"], {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </div>
  );
};
