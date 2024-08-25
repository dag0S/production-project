import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/storeProvider";
import { IUser, userActions } from "entities/user";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  IUser,
  LoginByUsernameProps,
  ThunkConfig<string>
>("login/loginByUserName", async ({ username, password }, thunkAPI) => {
  try {
    const response = await thunkAPI.extra.api.post<IUser>("/login", {
      username,
      password,
    });

    if (!response.data) {
      throw new Error();
    }

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
    thunkAPI.dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue("error");
  }
});
