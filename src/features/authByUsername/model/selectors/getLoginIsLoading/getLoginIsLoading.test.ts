import { StateSchema } from "app/providers/storeProvider";
import { getLoginIsLoading } from "./getLoginIsLoading";
import { DeepPartial } from "shared/types/DeepPartial";

describe("getLoginIsLoading.test", () => {
  test("should return true", () => {
    const state: DeepPartial<StateSchema> = {
      loginFrom: {
        isLoading: true,
      },
    };
    expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
  });
});
