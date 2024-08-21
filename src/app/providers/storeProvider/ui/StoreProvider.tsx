import { FC } from "react";
import { StoreProviderProps } from "./StoreProviderProps";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";

export const StoreProvider: FC<StoreProviderProps> = ({
  children,
  initialState,
  asyncReducers,
}) => {
  const store = createReduxStore(initialState, asyncReducers);

  return <Provider store={store}>{children}</Provider>;
};
