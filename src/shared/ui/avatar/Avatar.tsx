import { CSSProperties, FC, useMemo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { AvatarProps } from "./AvatarProps";

import styles from "./Avatar.module.scss";

export const Avatar: FC<AvatarProps> = ({ src, className, size, alt }) => {
  const inlineStyles = useMemo<CSSProperties>(
    () => ({
      width: size || 100,
      height: size || 100,
    }),
    [size]
  );

  return (
    <img
      className={classNames(styles["avatar"], {}, [className])}
      style={inlineStyles}
      src={src}
      alt={alt}
    />
  );
};
