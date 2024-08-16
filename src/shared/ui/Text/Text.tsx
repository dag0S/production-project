import { FC } from "react";
import { TextProps, TextTheme } from "./TextProps";
import { classNames } from "shared/lib/classNames/classNames";

import styles from "./Text.module.scss";

export const Text: FC<TextProps> = ({
  className,
  text,
  title,
  theme = TextTheme.PRIMARY,
}) => {
  return (
    <div className={classNames(styles[""], {}, [className, styles[theme]])}>
      {title && <p className={styles["title"]}>{title}</p>}
      {text && <p className={styles["text"]}>{text}</p>}
    </div>
  );
};
