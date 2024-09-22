import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { CardProps } from "./CardProps";

import styles from "./Card.module.scss";

export const Card: FC<CardProps> = ({ className, children, ...otherProps }) => {
  return (
    <div
      className={classNames(styles["card"], {}, [className])}
      {...otherProps}
    >
      {children}
    </div>
  );
};
