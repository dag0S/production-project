import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/storeProvider";
import { IComment } from "entities/comment";
import { getAddNewCommentText } from "../../selectors/addNewCommentSelector";
import { getUserAuthData } from "entities/user";
import { getArticleDetailsData } from "entities/article";
import { addNewCommentActions } from "../../slices/addNewCommentSlice";

export const sendComment = createAsyncThunk<
  IComment,
  void,
  ThunkConfig<string>
>("addNewComment/sendComment", async (_, thunkAPI) => {
  const userData = getUserAuthData(thunkAPI.getState());
  const text = getAddNewCommentText(thunkAPI.getState());
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

    thunkAPI.dispatch(addNewCommentActions.setText(""));

    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue("error");
  }
});
