import { StateSchema } from "app/providers/storeProvider";

export const getAddNewCommentText = (state: StateSchema) =>
  state.addNewComment?.text;
export const getAddNewCommentError = (state: StateSchema) =>
  state.addNewComment?.error;
