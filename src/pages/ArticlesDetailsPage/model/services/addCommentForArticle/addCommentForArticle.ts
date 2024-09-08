import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/storeProvider";
import { IComment } from "entities/comment";
import { getUserAuthData } from "entities/user";
import { getArticleDetailsData } from "entities/article";
import { fetchCommentsByArticleId } from "../fetchCommentsByArticleId/fetchCommentsByArticleId";

export const addCommentForArticle = createAsyncThunk<
  IComment,
  string,
  ThunkConfig<string>
>("articleDetails/addCommentForArticle", async (text, thunkAPI) => {
  const userData = getUserAuthData(thunkAPI.getState());
  const article = getArticleDetailsData(thunkAPI.getState());

  if (!userData || !text || !article) {
    return thunkAPI.rejectWithValue("no data");
  }

  try {
    const response = await thunkAPI.extra.api.post<IComment>("/comments", {
      articleId: article.id,
      userId: userData.id,
      text,
    });

    if (!response.data) {
      throw new Error();
    }

    thunkAPI.dispatch(fetchCommentsByArticleId(article.id));

    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue("error");
  }
});
