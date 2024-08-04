import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { ThemeButton } from "./ButtonProps";
import { StyleDecorator } from "shared/config/storybook/styleDecorator/styleDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Text",
  },
};

export const Clear: Story = {
  args: {
    children: "Text",
    theme: ThemeButton.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    children: "Text",
    theme: ThemeButton.OUTLINE,
  },
};

export const OutlineDARK: Story = {
  args: {
    children: "Text",
    theme: ThemeButton.OUTLINE,
  },
  decorators: [StyleDecorator(Theme.DARK)]
};
