import { FC, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ArticleView } from "../../model/types/article";
import { Card } from "shared/ui/card/Card";
import { Skeleton } from "shared/ui/skeleton/Skeleton";

import styles from "./ArticleListItem.module.scss";

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = memo(
  ({ view, className }) => {
    if (view === ArticleView.BIG) {
      return (
        <div
          className={classNames(styles["article-list-item"], {}, [
            className,
            styles[view],
          ])}
        >
          <Card className={styles["card"]}>
            <div className={styles["card__header"]}>
              <Skeleton width={30} height={30} border="50%" />
              <Skeleton
                className={styles["card__username"]}
                width={150}
                height={16}
              />
              <Skeleton
                className={styles["card__date"]}
                width={150}
                height={16}
              />
            </div>
            <Skeleton
              className={styles["card__title"]}
              width={250}
              height={24}
            />
            <Skeleton className={styles["card__img"]} height={200} />
            <div className={styles["card__footer"]}>
              <Skeleton height={36} width={200} />
            </div>
          </Card>
        </div>
      );
    }

    return (
      <div
        className={classNames(styles["article-list-item"], {}, [
          className,
          styles[view],
        ])}
      >
        <Card className={styles["card"]}>
          <div className={styles["card__img-wrapper"]}>
            <Skeleton
              className={styles["card__img"]}
              width={200}
              height={200}
            />
          </div>
          <div className={styles["card__info-wrapper"]}>
            <Skeleton width={130} height={16} />
          </div>
          <Skeleton className={styles["card__title"]} width={150} height={16} />
        </Card>
      </div>
    );
  }
);
