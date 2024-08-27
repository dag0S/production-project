import { StateSchema } from "app/providers/storeProvider";
import { getProfileForm } from "./getProfileForm";
import { DeepPartial } from "shared/types/DeepPartial";
import { Country } from "entities/country";
import { Currency } from "entities/currency";

describe("getProfileForm.test", () => {
  test("should return error", () => {
    const form = {
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
        form,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(form);
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
