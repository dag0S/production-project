import { FC, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { SidebarProps } from "./SidebarProps";
import { ThemeSwitcher } from "widgets/themeSwitcher";
import { LangSwitcher } from "widgets/langSwitcher";
import { Button } from "shared/ui/button/Button";
import { ButtonSize, ButtonTheme } from "shared/ui/button/ButtonProps";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { AppLinkTheme } from "shared/ui/AppLink/AppLinkProps";
import { useTranslation } from "react-i18next";
import { RoutePath } from "app/providers/router/config/routeConfig";
import AboutIcon from "shared/assets/icons/about-us.svg";
import MainIcon from "shared/assets/icons/main.svg";

import styles from "./Sidebar.module.scss";

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(
        styles["sidebar"],
        { [styles["collapsed"]]: collapsed },
        [className]
      )}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={styles["collapsed-btn"]}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={styles["items"]}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.main}
          className={styles["item"]}
        >
          <MainIcon className={styles["icon"]} />
          <span className={styles["link"]}>{t("Главная")}</span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.about}
          className={styles["item"]}
        >
          <AboutIcon className={styles["icon"]} />
          <span className={styles["link"]}>{t("О сайте")}</span>
        </AppLink>
      </div>
      <div className={styles["switchers"]}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  );
};
