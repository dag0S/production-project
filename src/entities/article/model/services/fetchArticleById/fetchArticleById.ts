import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/storeProvider";
import { IArticle } from "../../types/article";

export const fetchArticleById = createAsyncThunk<
  IArticle,
  number,
  ThunkConfig<string>
>("articleDetails/fetchArticleById", async (articleId, thunkAPI) => {
  try {
    const response = await thunkAPI.extra.api.get<IArticle>(`/articles/${articleId}`);

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue("error");
  }
});
