import { FC, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { TabItem, TabsProps } from "./TabsProps";
import { Card } from "../card/Card";
import { CardTheme } from "../card/CardProps";

import styles from "./Tabs.module.scss";

export const Tabs: FC<TabsProps> = ({ className, tabs, value, onTabClick }) => {
  const clickHandler = useCallback((tab: TabItem) => {
    return () => {
      onTabClick(tab);
    };
  }, []);

  return (
    <div className={classNames(styles["tabs"], {}, [className])}>
      {tabs.map((tab) => (
        <Card
          className={styles["tab"]}
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINE}
          onClick={clickHandler(tab)}
          key={tab.value}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};
