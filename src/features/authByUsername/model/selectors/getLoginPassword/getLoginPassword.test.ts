import { StateSchema } from "app/providers/storeProvider";
import { getLoginPassword } from "./getLoginPassword";
import { DeepPartial } from "shared/types/DeepPartial";

describe("getLoginPassword.test", () => {
  test("should return value", () => {
    const state: DeepPartial<StateSchema> = {
      loginFrom: {
        password: "123",
      },
    };
    expect(getLoginPassword(state as StateSchema)).toEqual("123");
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual("");
  });
});
