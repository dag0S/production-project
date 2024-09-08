import type { Meta, StoryObj } from "@storybook/react";
import { CommentItem } from "./CommentItem";
import testImg from "shared/assets/tests/storybook.jpg";

const meta = {
  title: "entities/Comment/CommentItem",
  component: CommentItem,
} satisfies Meta<typeof CommentItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    comment: {
      id: 1,
      text: "hello world!",
      user: {
        id: 1,
        username: "user",
        avatar: testImg,
      },
    },
  },
};

export const Loading: Story = {
  args: {
    comment: {
      id: 1,
      text: "hello world!",
      user: {
        id: 1,
        username: "user",
        avatar: testImg,
      },
    },
    isLoading: true,
  },
};
