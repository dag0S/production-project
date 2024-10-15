import { FC } from "react";
import { ArticleListProps } from "./ArticleListProps";
import { ArticleView, IArticle } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { classNames } from "shared/lib/classNames/classNames";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";

import styles from "./ArticleList.module.scss";
import { Text } from "shared/ui/text/Text";
import { useTranslation } from "react-i18next";
import { TextSize } from "shared/ui/text/TextProps";

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((_, index) => <ArticleListItemSkeleton view={view} key={index} />);
};

export const ArticleList: FC<ArticleListProps> = ({
  className,
  articles,
  isLoading,
  view = ArticleView.SMALL,
}) => {
  const { t } = useTranslation();

  const renderArticle = (article: IArticle) => {
    return <ArticleListItem article={article} key={article.id} view={view} />;
  };

  if (!isLoading && !articles.length) {
    return (
      <div
        className={classNames(styles["article-list"], {}, [
          className,
          styles[view],
        ])}
      >
        <Text title={t("Статьи не найдены")} size={TextSize.L} />
      </div>
    );
  }

  return (
    <div
      className={classNames(styles["article-list"], {}, [
        className,
        styles[view],
      ])}
    >
      {articles.length > 0 ? articles.map(renderArticle) : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
};
