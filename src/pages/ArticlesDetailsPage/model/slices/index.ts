import { combineReducers } from "@reduxjs/toolkit";
import { articleDetailsPageRecommendationsReducer } from "./ArticleDetailsPageRecommendations";
import { articleDetailsCommentReducer } from "./ArticleDetailsCommentsSlice";

export const articleDetailsPageReducer = combineReducers({
  recommendations: articleDetailsPageRecommendationsReducer,
  comments: articleDetailsCommentReducer,
});
