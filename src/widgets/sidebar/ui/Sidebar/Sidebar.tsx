import { FC, memo, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { SidebarProps } from "./SidebarProps";
import { ThemeSwitcher } from "widgets/themeSwitcher";
import { LangSwitcher } from "widgets/langSwitcher";
import { Button } from "shared/ui/button/Button";
import { ButtonSize, ButtonTheme } from "shared/ui/button/ButtonProps";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { getSidebarItems } from "../../model/selectors/getSidevarItems";

import styles from "./Sidebar.module.scss";

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemsList = useSelector(getSidebarItems);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(
    () =>
      sidebarItemsList.map((item) => (
        <SidebarItem key={item.path} item={item} collapsed={collapsed} />
      )),
    [collapsed, sidebarItemsList]
  );

  return (
    <menu
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
      <div className={styles["items"]}>{itemsList}</div>
      <div className={styles["switchers"]}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </menu>
  );
});
