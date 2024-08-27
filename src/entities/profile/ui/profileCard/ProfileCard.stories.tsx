import type { Meta, StoryObj } from "@storybook/react";
import { ProfileCard } from "./ProfileCard";
import { Country } from "entities/country";
import { Currency } from "entities/currency";
import avatar from "shared/assets/tests/storybook.jpg";

const meta = {
  title: "entities/ProfileCard",
  component: ProfileCard,
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: {
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
};

export const withError: Story = {
  args: {
    error: "error",
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
