import { StateSchema } from "app/providers/storeProvider";
import { getCounter } from "./getCounter";

describe("getCounter", () => {
  test("should return counter value", () => {
    const state: StateSchema = {
      counter: { value: 10 },
      user: {},
      scrollSave: { scroll: {} },
    };
    expect(getCounter(state)).toEqual({ value: 10 });
  });
});
