import { FC, memo, useEffect } from "react";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import { DynamicModuleLoader } from "shared/lib/components/dynamicModuleLoader/DynamicModuleLoader";
import { ReducersList } from "shared/lib/components/dynamicModuleLoader/DynamicModuleLoaderProps";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { ArticleDetailsProps } from "./ArticleDetailsProps";
import { classNames } from "shared/lib/classNames/classNames";
import { useSelector } from "react-redux";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "entities/article/model/selectors/articleDetails";

import styles from "./ArticleDetails.module.scss";
import { Text } from "shared/ui/text/Text";
import { useTranslation } from "react-i18next";
import { Skeleton } from "shared/ui/skeleton/Skeleton";

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails: FC<ArticleDetailsProps> = memo(
  ({ className, id }) => {
    const dispatch = useAppDispatch();
    const article = useSelector(getArticleDetailsData);
    const isLoading = true;
    // const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const { t } = useTranslation("article");
    // 28 40
    useEffect(() => {
      dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
      content = (
        <div className={styles["skeleton-wrapper"]}>
          <Skeleton
            className={styles["avatar"]}
            width={200}
            height={200}
            border="50%"
          />
          <Skeleton width={300} height={32} />
          <Skeleton width={600} height={24} />
          <Skeleton width="100%" height={200} />
          <Skeleton width="100%" height={200} />
        </div>
      );
    } else if (error) {
      content = <Text text={t("Произошла ошибка при загрузке статьи.")} />;
    } else {
      content = <div>Article Details</div>;
    }

    return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <div className={classNames(styles["article-details"], {}, [className])}>
          {content}
        </div>
      </DynamicModuleLoader>
    );
  }
);
