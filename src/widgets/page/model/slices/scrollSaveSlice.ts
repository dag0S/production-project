import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ScrollSaveSchema } from "../types/scrollSaveSchema";

const initialState: ScrollSaveSchema = {
  scroll: {},
};

export const scrollSaveSLice = createSlice({
  name: "scrollSave",
  initialState,
  reducers: {
    setScrollPosition: (
      state,
      {
        payload,
      }: PayloadAction<{
        path: string;
        position: number;
      }>
    ) => {
      state.scroll[payload.path] = payload.position;
    },
  },
});

export const { actions: scrollSaveActions } = scrollSaveSLice;
export const { reducer: scrollSaveReducer } = scrollSaveSLice;
