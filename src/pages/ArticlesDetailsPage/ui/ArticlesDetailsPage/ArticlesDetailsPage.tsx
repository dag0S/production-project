import { FC, memo } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { ArticleDetails } from "entities/article";
import { Text } from "shared/ui/text/Text";
import { CommentList } from "entities/comment";
import { DynamicModuleLoader } from "shared/lib/components/dynamicModuleLoader/DynamicModuleLoader";
import { ReducersList } from "shared/lib/components/dynamicModuleLoader/DynamicModuleLoaderProps";
import {
  articleDetailsCommentReducer,
  getArticleComments,
} from "../../model/slices/ArticleDetailsCommentsSlice";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";

import styles from "./ArticlesDetailsPage.module.scss";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchCommentsByArticleId } from "pages/ArticlesDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentReducer,
};

const ArticlesDetailsPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation("article-details");
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);
  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(Number(id)));
  });

  if (!id) {
    return <div>{t("Статья не найдена")}</div>;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={styles["articles-details-page"]}>
        <ArticleDetails id={Number(id)} />
        <Text
          className={styles["articles-details-page__comment-title"]}
          title={t("Комментарии")}
        />
        <CommentList
          isLoading={isLoading}
          className={styles["articles-details-page__comment-list"]}
          comments={comments}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesDetailsPage);
