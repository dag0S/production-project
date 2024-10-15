import { FC, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { ArticlesPageFiltersProps } from "./ArticlesPageFiltersProps";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { ArticleViewSelector } from "features/articleViewSelector";
import {
  ArticleSortField,
  ArticleSortSelector,
  ArticleType,
  ArticleTypeTabs,
  ArticleView,
} from "entities/article";
import { articlesPageActions } from "../../model/slices/articlesPageSlice";
import { Card } from "shared/ui/card/Card";
import { Input } from "shared/ui/input/Input";
import { SortOrder } from "shared/types/SortOrder";
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList";
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce";
import { TabItem } from "shared/ui/tabs/TabsProps";

import styles from "./ArticlesPageFilters.module.scss";

export const ArticlesPageFilters: FC<ArticlesPageFiltersProps> = ({
  className,
}) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesPageView);
  const sort = useSelector(getArticlesPageSort);
  const order = useSelector(getArticlesPageOrder);
  const search = useSelector(getArticlesPageSearch);
  const type = useSelector(getArticlesPageType);

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 500);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );

  const onChangeSort = useCallback(
    (newSort: ArticleSortField) => {
      dispatch(articlesPageActions.setSort(newSort));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );

  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlesPageActions.setOrder(newOrder));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );

  const onChangeSearch = useCallback(
    (newSearch: string) => {
      dispatch(articlesPageActions.setSearch(newSearch));
      dispatch(articlesPageActions.setPage(1));
      debouncedFetchData();
    },
    [dispatch, debouncedFetchData]
  );

  const onChangeType = useCallback(
    (value: ArticleType) => {
      dispatch(articlesPageActions.setType(value));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, debouncedFetchData]
  );

  return (
    <div
      className={classNames(styles["articles-page-filters"], {}, [className])}
    >
      <div className={styles["sort-wrapper"]}>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </div>
      <Card className={styles["search"]}>
        <Input
          placeholder={t("Поиск")}
          onChange={onChangeSearch}
          value={search}
        />
      </Card>
      <ArticleTypeTabs
        className={styles["tabs"]}
        value={type}
        onChangeType={onChangeType}
      />
    </div>
  );
};
