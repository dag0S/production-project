import { ReactNode } from "react";
import { StateSchema } from "../config/StateSchema";

export interface StoreProviderProps {
  children: ReactNode;
  initialState?: StateSchema; 
}
