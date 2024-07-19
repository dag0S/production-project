import { FC, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { SidebarProps } from "./SidebarProps";
import { ThemeSwitcher } from "widgets/themeSwitcher";

import * as styles from "./Sidebar.module.scss";

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(
        styles["sidebar"],
        { [styles["collapsed"]]: collapsed },
        [className]
      )}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={styles['switchers']}>
        <ThemeSwitcher />
        {/* LangSwitcher */}
      </div>
    </div>
  );
};
