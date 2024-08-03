import { FC, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { SidebarProps } from "./SidebarProps";
import { ThemeSwitcher } from "widgets/themeSwitcher";
import { LangSwitcher } from "widgets/langSwitcher";
import { Button } from "shared/ui/button/Button";

import styles from "./Sidebar.module.scss";

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

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
      <Button data-testid="sidebar-toggle" onClick={onToggle}>
        toggle
      </Button>
      <div className={styles["switchers"]}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
