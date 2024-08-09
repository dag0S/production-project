import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { StyleDecorator } from "shared/config/storybook/styleDecorator/styleDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/Modal",
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
        ipsum! Et, officiis minima ab tempora consectetur voluptatibus, eligendi
        excepturi temporibus dignissimos reprehenderit sed perspiciatis dolorum
        dolorem voluptate! Fugiat, voluptate eos!`,
    isOpen: true,
  },
};

export const Dark: Story = {
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
        ipsum! Et, officiis minima ab tempora consectetur voluptatibus, eligendi
        excepturi temporibus dignissimos reprehenderit sed perspiciatis dolorum
        dolorem voluptate! Fugiat, voluptate eos!`,
    isOpen: true,
  },
  decorators: [StyleDecorator(Theme.DARK)],
};
