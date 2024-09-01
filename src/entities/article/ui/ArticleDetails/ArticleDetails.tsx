import { FC, memo, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import { DynamicModuleLoader } from "shared/lib/components/dynamicModuleLoader/DynamicModuleLoader";
import { ReducersList } from "shared/lib/components/dynamicModuleLoader/DynamicModuleLoaderProps";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { ArticleDetailsProps } from "./ArticleDetailsProps";
import { classNames } from "shared/lib/classNames/classNames";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "entities/article/model/selectors/articleDetails";
import { Text } from "shared/ui/text/Text";
import { Skeleton } from "shared/ui/skeleton/Skeleton";
import { Avatar } from "shared/ui/avatar/Avatar";
import ViewsIcon from "shared/assets/icons/views.svg";
import DateIcon from "shared/assets/icons/date.svg";
import { TextSize } from "shared/ui/text/TextProps";
import { Icon } from "shared/ui/icon/Icon";
import { ArticleBlock, ArticleBlockType } from "../../model/types/article";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";

import styles from "./ArticleDetails.module.scss";

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails: FC<ArticleDetailsProps> = memo(
  ({ className, id }) => {
    const dispatch = useAppDispatch();
    const article = useSelector(getArticleDetailsData);
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const { t } = useTranslation("article-details");

    const renderBlock = useCallback((block: ArticleBlock) => {
      switch (block.type) {
        case ArticleBlockType.CODE:
          return <ArticleCodeBlockComponent key={block.id} block={block} />;
        case ArticleBlockType.IMAGE:
          return <ArticleImageBlockComponent key={block.id} block={block} />;
        case ArticleBlockType.TEXT:
          return <ArticleTextBlockComponent key={block.id} block={block} />;
        default:
          return null;
      }
    }, []);

    useEffect(() => {
      if (__PROJECT__ !== "storybook") {
        dispatch(fetchArticleById(id));
      }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
      content = (
        <div className={styles["wrapper"]}>
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
      content = (
        <div className={styles["wrapper"]}>
          <Avatar className={styles["avatar"]} src={article?.img} size={200} />
          <Text
            title={article?.title}
            text={article?.subtitle}
            size={TextSize.L}
          />
          <div className={styles["article-info-wrapper"]}>
            <div className={styles["article-info"]}>
              <Icon Svg={ViewsIcon} />
              <Text text={String(article?.views)} />
            </div>
            <div className={styles["article-info"]}>
              <Icon Svg={DateIcon} />
              <Text text={article?.createdAt} />
            </div>
          </div>
          {article?.blocks.map(renderBlock)}
        </div>
      );
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
