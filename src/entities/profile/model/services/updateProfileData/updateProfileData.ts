import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/storeProvider";
import { IProfile, ValidateProfileError } from "../../types/profile";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";
import { validateProfileData } from "../validateProfileData/validateProfileData";

export const updateProfileData = createAsyncThunk<
  IProfile,
  void,
  ThunkConfig<ValidateProfileError[]>
>("profile/updateProfileData", async (_, thunkAPI) => {
  const formData = getProfileForm(thunkAPI.getState());
  const errors = validateProfileData(formData);

  if (errors.length) {
    return thunkAPI.rejectWithValue(errors);
  }

  try {
    const response = await thunkAPI.extra.api.put<IProfile>(
      "/profile",
      formData
    );

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue([ValidateProfileError.SERVER_ERROR]);
  }
});
