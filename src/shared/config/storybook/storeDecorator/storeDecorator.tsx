import type { Decorator } from "@storybook/react";
import { StoreProvider } from "app/providers/storeProvider";
import { loginReducer } from "features/authByUsername/model/slice/loginSlice";
import { profileReducer } from "entities/profile";
import { articleDetailsReducer } from "entities/article/model/slice/articleDetailsSlice";
import { addNewCommentReducer } from "features/addNewComment/model/slices/addNewCommentSlice";
import { articleDetailsPageReducer } from "pages/ArticlesDetailsPage/model/slices";

const defaultAsyncReducers: any = {
  loginFrom: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addNewComment: addNewCommentReducer,
  articleDetailsPage: articleDetailsPageReducer,
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
