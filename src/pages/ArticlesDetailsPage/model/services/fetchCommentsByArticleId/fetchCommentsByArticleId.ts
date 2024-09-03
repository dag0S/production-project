import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/storeProvider";
import { IComment } from "entities/comment";

export const fetchCommentsByArticleId = createAsyncThunk<
  IComment[],
  number | undefined,
  ThunkConfig<string>
>("articleDetails/fetchCommentsByArticleId", async (articleId, thunkAPI) => {
  if (!articleId) {
    return thunkAPI.rejectWithValue("error");
  }

  try {
    const response = await thunkAPI.extra.api.get<IComment[]>(`/comments`, {
      params: {
        articleId,
        _expand: "user",
      },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue("error");
  }
});
