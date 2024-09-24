import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/storeProvider";
import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNum,
} from "../../selectors/articlesPageSelectors";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { articlesPageActions } from "../../slices/articlesPageSlice";

export const fetchNextArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>("articlesPage/fetchNextArticlesPage", async (_, thunkAPI) => {
  const hasMore = getArticlesPageHasMore(thunkAPI.getState());
  const page = getArticlesPageNum(thunkAPI.getState());
  const isLoading = getArticlesPageIsLoading(thunkAPI.getState());

  if (hasMore && !isLoading) {
    thunkAPI.dispatch(articlesPageActions.setPage(page + 1));
    thunkAPI.dispatch(
      fetchArticlesList({
        page: page + 1,
      })
    );
  }
});
