import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/storeProvider";
import { IArticle } from "entities/article";

export const fetchArticlesList = createAsyncThunk<
  IArticle[],
  void,
  ThunkConfig<string>
>("articlesPage/fetchArticlesList", async (_, thunkAPI) => {
  try {
    const response = await thunkAPI.extra.api.get<IArticle[]>(`/articles`, {
      params: {
        _expand: "user",
      },
    });

    return response.data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue("error");
  }
});
