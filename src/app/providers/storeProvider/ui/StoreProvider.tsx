import { FC } from "react";
import { Provider } from "react-redux";
import { StoreProviderProps } from "./StoreProviderProps";
import { createReduxStore } from "../config/store";

export const StoreProvider: FC<StoreProviderProps> = ({
  children,
  initialState,
  asyncReducers,
}) => {
  const store = createReduxStore(initialState, asyncReducers);

  return <Provider store={store}>{children}</Provider>;
};
