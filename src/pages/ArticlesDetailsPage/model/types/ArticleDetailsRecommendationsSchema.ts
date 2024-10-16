import { EntityState } from "@reduxjs/toolkit";
import { IArticle } from "entities/article";

export interface ArticleDetailsRecommendationsSchema extends EntityState<IArticle, number> {
  isLoading?: boolean;
  error?: string;
}
