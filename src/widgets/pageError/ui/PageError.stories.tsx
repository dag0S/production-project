import type { Meta, StoryObj } from "@storybook/react";
import { PageError } from "./PageError";
import { StyleDecorator } from "shared/config/storybook/styleDecorator/styleDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "widgets/PageError",
  component: PageError,
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [StyleDecorator(Theme.DARK)],
};
