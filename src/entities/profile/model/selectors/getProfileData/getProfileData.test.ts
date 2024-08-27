import { StateSchema } from "app/providers/storeProvider";
import { getProfileData } from "./getProfileData";
import { DeepPartial } from "shared/types/DeepPartial";
import { Country } from "entities/country";
import { Currency } from "entities/currency";

describe("getProfileData.test", () => {
  test("should return error", () => {
    const data = {
      firstName: "Данила",
      lastName: "Государев",
      age: 20,
      city: "Moscow",
      country: Country.Russia,
      currency: Currency.RUB,
      username: "dag0S",
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
