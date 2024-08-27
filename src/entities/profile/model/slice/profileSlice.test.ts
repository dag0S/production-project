import { DeepPartial } from "shared/types/DeepPartial";
import { profileActions, profileReducer } from "./profileSlice";
import { ProfileSchema, ValidateProfileError } from "../types/profile";
import { Country } from "entities/country";
import { Currency } from "entities/currency";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";

const data = {
  firstName: "Данила",
  lastName: "Государев",
  age: 20,
  city: "Moscow",
  country: Country.Russia,
  currency: Currency.RUB,
  username: "dag0S",
};

describe("profileSlice.test", () => {
  test("test set readonly", () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(true))
    ).toEqual({ readonly: true });
  });

  test("test cancel edit", () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
      form: { username: "" },
    };
    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit())
    ).toEqual({ readonly: true, validateError: undefined, data, form: data });
  });

  test("test update profile", () => {
    const state: DeepPartial<ProfileSchema> = {
      form: { username: "123123" },
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ username: "123" })
      )
    ).toEqual({ form: { username: "123" } });
  });

  test("test update profile service pending", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateError: [ValidateProfileError.SERVER_ERROR],
    };
    const action = { type: updateProfileData.pending.type };
    expect(profileReducer(state as ProfileSchema, action)).toEqual({
      isLoading: true,
      validateError: undefined,
    });
  });

  test("test update profile service fulfilled", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      validateError: [ValidateProfileError.SERVER_ERROR],
    };
    const action = { type: updateProfileData.fulfilled.type, payload: data };
    expect(profileReducer(state as ProfileSchema, action)).toEqual({
      isLoading: false,
      validateError: undefined,
      readonly: true,
      form: data,
      data,
    });
  });
});
