import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";
import { StyleDecorator } from "shared/config/storybook/styleDecorator/styleDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/Skeleton",
  component: Skeleton,
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    width: "100%",
    height: 200,
  },
};

export const Circle: Story = {
  args: {
    border: "50%",
    width: 100,
    height: 100,
  },
};

export const Dark: Story = {
  args: {
    width: "100%",
    height: 200,
  },
  decorators: [StyleDecorator(Theme.DARK)],
};

export const CircleDark: Story = {
  args: {
    border: "50%",
    width: 100,
    height: 100,
  },
  decorators: [StyleDecorator(Theme.DARK)],
};
