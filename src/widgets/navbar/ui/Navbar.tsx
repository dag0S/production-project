import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { NavbarProps } from "./NavbarProps";

import styles from "./Navbar.module.scss";

export const Navbar: FC<NavbarProps> = () => {

  return (
    <div className={classNames(styles["navbar"], {}, [])}>
      <div className={styles["links"]}>
        /
      </div>
    </div>
  );
};
