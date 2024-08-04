import type { Meta, StoryObj } from "@storybook/react";
import { AppLink } from "./AppLink";
import { AppLinkTheme } from "./AppLinkProps";
import { StyleDecorator } from "shared/config/storybook/styleDecorator/styleDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/AppLink",
  component: AppLink,
  args: { to: "/" },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Text",
    theme: AppLinkTheme.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    children: "Text",
    theme: AppLinkTheme.SECONDARY,
  },
};

export const Red: Story = {
  args: {
    children: "Text",
    theme: AppLinkTheme.RED,
  },
};

export const PrimaryDark: Story = {
  args: {
    children: "Text",
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [StyleDecorator(Theme.DARK)],
};

export const SecondaryDark: Story = {
  args: {
    children: "Text",
    theme: AppLinkTheme.SECONDARY,
  },
  decorators: [StyleDecorator(Theme.DARK)],
};

export const RedDark: Story = {
  args: {
    children: "Text",
    theme: AppLinkTheme.RED,
  },
  decorators: [StyleDecorator(Theme.DARK)],
};
