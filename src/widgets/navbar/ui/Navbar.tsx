import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { NavbarProps } from "./NavbarProps";
import { AppLink } from "shared/ui/AppLink/AppLink";

import * as styles from "./Navbar.module.scss";
import { AppLinkTheme } from "shared/ui/AppLink/AppLinkProps";

export const Navbar: FC<NavbarProps> = () => {
  return (
    <div className={classNames(styles["navbar"], {}, [])}>
      <div className={styles["links"]}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/">
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          О сайте
        </AppLink>
      </div>
    </div>
  );
};
