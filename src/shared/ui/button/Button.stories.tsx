import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { ButtonSize, ButtonTheme } from "./ButtonProps";
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
    theme: ButtonTheme.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
  },
};

export const OutlineSizeL: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
  },
};

export const OutlineSizeXL: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
  },
};

export const OutlineDARK: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [StyleDecorator(Theme.DARK)],
};

export const Background: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.BACKGROUND,
  },
};

export const BackgroundInverted: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const Square: Story = {
  args: {
    children: ">",
    square: true,
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const SquareSizeL: Story = {
  args: {
    children: ">",
    square: true,
    size: ButtonSize.L,
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const SquareSizeXL: Story = {
  args: {
    children: ">",
    square: true,
    size: ButtonSize.XL,
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};
