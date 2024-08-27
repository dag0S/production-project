import { StateSchema } from "app/providers/storeProvider";
import { getProfileValidateErrors } from "./getProfileValidateErrors";
import { DeepPartial } from "shared/types/DeepPartial";
import { ValidateProfileError } from "../../types/profile";

describe("getProfileValidateErrors.test", () => {
  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError: [
          ValidateProfileError.INCORRECT_AGE,
          ValidateProfileError.INCORRECT_COUNTRY,
        ],
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
