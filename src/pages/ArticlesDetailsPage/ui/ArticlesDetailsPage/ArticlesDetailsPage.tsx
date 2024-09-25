import { FC, memo, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchCommentsByArticleId } from "pages/ArticlesDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { AddNewComment } from "features/addNewComment";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { Button } from "shared/ui/button/Button";
import { ButtonTheme } from "shared/ui/button/ButtonProps";
import { RoutePath } from "app/providers/router/config/routeConfig";
import { Page } from "widgets/page";

import styles from "./ArticlesDetailsPage.module.scss";

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentReducer,
};

const ArticlesDetailsPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation("article-details");
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch]
  );

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(Number(id)));
  });

  if (!id) {
    return <div>{t("Статья не найдена")}</div>;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={styles["articles-details-page"]}>
        <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
          {t("Назад к списку")}
        </Button>
        <ArticleDetails id={Number(id)} />
        <Text
          className={styles["articles-details-page__comment-title"]}
          title={t("Комментарии")}
        />
        <AddNewComment onSendComment={onSendComment} />
        <CommentList
          isLoading={isLoading}
          className={styles["articles-details-page__comment-list"]}
          comments={comments}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesDetailsPage);
