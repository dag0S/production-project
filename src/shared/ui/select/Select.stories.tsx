import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta = {
  title: "shared/Select",
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Укажите значение",
    options: [
      { value: "1", content: "Одни" },
      { value: "2", content: "Два" },
      { value: "3", content: "Три" },
    ],
  },
};
