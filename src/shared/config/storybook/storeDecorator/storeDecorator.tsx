import type { Decorator } from "@storybook/react";
import { StoreProvider } from "app/providers/storeProvider";
import { loginReducer } from "features/authByUsername/model/slice/loginSlice";

import "app/styles/index.scss";

const defaultAsyncReducers: any = {
  loginFrom: loginReducer,
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
