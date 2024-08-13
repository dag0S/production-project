import { StateSchema } from "app/providers/storeProvider";
import { getCounterValue } from "./getCounterValue";

describe("getCounterValue.test", () => {
  test("should return value", () => {
    const state: StateSchema = {
      counter: { value: 10 }, user: {}
    };
    expect(getCounterValue(state)).toEqual(10);
  });
});
