import type { Meta, StoryObj } from "@storybook/react";
import ProfilePage from "./ProfilePage";
import { StyleDecorator } from "shared/config/storybook/styleDecorator/styleDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/storeDecorator/storeDecorator";

const meta = {
  title: "pages/ProfilePage",
  component: ProfilePage,
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [StoreDecorator({})],
};

export const Dark: Story = {
  decorators: [StyleDecorator(Theme.DARK), StoreDecorator({})],
};
