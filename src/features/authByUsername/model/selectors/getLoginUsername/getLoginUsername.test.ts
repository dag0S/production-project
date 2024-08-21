import { StateSchema } from "app/providers/storeProvider";
import { getLoginUsername } from "./getLoginUsername";
import { DeepPartial } from "shared/types/DeepPartial";

describe("getLoginUsername.test", () => {
  test("should return value", () => {
    const state: DeepPartial<StateSchema> = {
      loginFrom: {
        username: "admin",
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual("admin");
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual("");
  });
});
