import { FC, memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { ArticleList } from "entities/article";
import { ReducersList } from "shared/lib/components/dynamicModuleLoader/DynamicModuleLoaderProps";
import { DynamicModuleLoader } from "shared/lib/components/dynamicModuleLoader/DynamicModuleLoader";
import {
  articlesPageReducer,
  getArticles,
} from "../../model/slices/articlesPageSlice";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { Page } from "widgets/page";
import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage";
import { ArticlesPageFilters } from "../ArticlesPageFilters/ArticlesPageFilters";

import styles from "./ArticlesPage.module.scss";

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage: FC = () => {
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);
  const [searchParams] = useSearchParams()

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page className={styles["article-page"]} onScrollEnd={onLoadNextPart}>
        <ArticlesPageFilters />
        <ArticleList isLoading={isLoading} view={view} articles={articles} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
