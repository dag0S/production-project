import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/storeProvider";
import { IProfile } from "../../types/profile";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";

export const updateProfileData = createAsyncThunk<
  IProfile,
  void,
  ThunkConfig<string>
>("profile/updateProfileData", async (_, thunkAPI) => {
  const formData = getProfileForm(thunkAPI.getState());

  try {
    const response = await thunkAPI.extra.api.put<IProfile>(
      "/profile",
      formData
    );

    return response.data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue("error");
  }
});
