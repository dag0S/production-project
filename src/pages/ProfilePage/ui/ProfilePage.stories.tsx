import type { Meta, StoryObj } from "@storybook/react";
import ProfilePage from "./ProfilePage";
import { StyleDecorator } from "shared/config/storybook/styleDecorator/styleDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/storeDecorator/storeDecorator";
import { Currency } from "entities/currency";
import { Country } from "entities/country";
import avatar from "shared/assets/tests/storybook.jpg";

const meta = {
  title: "pages/ProfilePage",
  component: ProfilePage,
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [
    StoreDecorator({
      profile: {
        form: {
          firstName: "Данила",
          lastName: "Государев",
          age: 20,
          city: "Moscow",
          country: Country.Russia,
          currency: Currency.RUB,
          username: "dag0S",
          avatar,
        },
      },
    }),
  ],
};

export const Dark: Story = {
  decorators: [
    StyleDecorator(Theme.DARK),
    StoreDecorator({
      profile: {
        form: {
          firstName: "Данила",
          lastName: "Государев",
          age: 20,
          city: "Moscow",
          country: Country.Russia,
          currency: Currency.RUB,
          username: "dag0S",
          avatar,
        },
      },
    }),
  ],
};
