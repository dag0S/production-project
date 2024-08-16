import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";
import { Theme } from "app/providers/ThemeProvider";
import { StyleDecorator } from "shared/config/storybook/styleDecorator/styleDecorator";
import { StoreDecorator } from "shared/config/storybook/storeDecorator/storeDecorator";

const meta = {
  title: "widgets/Navbar",
  component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [
    StoreDecorator({
      user: undefined,
    }),
  ],
};

export const Dark: Story = {
  decorators: [
    StyleDecorator(Theme.DARK),
    StoreDecorator({
      user: undefined,
    }),
  ],
};

export const AuthNavbar: Story = {
  decorators: [
    StoreDecorator({
      user: { authData: {} },
    }),
  ],
};
