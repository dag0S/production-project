import type { Decorator } from "@storybook/react";
import { StoreProvider } from "app/providers/storeProvider";

import "app/styles/index.scss";

export const StoreDecorator =
  (state: any): Decorator =>
  (Story) => (
    <StoreProvider initialState={state}>
      <Story />
    </StoreProvider>
  );
