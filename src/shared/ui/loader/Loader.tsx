import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { LoaderProps } from "./LoaderProps";

import styles from "./Loader.module.scss";

export const Loader: FC<LoaderProps> = ({ className }) => {
  return (
    <div className={styles["container"]}>
      <span className={classNames(styles["loader"], {}, [className])} />
    </div>
  );
};
