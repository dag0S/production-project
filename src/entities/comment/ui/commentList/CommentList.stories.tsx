import type { Meta, StoryObj } from "@storybook/react";
import { CommentList } from "./CommentList";
import testImg from "shared/assets/tests/storybook.jpg";

const meta = {
  title: "entities/Comment/CommentList",
  component: CommentList,
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    comments: [
      {
        id: 1,
        text: "hello world!",
        user: {
          id: 1,
          username: "user",
          avatar: testImg,
        },
      },
      {
        id: 2,
        text: "123123123",
        user: {
          id: 1,
          username: "user",
          avatar: testImg,
        },
      },
    ],
  },
};

export const Loading: Story = {
  args: {
    comments: [],
    isLoading: true,
  },
};
