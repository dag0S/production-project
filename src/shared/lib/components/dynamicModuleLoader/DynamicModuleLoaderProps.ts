import { Reducer } from "@reduxjs/toolkit";
import { StateSchemaKey } from "app/providers/storeProvider/config/StateSchema";
import { ReactNode } from "react";

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

export type ReducersListEntry = [StateSchemaKey, Reducer];

export interface DynamicModuleLoaderProps {
  children: ReactNode;
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}
