import { CSSProperties, FC } from "react";
import { SkeletonProps } from "./SkeletonProps";
import { classNames } from "shared/lib/classNames/classNames";

import styles from "./Skeleton.module.scss";

export const Skeleton: FC<SkeletonProps> = ({
  className,
  height,
  width,
  border,
}) => {
  const stylesInline: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return (
    <div
      className={classNames(styles["skeleton"], {}, [className])}
      style={stylesInline}
    />
  );
};
