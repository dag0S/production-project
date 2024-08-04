import type { Meta, StoryObj } from "@storybook/react";
import MainPage from "./MainPage";
import { StyleDecorator } from "shared/config/storybook/styleDecorator/styleDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "pages/MainPage",
  component: MainPage,
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [StyleDecorator(Theme.DARK)],
};