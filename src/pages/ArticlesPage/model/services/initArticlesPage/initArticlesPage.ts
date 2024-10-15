import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/storeProvider";
import { getArticlesPageInited } from "../../selectors/articlesPageSelectors";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { articlesPageActions } from "../../slices/articlesPageSlice";
import { ArticleSortField, ArticleType } from "entities/article";
import { SortOrder } from "shared/types/SortOrder";

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>("articlesPage/initArticlesPage", async (searchParams, thunkAPI) => {
  const inited = getArticlesPageInited(thunkAPI.getState());

  if (!inited) {
    const orderFromUrl = searchParams.get("order") as SortOrder;
    const sortFromUrl = searchParams.get("sort") as ArticleSortField;
    const searchFromUrl = searchParams.get("search");
    const typeFromUrl = searchParams.get("type") as ArticleType;

    if (orderFromUrl) {
      thunkAPI.dispatch(articlesPageActions.setOrder(orderFromUrl));
    }
    if (sortFromUrl) {
      thunkAPI.dispatch(articlesPageActions.setSort(sortFromUrl));
    }
    if (searchFromUrl) {
      thunkAPI.dispatch(articlesPageActions.setSearch(searchFromUrl));
    }
    if (typeFromUrl) {
      thunkAPI.dispatch(articlesPageActions.setType(typeFromUrl));
    }

    thunkAPI.dispatch(articlesPageActions.initState());
    thunkAPI.dispatch(
      fetchArticlesList({
        page: 1,
      })
    );
  }
});
