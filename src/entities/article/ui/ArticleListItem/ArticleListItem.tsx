import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { ArticleListItemProps } from "./ArticleListItemProps";
import { classNames } from "shared/lib/classNames/classNames";
import {
  ArticleBlockType,
  ArticleTextBlock,
  ArticleView,
} from "../../model/types/article";
import { Text } from "shared/ui/text/Text";
import { Icon } from "shared/ui/icon/Icon";
import ViewsIcon from "shared/assets/icons/views.svg";
import { Card } from "shared/ui/card/Card";
import { Avatar } from "shared/ui/avatar/Avatar";
import { Button } from "shared/ui/button/Button";
import { ButtonTheme } from "shared/ui/button/ButtonProps";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { RoutePath } from "app/providers/router/config/routeConfig";
import { AppLink } from "shared/ui/appLink/AppLink";

import styles from "./ArticleListItem.module.scss";

export const ArticleListItem: FC<ArticleListItemProps> = memo(
  ({ className, article, view, target }) => {
    const { t } = useTranslation();

    const types = (
      <Text className={styles["card__types"]} text={article.type.join(", ")} />
    );
    const views = (
      <>
        <Text className={styles["card__views"]} text={String(article.views)} />
        <Icon Svg={ViewsIcon} />
      </>
    );
    const img = (
      <img
        className={styles["card__img"]}
        src={article.img}
        alt={article.title}
      />
    );

    if (view === ArticleView.BIG) {
      const textBlock = article.blocks.find(
        (block) => block.type === ArticleBlockType.TEXT
      ) as ArticleTextBlock;

      return (
        <div
          className={classNames(styles["article-list-item"], {}, [
            className,
            styles[view],
          ])}
        >
          <Card className={styles["card"]}>
            <div className={styles["card__header"]}>
              <Avatar src={article.user.avatar} size={30} />
              <Text
                className={styles["card__username"]}
                text={article.user.username}
              />
              <Text className={styles["card__date"]} text={article.createdAt} />
            </div>
            <Text className={styles["card__title"]} title={article.title} />
            {types}
            {img}
            {textBlock && (
              <ArticleTextBlockComponent
                className={styles["card__text-block"]}
                block={textBlock}
              />
            )}
            <div className={styles["card__footer"]}>
              <AppLink
                to={RoutePath.articles_details + article.id}
                target={target}
              >
                <Button theme={ButtonTheme.OUTLINE}>
                  {t("Читать далее...")}
                </Button>
              </AppLink>
              {views}
            </div>
          </Card>
        </div>
      );
    }

    return (
      <AppLink
        className={classNames(styles["article-list-item"], {}, [
          className,
          styles[view],
        ])}
        to={RoutePath.articles_details + article.id}
        target={target}
      >
        <Card className={styles["card"]}>
          <div className={styles["card__img-wrapper"]}>
            {img}
            <Text className={styles["card__date"]} text={article.createdAt} />
          </div>
          <div className={styles["card__info-wrapper"]}>
            {types}
            {views}
          </div>
          <Text className={styles["card__title"]} text={article.title} />
        </Card>
      </AppLink>
    );
  }
);
