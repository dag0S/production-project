import { ReactNode } from "react";
import { StateSchema } from "../config/StateSchema";
import { ReducersMapObject } from "@reduxjs/toolkit";

export interface StoreProviderProps {
  children: ReactNode;
  initialState?: StateSchema; 
  asyncReducers?: ReducersMapObject<StateSchema>
}
