import { FC, memo } from "react";
import { TextAlign, TextProps, TextTheme } from "./TextProps";
import { classNames } from "shared/lib/classNames/classNames";

import styles from "./Text.module.scss";

export const Text: FC<TextProps> = memo(
  ({
    className,
    text,
    title,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
  }) => {
    return (
      <div
        className={classNames(styles[""], {}, [
          className,
          styles[theme],
          styles[align],
        ])}
      >
        {title && <p className={styles["title"]}>{title}</p>}
        {text && <p className={styles["text"]}>{text}</p>}
      </div>
    );
  }
);
