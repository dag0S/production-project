import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";
import { StyleDecorator } from "shared/config/storybook/styleDecorator/styleDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/storeDecorator/storeDecorator";

const meta = {
  title: "widgets/Sidebar",
  component: Sidebar,
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [StoreDecorator({ user: { authData: {} } })],
};

export const Dark: Story = {
  decorators: [
    StyleDecorator(Theme.DARK),
    StoreDecorator({ user: { authData: {} } }),
  ],
};

export const NoAuth: Story = {
  decorators: [StyleDecorator(Theme.DARK), StoreDecorator({ user: {} })],
};
