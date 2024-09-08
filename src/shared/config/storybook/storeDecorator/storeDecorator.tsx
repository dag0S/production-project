import type { Decorator } from "@storybook/react";
import { StoreProvider } from "app/providers/storeProvider";
import { loginReducer } from "features/authByUsername/model/slice/loginSlice";
import { profileReducer } from "entities/profile";
import { articleDetailsReducer } from "entities/article/model/slice/articleDetailsSlice";
import { addNewCommentReducer } from "features/addNewComment/model/slices/addNewCommentSlice";
import { articleDetailsCommentReducer } from "pages/ArticlesDetailsPage/model/slices/ArticleDetailsCommentsSlice";

const defaultAsyncReducers: any = {
  loginFrom: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addNewComment: addNewCommentReducer,
  articleDetailsComments: articleDetailsCommentReducer,
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
