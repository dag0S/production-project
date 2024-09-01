import type { Decorator } from "@storybook/react";
import { StoreProvider } from "app/providers/storeProvider";
import { loginReducer } from "features/authByUsername/model/slice/loginSlice";
import { profileReducer } from "entities/profile";
import { articleDetailsReducer } from "entities/article/model/slice/articleDetailsSlice";

const defaultAsyncReducers: any = {
  loginFrom: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
};

export const StoreDecorator =
  (state: any, asyncReducers?: any): Decorator =>
  (Story) => (
    <StoreProvider
      initialState={state}
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
      <Story />
    </StoreProvider>
  );
