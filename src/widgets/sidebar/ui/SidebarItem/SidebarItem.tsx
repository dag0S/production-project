import { FC, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { SidebarItemProps } from "./SidebarItemProps";
import { AppLink } from "shared/ui/appLink/AppLink";
import { AppLinkTheme } from "shared/ui/appLink/AppLinkProps";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/user";

import styles from "./SidebarItem.module.scss";

export const SidebarItem: FC<SidebarItemProps> = memo(
  ({ className, collapsed, item }) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.isAuthenticated && !isAuth) {
      return null;
    }

    return (
      <AppLink
        theme={AppLinkTheme.SECONDARY}
        to={item.path}
        className={classNames(
          styles["item"],
          { [styles["collapsed"]]: collapsed },
          [className]
        )}
      >
        <item.Icon className={styles["icon"]} />
        <span className={styles["link"]}>{t(item.text)}</span>
      </AppLink>
    );
  }
);
