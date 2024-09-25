import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/storeProvider";
import { getArticlesPageInited } from "../../selectors/articlesPageSelectors";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { articlesPageActions } from "../../slices/articlesPageSlice";

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>("articlesPage/initArticlesPage", async (_, thunkAPI) => {
  const inited = getArticlesPageInited(thunkAPI.getState());

  if (!inited) {
    thunkAPI.dispatch(articlesPageActions.initState());
    thunkAPI.dispatch(
      fetchArticlesList({
        page: 1,
      })
    );
  }
});
