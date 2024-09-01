import { FC } from "react";
import { IconProps } from "./IconProps";
import { classNames } from "shared/lib/classNames/classNames";

import styles from "./Icon.module.scss";

export const Icon: FC<IconProps> = ({ className, Svg }) => {
  return <Svg className={classNames(styles["icon"], {}, [className])} />;
};
