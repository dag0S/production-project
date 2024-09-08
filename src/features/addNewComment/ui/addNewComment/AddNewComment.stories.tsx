import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/storeDecorator/storeDecorator";
import AddNewComment from "./AddNewComment";

const meta = {
  title: "features/AddNewComment",
  component: AddNewComment,
} satisfies Meta<typeof AddNewComment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    onSendComment: (_: string) => {},
  },
  decorators: [StoreDecorator({})],
};
