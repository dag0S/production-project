import { StateSchema } from "app/providers/storeProvider";
import { getProfileError } from "./getProfileError";
import { DeepPartial } from "shared/types/DeepPartial";

describe("getProfileError.test", () => {
  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: "123",
      },
    };
    expect(getProfileError(state as StateSchema)).toEqual("123");
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });
});
