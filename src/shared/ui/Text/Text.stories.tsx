import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";
import { StyleDecorator } from "shared/config/storybook/styleDecorator/styleDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { TextSize, TextTheme } from "./TextProps";

const meta = {
  title: "shared/Text",
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Title lorem ipsun",
    text: "Description",
  },
};

export const Error: Story = {
  args: {
    title: "Title lorem ipsun",
    text: "Description",
    theme: TextTheme.ERROR,
  },
};

export const onlyTitle: Story = {
  args: {
    title: "Title lorem ipsun",
  },
};

export const onlyText: Story = {
  args: {
    text: "Description",
  },
};

export const PrimaryDark: Story = {
  args: {
    title: "Title lorem ipsun",
    text: "Description",
  },
  decorators: [StyleDecorator(Theme.DARK)],
};

export const onlyTitleDark: Story = {
  args: {
    title: "Title lorem ipsun",
  },
  decorators: [StyleDecorator(Theme.DARK)],
};

export const onlyTextDark: Story = {
  args: {
    text: "Description",
  },
  decorators: [StyleDecorator(Theme.DARK)],
};

export const SizeL: Story = {
  args: {
    title: "Title",
    text: "Description",
    size: TextSize.L
  },
  decorators: [StyleDecorator(Theme.DARK)],
};