import { EntityState } from "@reduxjs/toolkit";
import { ArticleView, IArticle } from "entities/article";

export interface articlesPageSchema extends EntityState<IArticle, number> {
  isLoading?: boolean;
  error?: string;
  view: ArticleView;
}
