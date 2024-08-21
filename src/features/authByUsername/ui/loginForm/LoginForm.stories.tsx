import type { Meta, StoryObj } from "@storybook/react";
import LoginForm from "./LoginForm";
import { StoreDecorator } from "shared/config/storybook/storeDecorator/storeDecorator";

const meta = {
  title: "features/LoginForm",
  component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  decorators: [
    StoreDecorator({
      loginFrom: { username: "123", password: "123" },
    }),
  ],
};

export const withError: Story = {
  decorators: [
    StoreDecorator({
      loginFrom: {
        username: "123",
        password: "123",
        error: "Error!",
      },
    }),
  ],
};

export const Loading: Story = {
  decorators: [
    StoreDecorator({
      loginFrom: {
        isLoading: true,
      },
    }),
  ],
};
