import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addNewCommentSchema } from "../types/addNewComment";

const initialState: addNewCommentSchema = {
  text: "",
};

export const addNewCommentSLice = createSlice({
  name: "addNewComment",
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(loginByUsername.pending, (state) => {
  //       state.error = undefined;
  //       state.isLoading = true;
  //     })
  //     .addCase(loginByUsername.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //     })
  //     .addCase(loginByUsername.rejected, (state, action) => {
  //       state.error = action.payload;
  //       state.isLoading = false;
  //     });
  // },
});

export const { actions: addNewCommentActions } = addNewCommentSLice;
export const { reducer: addNewCommentReducer } = addNewCommentSLice;
