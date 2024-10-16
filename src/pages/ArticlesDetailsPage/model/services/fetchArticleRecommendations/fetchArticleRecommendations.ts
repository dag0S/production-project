import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/storeProvider";
import { IArticle } from "entities/article";

export const fetchArticleRecommendations = createAsyncThunk<
  IArticle[],
  void,
  ThunkConfig<string>
>("articlesPage/fetchArticleRecommendations", async (_, thunkAPI) => {
  try {
    const response = await thunkAPI.extra.api.get<IArticle[]>(`/articles`, {
      params: {
        _limit: 4,
      },
    });

    return response.data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue("error");
  }
});
