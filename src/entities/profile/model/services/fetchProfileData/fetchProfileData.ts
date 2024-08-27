import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/storeProvider";
import { IProfile } from "../../types/profile";

export const fetchProfileData = createAsyncThunk<
  IProfile,
  void,
  ThunkConfig<string>
>("profile/fetchProfileData", async (_, thunkAPI) => {
  try {
    const response = await thunkAPI.extra.api.get<IProfile>("/profile");

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue("error");
  }
});
