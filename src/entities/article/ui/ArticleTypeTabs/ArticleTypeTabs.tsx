import { FC, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Tabs } from "shared/ui/tabs/Tabs";
import { ArticleTypeTabsProps } from "./ArticleTypeTabsProps";
import { classNames } from "shared/lib/classNames/classNames";
import { ArticleType } from "entities/article/model/types/article";
import { TabItem } from "shared/ui/tabs/TabsProps";

export const ArticleTypeTabs: FC<ArticleTypeTabsProps> = ({
  className,
  value,
  onChangeType,
}) => {
  const { t } = useTranslation();
  const typeTabs = useMemo<TabItem[]>(
    () => [
      {
        value: ArticleType.All,
        content: t("Все статьи"),
      },
      {
        value: ArticleType.Backend,
        content: "Backend",
      },
      {
        value: ArticleType["C++"],
        content: "C++",
      },
      {
        value: ArticleType.CSS,
        content: "CSS",
      },
      {
        value: ArticleType.DataBase,
        content: t("Базы данных"),
      },
      {
        value: ArticleType.Frontend,
        content: "Frontend",
      },
      {
        value: ArticleType.Gamedev,
        content: "Gamedev",
      },
      {
        value: ArticleType.IT,
        content: t("Айти"),
      },
      {
        value: ArticleType.JavaScript,
        content: "JavaScript",
      },
      {
        value: ArticleType.Linux,
        content: "Linux",
      },
      {
        value: ArticleType.NodeJS,
        content: "NodeJS",
      },
      {
        value: ArticleType.OS,
        content: t("ОС"),
      },
      {
        value: ArticleType.PHP,
        content: "PHP",
      },
      {
        value: ArticleType.Python,
        content: "Python",
      },
      {
        value: ArticleType.React,
        content: "React",
      },
      {
        value: ArticleType.Redux,
        content: "Redux",
      },
      {
        value: ArticleType.SQL,
        content: "SQL",
      },
      {
        value: ArticleType.TypeScript,
        content: "TypeScript",
      },
      {
        value: ArticleType.Unity,
        content: "Unity",
      },
    ],
    [t]
  );

  const onTabClick = useCallback(
    (tab: TabItem) => {
      onChangeType(tab.value as ArticleType);
    },
    [onChangeType]
  );

  return (
    <Tabs
      className={classNames("", {}, [className])}
      tabs={typeTabs}
      value={value}
      onTabClick={onTabClick}
    />
  );
};
