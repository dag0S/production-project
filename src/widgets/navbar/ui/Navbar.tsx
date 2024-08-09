import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { NavbarProps } from "./NavbarProps";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { AppLinkTheme } from "shared/ui/AppLink/AppLinkProps";

import styles from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";

export const Navbar: FC<NavbarProps> = () => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles["navbar"], {}, [])}>
      <div className={styles["links"]}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/">
          {t("Главная")}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          {t("О сайте")}
        </AppLink>
      </div>
    </div>
  );
};
